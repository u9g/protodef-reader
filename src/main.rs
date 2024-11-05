use anyhow::Context;
use serde::Deserialize;
use std::io::Write;
use std::mem;
use std::{collections::HashMap, fs::OpenOptions};

mod de;

#[derive(Debug, Deserialize)]
struct Protocol {
    handshaking: BiDirectionalPackets,
    status: BiDirectionalPackets,
    login: BiDirectionalPackets,
    play: BiDirectionalPackets,
}

#[derive(Debug, Deserialize)]
struct BiDirectionalPackets {
    #[serde(rename = "toClient")]
    to_client: TypeHolder,
    #[serde(rename = "toServer")]
    to_server: TypeHolder,
}

#[derive(Debug, Deserialize)]
struct TypeHolder {
    types: HashMap<String, Ty>,
}

#[derive(Debug, Clone)]
pub struct ContainerType {
    fields: Vec<TypeInContainer>,
}

#[derive(Debug, Deserialize, Clone)]
#[serde(untagged)]
enum TypeInContainer {
    Named(TypeWithName),
    Anonymous(AnonymousType),
}

#[derive(Debug, Deserialize, Clone)]
#[serde(untagged)]
pub enum ArrayType {
    FixedSize(FixedArrayType),
    VariableSize(VariableArrayType),
}

#[derive(Debug, Deserialize, Clone)]
pub struct FixedArrayType {
    count: u8,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone)]
pub struct VariableArrayType {
    #[serde(rename = "countType")]
    count_type: Box<Ty>,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone)]
struct TypeWithName {
    name: String,
    #[serde(rename = "type")]
    ty: Ty,
}

#[derive(Debug, Deserialize, Clone)]
struct AnonymousType {
    #[serde(rename = "type")]
    ty: Ty,
    anon: bool,
}

#[derive(Debug, Deserialize, Clone)]
struct BitFieldType {
    name: String,
    size: u8,
    signed: bool,
}

#[derive(Debug, Deserialize, Clone)]
struct SwitchType {
    #[serde(rename = "compareTo")]
    compare_to: String,
    fields: HashMap<String, Ty>,
    default: Option<Box<Ty>>,
}

#[derive(Debug, Deserialize, Clone)]
struct BufferType {
    #[serde(rename = "countType")]
    count_type: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone)]
struct MapperType {
    #[serde(rename = "type")]
    ty: Box<Ty>,
    // todo: make the string just Ty when we have a catchall type
    mappings: HashMap<String, String>,
}

#[derive(Debug, Clone)]
enum HashCountType {
    Typed(Box<Ty>),
    Fixed(String),
}

const VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE: bool = false;

#[derive(Debug, Clone)]
enum Ty {
    VarInt,
    F64,
    I16,
    I8,
    I32,
    UUID,
    EntityMetadata,
    String,
    Position,
    U8,
    Bool,
    Slot,
    F32,
    Void,
    I64,
    OptionalNbt,
    RestBuffer,
    Nbt,
    VarLong,
    U16,
    NonNativeType(String),
    Option {
        ty: Box<Ty>,
    },
    Buffer {
        ty: BufferType,
    },
    BitField {
        fields: Vec<BitFieldType>,
    },
    Switch {
        switch: SwitchType,
    },
    Container {
        ty: ContainerType,
    },
    Array {
        ty: ArrayType,
    },
    Mapper {
        mapper: MapperType,
    },

    // artificial types
    Map {
        key: Box<Ty>,
        value: Box<Ty>,
        count_type: HashCountType,
    },
}

