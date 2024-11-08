use anyhow::Context;
use array_to_map_transform::do_array_to_map_transform;
use serde::Deserialize;
use std::collections::{HashMap, HashSet};
use std::fs::OpenOptions;
use std::io::Write;
use walk::walk_ty;

mod array_to_map_transform;
mod de;
mod oxc_find;
mod walk;

#[cfg(test)]
mod test {
    use std::{fs, io::Cursor};

    use anyhow::Context;
    use insta::{assert_snapshot, glob};

    use crate::{print_to_writer, Protocol};

    #[test]
    fn test_parsing_protocol_files() {
        glob!("inputs/*.json", |path| {
            let input = fs::read_to_string(path).unwrap();

            let p: Protocol = serde_json::from_str(&input)
                .context("failed to parse protocol.json file")
                .unwrap_or_else(|e| panic!("{e:#?}, failed to parse protocol.json file: {path:?}"));

            let mut buffer = Cursor::new(Vec::new()); // Cursor around Vec<u8>

            print_to_writer(p, &mut buffer).unwrap();

            let result = String::from_utf8(buffer.into_inner()).unwrap(); // Convert Vec<u8> to String

            assert_snapshot!(result);
        });
    }

    #[test]
    fn test_parsing_mcdata_protocol_files() {
        glob!("../minecraft-data/data/pc", "**/protocol.json", |path| {
            let input = fs::read_to_string(path).unwrap();

            let p: Protocol = serde_json::from_str(&input)
                .context("failed to parse protocol.json file")
                .unwrap_or_else(|e| panic!("{e:#?}, failed to parse protocol.json file: {path:?}"));

            let mut buffer = Cursor::new(Vec::new()); // Cursor around Vec<u8>

            print_to_writer(p, &mut buffer).unwrap();

            let result = String::from_utf8(buffer.into_inner()).unwrap(); // Convert Vec<u8> to String

            assert_snapshot!(result);
        });
    }
}