// TODO: VarInt as a Hashmap Size or an Array Key is elided from the output
fn print_ty(ty: &Ty) -> String {
    match ty {
        Ty::VarInt => "VarInt".to_string(),
        Ty::F64 => "f64".to_string(),
        Ty::I16 => "i16".to_string(),
        Ty::I8 => "i8".to_string(),
        Ty::I32 => "i32".to_string(),
        Ty::UUID => "UUID".to_string(),
        Ty::EntityMetadata => "EntityMetadata".to_string(),
        Ty::String => "string".to_string(),
        Ty::Position => "Position".to_string(),
        Ty::U8 => "u8".to_string(),
        Ty::Bool => "bool".to_string(),
        Ty::Slot => "Slot".to_string(),
        Ty::F32 => "f32".to_string(),
        Ty::Void => "Void".to_string(),
        Ty::I64 => "i64".to_string(),
        Ty::OptionalNbt => "OptionalNbt".to_string(),
        Ty::RestBuffer => "RestBuffer".to_string(),
        Ty::Nbt => "Nbt".to_string(),
        Ty::VarLong => "VarLong".to_string(),
        Ty::U16 => "u16".to_string(),
        Ty::Option { ty } => format!("Option<{}>", print_ty(ty)),
        Ty::Map {
            key,
            value,
            count_type,
        } => format!("Record_<{}, {}{}>", print_ty(key), print_ty(value), {
            let value = match count_type {
                HashCountType::Typed(ty) => format!("{}", print_ty(ty.as_ref())),
                HashCountType::Fixed(s) => format!("{}", s),
            };

            if !VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE && value == "VarInt" {
                "".to_string()
            } else {
                format!(", {}", value)
            }
        }),
        Ty::BitField { fields } => format!(
            "BitField<{{ fields: [{}] }}>",
            fields
                .iter()
                .map(|x| format!(
                    "{{ name: \"{}\", size: {}, signed: {} }}",
                    x.name, x.size, x.signed
                ))
                .collect::<Vec<_>>()
                .join(", ")
        ),
        Ty::Switch { switch } => {
            if switch.fields.len() > 0 {
                format!(
                    "{{ {}; _: {} }} /* .get({}) */",
                    switch
                        .fields
                        .iter()
                        .map(|x| format!("{}: {}", x.0, print_ty(&x.1)))
                        .collect::<Vec<_>>()
                        .join(" ;"),
                    switch
                        .default
                        .as_ref()
                        .map(|x| print_ty(&x))
                        .unwrap_or_else(|| "void".to_string()),
                    switch.compare_to
                )
            } else {
                format!("/* empty switch */ any")
            }
        }
        Ty::Mapper { mapper } => {
            if mapper.mappings.len() > 0 {
                format!(
                    "{} : Void",
                    // switch.compare_to,
                    mapper
                        .mappings
                        .iter()
                        .map(|x| format!(
                            "this extends \"{}\" ? \"{}\" /* mapper of varint */",
                            x.0, x.1
                        ))
                        .collect::<Vec<_>>()
                        .join(" : ")
                )
            } else {
                format!("/* empty mapper */ any")
            }
        }
        Ty::Container { ty } => format!(
            "{{ {} }}",
            ty.fields
                .iter()
                .map(|x| match x {
                    TypeInContainer::Named(type_with_name) => {
                        format!("{}: {}", type_with_name.name, print_ty(&type_with_name.ty))
                    }
                    TypeInContainer::Anonymous(anonymous_type) => {
                        assert!(anonymous_type.anon);
                        format!("_anon: {}", print_ty(&anonymous_type.ty))
                    }
                })
                .collect::<Vec<_>>()
                .join(", ")
        ),
        Ty::NonNativeType(s) => format!("{s}"),
        Ty::Array { ty } => match ty {
            ArrayType::FixedSize(fixed_array_type) => format!(
                "Arr<{{ arraySize: {}, elementType: {} }}>",
                fixed_array_type.count,
                print_ty(&fixed_array_type.ty)
            ),
            ArrayType::VariableSize(variable_array_type) => {
                format!("{}[{}]", print_ty(&variable_array_type.ty), {
                    let v = print_ty(&variable_array_type.count_type);
                    if !VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE && v == "VarInt" {
                        "".to_string()
                    } else {
                        format!("{}", v)
                    }
                })
            }
        },
        Ty::Buffer { ty } => format!("Buffer<{{ countType: {} }}>", print_ty(&ty.count_type)),
    }
}

fn print_multiline_block(ty: &Ty) -> String {
    let Ty::Container { ty } = ty else {
        panic!("print_multiline_block got a ty that isn't a block.")
    };
    format!(
        "{{\n{}\n}}",
        ty.fields
            .iter()
            .map(|x| match x {
                TypeInContainer::Named(type_with_name) => {
                    format!(
                        "\t{}: {},",
                        type_with_name.name,
                        print_ty(&type_with_name.ty)
                    )
                }
                TypeInContainer::Anonymous(anonymous_type) => {
                    assert!(anonymous_type.anon);
                    format!("\t_anon: {}", print_ty(&anonymous_type.ty))
                }
            })
            .collect::<Vec<_>>()
            .join("\n")
    )
}

const PRELUDE: &str = r#"
type VarInt = never;
type f64 = never;
type i16 = never;
type i8 = never;
type i32 = never;
type UUID = never;
type EntityMetadata = never;
type Position = never;
type u8 = never;
type bool = never;
type Slot = never;
type f32 = never;
type Void = never;
type i64 = never;
type OptionalNbt = never;
type RestBuffer = never;
type Nbt = never;
type VarLong = never;
type u16 = never;
type Arr<T> = never;
type BitField<T> = never;
type Option<T> = never;
type Buffer<T> = never;
type Record_<K, V, Size = VarInt> = never;
"#;

// changes all arrays with varint countType and values of compound {key, value} to Map<key, value>
fn walk_ty(top_lvl_ty: &mut Ty) {
    match top_lvl_ty {
        Ty::Array {
            // TODO: Check non-variable size arrays too!
            ty: ArrayType::VariableSize(VariableArrayType { count_type, ty }),
        } => {
            if let Ty::Container { ref mut ty } = ty.as_mut() {
                if ty.fields.len() == 2 {
                    match (ty.fields.get(0), ty.fields.get(1)) {
                        (
                            Some(TypeInContainer::Named(TypeWithName { name, ref ty })),
                            Some(TypeInContainer::Named(TypeWithName {
                                name: name2,
                                ty: ref ty2,
                            })),
                        ) if name == "key" && name2 == "value" => {
                            let mut ty = ty.clone();
                            let mut ty2 = ty2.clone();
                            let mut count_type = count_type.clone();
                            walk_ty(&mut ty);
                            walk_ty(&mut ty2);
                            walk_ty(&mut count_type);
                            *top_lvl_ty = Ty::Map {
                                key: Box::new(ty),
                                value: Box::new(ty2),
                                count_type: HashCountType::Typed(count_type),
                            };
                        }
                        (
                            Some(TypeInContainer::Named(TypeWithName { name, ref ty })),
                            Some(TypeInContainer::Named(TypeWithName {
                                name: name2,
                                ty: ref ty2,
                            })),
                        ) if name2 == "key" && name == "value" => {
                            let mut ty2 = ty2.clone();
                            let mut ty = ty.clone();
                            let mut count_type = count_type.clone();
                            walk_ty(&mut ty2);
                            walk_ty(&mut ty);
                            walk_ty(&mut count_type);
                            *top_lvl_ty = Ty::Map {
                                key: Box::new(ty2),
                                value: Box::new(ty),
                                count_type: HashCountType::Typed(count_type),
                            };
                        }
                        _ => {}
                    }
                }
            }
        }
        Ty::VarInt
        | Ty::F64
        | Ty::I16
        | Ty::I8
        | Ty::I32
        | Ty::UUID
        | Ty::EntityMetadata
        | Ty::String
        | Ty::Position
        | Ty::U8
        | Ty::Bool
        | Ty::Slot
        | Ty::F32
        | Ty::Void
        | Ty::I64
        | Ty::OptionalNbt
        | Ty::RestBuffer
        | Ty::Nbt
        | Ty::VarLong
        | Ty::NonNativeType(_)
        | Ty::BitField { .. }
        | Ty::U16 => {}
        Ty::Array { ty } => match ty {
            ArrayType::FixedSize(fixed_array_type) => {
                walk_ty(&mut fixed_array_type.ty);
            }
            ArrayType::VariableSize(variable_array_type) => {
                walk_ty(&mut variable_array_type.count_type);
                walk_ty(&mut variable_array_type.ty);
            }
        },
        Ty::Option { ty } => walk_ty(ty.as_mut()),
        Ty::Buffer { ty } => walk_ty(&mut ty.count_type),
        Ty::Switch { switch } => {
            if let Some(default) = &mut switch.default {
                walk_ty(default);
            }

            for (_, field) in switch.fields.iter_mut() {
                walk_ty(field);
            }
        }
        Ty::Container { ty } => {
            for field in ty.fields.iter_mut() {
                match field {
                    TypeInContainer::Named(type_with_name) => {
                        walk_ty(&mut type_with_name.ty);
                    }
                    TypeInContainer::Anonymous(anonymous_type) => {
                        assert!(anonymous_type.anon);
                        walk_ty(&mut anonymous_type.ty);
                    }
                }
            }
        }
        Ty::Mapper { mapper } => {
            walk_ty(&mut mapper.ty);
        }
        Ty::Map {
            key,
            value,
            count_type,
        } => {
            walk_ty(key);
            walk_ty(value);
            match count_type {
                HashCountType::Typed(ty) => walk_ty(ty),
                HashCountType::Fixed(_) => {}
            }
        }
    }
}

fn main() -> anyhow::Result<()> {
    let protocol_txt = include_str!("protocol.json");
    let mut p: Protocol =
        serde_json::from_str(protocol_txt).context("failed to parse protocol.json file")?;

    std::fs::remove_file("protocol.ts")?;
    let mut file = OpenOptions::new()
        .write(true)
        .append(true)
        .create(true)
        // .truncate(true)
        .open("protocol.ts")?;

    writeln!(file, "{PRELUDE}")?;

    // handshaking

    writeln!(file, "namespace handshaking.to_client {{")?;
    for (name, mut ty) in p.handshaking.to_client.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    writeln!(file, "namespace handshaking.to_server {{")?;
    for (name, mut ty) in p.handshaking.to_server.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    // status

    writeln!(file, "namespace status.to_client {{")?;
    for (name, mut ty) in p.status.to_client.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    writeln!(file, "namespace status.to_server {{")?;
    for (name, mut ty) in p.status.to_server.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    // login

    writeln!(file, "namespace login.to_client {{")?;
    for (name, mut ty) in p.login.to_client.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    writeln!(file, "namespace login.to_server {{")?;
    for (name, mut ty) in p.login.to_server.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    // play

    writeln!(file, "namespace play.to_client {{")?;
    for (name, mut ty) in p.play.to_client.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    writeln!(file, "namespace play.to_server {{")?;
    for (name, mut ty) in p.play.to_server.types {
        walk_ty(&mut ty);
        let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty));
        writeln!(file, "{intf}")?;
    }
    writeln!(file, "}}")?;

    // println!("{p:#?}");

    Ok(())
}