#[derive(Debug, Deserialize)]
struct Protocol {
    types: HashMap<String, Ty>,
    handshaking: Option<BiDirectionalPackets>,
    status: Option<BiDirectionalPackets>,
    login: Option<BiDirectionalPackets>,
    configuration: Option<BiDirectionalPackets>,
    play: Option<BiDirectionalPackets>,
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

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ContainerType {
    fields: Vec<TypeInContainer>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
#[serde(untagged)]
enum TypeInContainer {
    Named(TypeWithName),
    Anonymous(AnonymousType),
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
#[serde(untagged)]
pub enum ArrayType {
    FixedSize(FixedArrayType),
    VariableSize(VariableArrayType),
    ReferencedLength(ExplicitReferencedLengthType),
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct ExplicitReferencedLengthType {
    #[serde(rename = "count")]
    referenced_length: String,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct FixedArrayType {
    count: u32,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct VariableArrayType {
    #[serde(rename = "countType")]
    count_type: Box<Ty>,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct TypeWithName {
    name: String,
    #[serde(rename = "type")]
    ty: Ty,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct AnonymousType {
    #[serde(rename = "type")]
    ty: Ty,
    anon: bool,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct BitFieldType {
    name: String,
    size: u8,
    signed: bool,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct SwitchType {
    #[serde(rename = "compareTo")]
    compare_to: String,
    fields: HashMap<String, Ty>,
    default: Option<Box<Ty>>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct CountType {
    #[serde(rename = "countFor")]
    count_for: String,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
#[serde(untagged)]
enum BufferType {
    Typed {
        #[serde(rename = "countType")]
        count_type: Box<Ty>,
    },
    Fixed {
        count: u32,
    },
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct MapperType {
    #[serde(rename = "type")]
    ty: Box<Ty>,
    // todo: make the string just Ty when we have a catchall type
    mappings: HashMap<String, String>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
enum HashCountType {
    Typed(Box<Ty>),
    Fixed(u32),
    ReferencedLength(String),
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct EntityMetadataLoopType {
    #[serde(rename = "endVal")]
    end_val: u32,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct EntityMetadataItemType {
    #[serde(rename = "compareTo")]
    compare_to: String,
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
struct ParticleDataType {
    #[serde(rename = "compareTo")]
    compare_to: String,
}

const VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE: bool = false;

#[derive(Debug, Clone, PartialEq, Eq)]
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
    AnonymousNbt,
    EntityMetadataItem {
        ty: EntityMetadataItemType,
    },

    ParticleData {
        ty: ParticleDataType,
    },

    // todo: add arguments
    ArrayWithLengthOffset,
    EntityMetadataLoop {
        ty: EntityMetadataLoopType,
    },

    NativeType,
    NonNativeType(String),

    Count {
        ty: CountType,
    },

    TopBitSetTerminatedArray {
        ty: Box<Ty>,
    },

    PString {
        count_type: Box<Ty>,
    },
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
fn print_ty(ty: &Ty, anon: &mut u32) -> String {
    match ty {
        Ty::VarInt => "VarInt".to_string(),
        Ty::F64 => "f64".to_string(),
        Ty::I16 => "i16".to_string(),
        Ty::I8 => "i8".to_string(),
        Ty::I32 => "i32".to_string(),
        Ty::UUID => "UUID".to_string(),
        Ty::EntityMetadata => "entityMetadata".to_string(),
        Ty::String => "String_".to_string(),
        Ty::Position => "position".to_string(),
        Ty::U8 => "u8".to_string(),
        Ty::Bool => "bool".to_string(),
        Ty::Slot => "Slot".to_string(),
        Ty::F32 => "f32".to_string(),
        Ty::Void => "Void".to_string(),
        Ty::I64 => "i64".to_string(),
        Ty::OptionalNbt => "OptionalNbt".to_string(),
        Ty::RestBuffer => "RestBuffer".to_string(),
        Ty::Nbt => "Nbt".to_string(),
        Ty::VarLong => "varlong".to_string(),
        Ty::U16 => "u16".to_string(),
        Ty::Option { ty } => format!("option<{}>", print_ty(ty, anon)),
        Ty::Map {
            key,
            value,
            count_type,
        } => format!(
            "Record_<{}, {}{}>",
            print_ty(key, anon),
            print_ty(value, anon),
            {
                let value = match count_type {
                    HashCountType::Typed(ty) => format!("{}", print_ty(ty.as_ref(), anon)),
                    HashCountType::Fixed(s) => format!("{}", s),
                    HashCountType::ReferencedLength(referenced_length) => {
                        format!("\"{}\"", referenced_length)
                    }
                };

                if !VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE && value == "VarInt" {
                    "".to_string()
                } else {
                    format!(", {}", value)
                }
            }
        ),
        Ty::BitField { fields } => {
            let mut fields = fields.iter().collect::<Vec<_>>();
            fields.sort_by_key(|x| x.name.clone());

            format!(
                "BitField<{{ fields: [{}] }}>",
                fields
                    .iter()
                    .map(|x| format!(
                        "{{ name: \"{}\", size: {}, signed: {} }}",
                        x.name, x.size, x.signed
                    ))
                    .collect::<Vec<_>>()
                    .join(", ")
            )
        }
        Ty::Switch { switch } => {
            if switch.fields.len() > 0 {
                let mut fields = switch.fields.iter().collect::<Vec<_>>();
                fields.sort_by_key(|x| x.0.as_str());

                format!(
                    "{{ {}; _: {} }} /* .get({}) */",
                    fields
                        .iter()
                        .map(|x| format!("\"{}\": {}", x.0, print_ty(&x.1, anon)))
                        .collect::<Vec<_>>()
                        .join(" ;"),
                    switch
                        .default
                        .as_ref()
                        .map(|x| print_ty(x, anon))
                        .unwrap_or_else(|| "Void".to_string()),
                    switch.compare_to
                )
            } else {
                format!("/* empty switch */ any")
            }
        }
        Ty::Mapper { mapper } => {
            if mapper.mappings.len() > 0 {
                let mut mappings = mapper.mappings.iter().collect::<Vec<_>>();
                mappings.sort_by_key(|x| x.0.clone());

                format!(
                    "{{ {}; _ : Void; }}[{}] /* mapper */",
                    mappings
                        .iter()
                        .map(|x| format!("{}: \"{}\"", x.0, x.1))
                        .collect::<Vec<_>>()
                        .join("; "),
                    {
                        let v = print_ty(&mapper.ty, anon);
                        if !VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE && v == "VarInt" {
                            "".to_string()
                        } else {
                            format!("{}", v)
                        }
                    }
                )
            } else {
                format!("/* empty mapper */ any")
            }
        }
        Ty::Container { ty } => {
            let mut fields = ty.fields.iter().collect::<Vec<_>>();
            fields.sort_by(|x, y| {
                // if both are named, sort by name
                // if one is anonymous, anonymous comes last
                // if both are anonymous, they are considered equal
                if let (TypeInContainer::Named(x), TypeInContainer::Named(y)) = (x, y) {
                    x.name.cmp(&y.name)
                } else if let (TypeInContainer::Anonymous(_), TypeInContainer::Anonymous(_)) =
                    (x, y)
                {
                    std::cmp::Ordering::Equal
                } else if let TypeInContainer::Anonymous(_) = x {
                    std::cmp::Ordering::Less
                } else {
                    std::cmp::Ordering::Greater
                }
            });

            format!(
                "{{ {} }}",
                fields
                    .iter()
                    .map(|x| match x {
                        TypeInContainer::Named(type_with_name) => {
                            format!(
                                "{}: {}",
                                type_with_name.name,
                                print_ty(&type_with_name.ty, anon)
                            )
                        }
                        TypeInContainer::Anonymous(anonymous_type) => {
                            assert!(anonymous_type.anon);
                            let used_anon = *anon;
                            *anon += 1;
                            format!("_anon_{used_anon}: {}", print_ty(&anonymous_type.ty, anon))
                        }
                    })
                    .collect::<Vec<_>>()
                    .join(", ")
            )
        }
        Ty::NonNativeType(s) => format!("{s}"),
        Ty::NativeType => "never /* native */".to_string(),
        Ty::Array { ty } => match ty {
            ArrayType::FixedSize(fixed_array_type) => format!(
                "Arr<{{ arraySize: {}, elementType: {} }}>",
                fixed_array_type.count,
                print_ty(&fixed_array_type.ty, anon)
            ),
            ArrayType::VariableSize(variable_array_type) => {
                format!("{}[{}]", print_ty(&variable_array_type.ty, anon), {
                    let v = print_ty(&variable_array_type.count_type, anon);
                    if !VARINT_TO_BE_PRINTED_IN_ARRAY_SIZE_OR_HASHMAP_SIZE && v == "VarInt" {
                        "".to_string()
                    } else {
                        format!("{}", v)
                    }
                })
            }
            ArrayType::ReferencedLength(explicit_referenced_length_type) => {
                format!(
                    "Arr<{{ referencedLength: \"{}\", elementType: {} }}>",
                    explicit_referenced_length_type.referenced_length,
                    print_ty(&explicit_referenced_length_type.ty, anon)
                )
            }
        },
        Ty::Buffer { ty } => match ty {
            BufferType::Typed { count_type } => {
                format!("Buffer<{{ countType: {} }}>", print_ty(count_type, anon))
            }
            BufferType::Fixed { count } => format!("Buffer<{{ count: {} }}>", count),
        },
        Ty::AnonymousNbt => "anonymousNbt".to_string(),
        Ty::ArrayWithLengthOffset => "arrayWithLengthOffset".to_string(),
        Ty::PString { count_type } => {
            format!("pstring<{{ countType: {} }}>", print_ty(count_type, anon))
        }
        Ty::EntityMetadataLoop { ty } => {
            format!(
                "entityMetadataLoop<{{ ty: {}, endVal: {} }}>",
                print_ty(&ty.ty, anon),
                ty.end_val
            )
        }
        Ty::TopBitSetTerminatedArray { ty } => {
            format!("topBitSetTerminatedArray<{{ ty: {} }}>", print_ty(ty, anon))
        }
        Ty::EntityMetadataItem { ty } => {
            format!("entityMetadataItem<{{ compareTo: \"{}\" }}>", ty.compare_to)
        }
        Ty::ParticleData { ty } => {
            format!("ParticleData<{{ compareTo: \"{}\" }}>", ty.compare_to)
        }
        Ty::Count { ty } => {
            format!(
                "Count<{{ countFor: \"{}\", type: {} }}>",
                ty.count_for,
                print_ty(&ty.ty, anon)
            )
        }
    }
}

fn print_multiline_block(ty: &Ty, anon: &mut u32) -> String {
    if let Ty::Mapper { .. } = ty {
        return print_ty(ty, anon);
    }

    let Ty::Container { ty } = &ty else {
        panic!(
            "print_multiline_block got a ty that isn't a block. {:?}",
            ty
        );
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
                        print_ty(&type_with_name.ty, anon)
                    )
                }
                TypeInContainer::Anonymous(anonymous_type) => {
                    assert!(anonymous_type.anon);
                    let used_anon = *anon;
                    *anon += 1;
                    format!(
                        "\t_anon_{used_anon}: {}",
                        print_ty(&anonymous_type.ty, anon)
                    )
                }
            })
            .collect::<Vec<_>>()
            .join("\n")
    )
}

const PRELUDE: &str = r#"
type VarInt = never;
// type f64 = never;
// type i16 = never;
// type i8 = never;
// type i32 = never;
// type UUID = never;
// type EntityMetadata = never;
// type Position = never;
// type u8 = never;
// type bool = never;
// type Slot = never;
// type f32 = never;
type Void = never;
// type i64 = never;
// type OptionalNbt = never;
type RestBuffer = never;
// type Nbt = never;
// type VarLong = never;
// type u16 = never;
type Arr<T> = never;
type BitField<T> = never;
type Buffer<T> = never;
type Record_<K, V, Size = varint> = never;
type topBitSetTerminatedArray<T> = never;
type pstring<T> = never;
type entityMetadataLoop<T> = never;
type option<T> = never;
type String_ = never;
type ParticleData<T> = never;
"#;

fn print_to_writer(p: Protocol, mut file: &mut impl Write) -> anyhow::Result<()> {
    let types_not_to_print: HashSet<String> = {
        let mut types_not_to_print = HashSet::new();
        types_not_to_print.insert("topBitSetTerminatedArray".to_string());
        types_not_to_print.insert("pstring".to_string());
        types_not_to_print.insert("entityMetadataLoop".to_string());
        types_not_to_print.insert("option".to_string());
        types_not_to_print.insert("void".to_string());
        types_not_to_print.insert("string".to_string());
        types_not_to_print.insert("switch".to_string());
        types_not_to_print.insert("particleData".to_string());
        types_not_to_print
    };

    writeln!(file, "{PRELUDE}")?;

    let mut anon = 0;

    {
        let mut tys = p.types.into_iter().collect::<Vec<_>>();

        tys.sort_by_key(|x| x.0.clone());

        for (name, mut ty) in tys {
            if types_not_to_print.contains(&name) {
                continue;
            }

            walk_ty(&mut ty, do_array_to_map_transform);
            let intf = format!("\ntype {} = {}\n", name, print_ty(&ty, &mut anon));
            writeln!(file, "{intf}")?;
        }
    }

    fn print_bidi_packet_block(
        file: &mut impl Write,
        namespace: &str,
        packets: BiDirectionalPackets,
        anon: &mut u32,
    ) -> anyhow::Result<()> {
        {
            writeln!(file, "namespace {namespace}.to_client {{")?;
            let mut packets = packets.to_client.types.into_iter().collect::<Vec<_>>();

            packets.sort_by_key(|x| x.0.clone());

            for (name, mut ty) in packets {
                walk_ty(&mut ty, do_array_to_map_transform);
                let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty, anon));
                writeln!(file, "{intf}")?;
            }
            writeln!(file, "}}")?;
        }

        {
            writeln!(file, "namespace {namespace}.to_server {{")?;
            let mut packets = packets.to_server.types.into_iter().collect::<Vec<_>>();

            packets.sort_by_key(|x| x.0.clone());

            for (name, mut ty) in packets {
                walk_ty(&mut ty, do_array_to_map_transform);
                let intf = format!("\ninterface {name} {}\n", print_multiline_block(&ty, anon));
                writeln!(file, "{intf}")?;
            }
            writeln!(file, "}}")?;
        }

        Ok(())
    }

    if let Some(handshaking) = p.handshaking {
        print_bidi_packet_block(&mut file, "handshaking", handshaking, &mut anon)?;
    }
    if let Some(status) = p.status {
        print_bidi_packet_block(&mut file, "status", status, &mut anon)?;
    }
    if let Some(login) = p.login {
        print_bidi_packet_block(&mut file, "login", login, &mut anon)?;
    }
    if let Some(configuration) = p.configuration {
        print_bidi_packet_block(&mut file, "configuration", configuration, &mut anon)?;
    }
    if let Some(play) = p.play {
        print_bidi_packet_block(&mut file, "play", play, &mut anon)?;
    }

    Ok(())
}

// changes all arrays with varint countType and values of compound {key, value} to Map<key, value>

fn main() -> anyhow::Result<()> {
    // oxc_find::find();

    let protocol_txt = include_str!("protocol.json");

    let p: Protocol =
        serde_json::from_str(protocol_txt).context("failed to parse protocol.json file")?;

    std::fs::remove_file("protocol.ts")?;
    let mut file = OpenOptions::new()
        .write(true)
        .append(true)
        .create(true)
        // .truncate(true)
        .open("protocol.ts")?;

    // let mut buffer = Cursor::new(Vec::new()); // Cursor around Vec<u8>
    // let result = String::from_utf8(buffer.into_inner())?; // Convert Vec<u8> to String

    print_to_writer(p, &mut file)?;

    // println!("{}", result);

    Ok(())
}
