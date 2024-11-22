use std::collections::{hash_map::Entry, HashMap, HashSet};

use crate::{AnonymousType, BiDirectionalPackets, Protocol, Ty, TypeWithName};

fn print_type_with_name(type_with_name: &TypeWithName, ctx: &mut Context) {
    let printed = print_ty(&type_with_name.ty, ctx);
    if printed.len() == 0 {
        println!("no length type: {:?}", type_with_name.ty)
    }

    ctx.add_field_type_to_container(type_with_name.name.clone(), printed);
}

fn print_anonymous_type(anonymous_type: &AnonymousType, ctx: &mut Context) {
    match &anonymous_type.ty {
        Ty::Container { ty } => {
            ty.fields.iter().for_each(|f| match f {
                crate::TypeInContainer::Named(type_with_name) => {
                    print_type_with_name(type_with_name, ctx)
                }
                crate::TypeInContainer::Anonymous(anonymous_type) => {
                    print_anonymous_type(anonymous_type, ctx)
                }
            });
        }
        Ty::Switch { switch } => {
            switch.fields.iter().for_each(|(_, ty)| match ty {
                Ty::Container { .. } => {
                    _ = print_ty(ty, ctx);
                }
                t => {
                    assert!(matches!(t, Ty::Void), "{t:#?}");
                }
            });
        }
        Ty::BitField { fields } => {
            for field in fields {
                ctx.add_field_type_to_container(field.name.clone(), "number".to_string());
                // ctx.add_to_container
                //     .push_str(&format!("{}: number\n", field.name));
            }
        }
        x => todo!("{:?}", x),
    }
}

const ANY_TYPE: &str = "never"; // "any"

#[derive(Default)]
struct Context {
    utility_types: HashMap<String, String>,
    prefix: String,
    used_types: HashSet<String>,
    added_utility_types: HashSet<String>,
    current_container_fields: HashMap<String, Vec<String>>,
    // {play: {to_client: ["play_to_client_packet_entity_look", "entity_look"]}}
    packet_names: HashMap<String, HashMap<String, HashSet<(String, String)>>>,
}

impl Context {
    fn add_field_type_to_container(&mut self, field_name: String, field_type: String) {
        match self.current_container_fields.entry(field_name.clone()) {
            Entry::Occupied(mut occupied_entry) => {
                occupied_entry.get_mut().push(field_name);
            }
            Entry::Vacant(vacant_entry) => {
                vacant_entry.insert(vec![field_type]);
            }
        }
    }
}

fn print_ty(ty: &Ty, ctx: &mut Context) -> String {
    match ty {
        Ty::U16
        | Ty::VarLong
        | Ty::F32
        | Ty::U8
        | Ty::I32
        | Ty::I8
        | Ty::I16
        | Ty::F64
        | Ty::VarInt => "number".to_string(),
        Ty::I64 => "[number, number]".to_string(),
        Ty::String | Ty::UUID => "string".to_string(),
        Ty::ParticleData { .. }
        | Ty::EntityMetadataItem { .. }
        | Ty::AnonymousNbt
        | Ty::Nbt
        | Ty::Slot
        | Ty::Position
        | Ty::ArrayWithLengthOffset
        | Ty::EntityMetadataLoop { .. }
        | Ty::NativeType
        | Ty::Count { .. }
        | Ty::TopBitSetTerminatedArray { .. }
        | Ty::PString { .. }
        | Ty::Buffer { .. }
        | Ty::EntityMetadata => ANY_TYPE.to_string(),
        Ty::Mapper { mapper } => {
            if mapper.mappings.len() > 0 {
                format!(
                    "({})",
                    mapper
                        .mappings
                        .values()
                        .map(|x| format!("\"{x}\""))
                        .collect::<Vec<_>>()
                        .join(" | ")
                )
            } else {
                "never".to_string()
            }
        }
        Ty::NonNativeType(s) => {
            let type_being_used = format!("{}{}", ctx.prefix, s);
            ctx.used_types.insert(type_being_used.clone());
            type_being_used
        }
        Ty::Bool => "boolean".to_string(),
        Ty::Void => "never".to_string(),
        Ty::OptionalNbt => format!("{} | undefined", ANY_TYPE),
        Ty::RestBuffer => "buffer".to_string(),
        Ty::Option { ty } => format!("({} | undefined)", print_ty(ty, ctx)),
        Ty::BitField { fields } => format!(
            "{{\n{}\n}}",
            fields
                .iter()
                .map(|f| format!("{}: number | boolean", f.name))
                .collect::<Vec<_>>()
                .join("\n")
        ),
        Ty::Switch { switch } => format!(
            "{}{}{}",
            switch
                .fields
                .iter()
                .map(|(name, ty)| format!("/* {name} */ {}", print_ty(ty, ctx)))
                .collect::<Vec<_>>()
                .join(" | "),
            switch
                .default
                .as_ref()
                .map(|x| format!("| {}", print_ty(&x, ctx)))
                .unwrap_or_default(),
            if switch.fields.len() == 0 && switch.default.is_none() {
                "never"
            } else {
                ""
            }
            .to_string()
        ),
        Ty::Container { ty } => {
            let new_current_container_fields: HashMap<String, Vec<String>> = Default::default();

            let previous_fields = std::mem::replace(
                &mut ctx.current_container_fields,
                new_current_container_fields,
            );

            if !ty.fields.is_empty() {
                for field in &ty.fields {
                    match field {
                        crate::TypeInContainer::Named(type_with_name) => {
                            print_type_with_name(&type_with_name, ctx)
                        }
                        crate::TypeInContainer::Anonymous(anonymous_type) => {
                            print_anonymous_type(&anonymous_type, ctx)
                        }
                    }
                }

                let str = format!(
                    "{{\n{}\n}}",
                    ctx.current_container_fields
                        .iter()
                        .map(|x| format!("{}: {}", x.0, x.1.join(" | ")))
                        .collect::<Vec<_>>()
                        .join("\n")
                );

                ctx.current_container_fields = previous_fields;

                str
            } else {
                format!("Record<never, never> & {{__type: \'empty_object\'}}")
            }
        }
        Ty::Array { ty } => format!(
            "{}[]",
            print_ty(
                match ty {
                    crate::ArrayType::FixedSize(fixed_array_type) => &fixed_array_type.ty,
                    crate::ArrayType::VariableSize(variable_array_type) => &variable_array_type.ty,
                    crate::ArrayType::ReferencedLength(explicit_referenced_length_type) =>
                        &explicit_referenced_length_type.ty,
                },
                ctx
            )
        ),
        Ty::Map {
            key,
            value,
            count_type,
        } => todo!(),
    }
}

macro_rules! process_packets {
    ($field:ident, $p:expr, $s:ident, $ctx:expr) => {
        if let Some(BiDirectionalPackets {
            to_client,
            to_server,
        }) = $p.$field.as_ref()
        {
            let mut side = "to_client";
            $ctx.prefix = format!("{}_{}_", stringify!($field), side);
            $ctx.added_utility_types.clear();
            $ctx.used_types.clear();
            for (name, ty) in &to_client.types {
                let name_with_side = format!("{}{}", $ctx.prefix, name);
                let ty_str = print_ty(ty, &mut $ctx);
                $ctx.utility_types.insert(name_with_side.clone(), ty_str);
                $ctx.added_utility_types.insert(name_with_side.clone());

                if name_with_side.ends_with("_packet") {
                    $s.push_str(&format!("| {}\n", name_with_side));
                }

                if name.starts_with("packet_") {
                    let x = $ctx.packet_names.entry(stringify!($field).to_string());
                    let packet_name = name["packet_".len()..].to_string();
                    match x {
                        Entry::Occupied(mut occupied_entry) => {
                            let entry = occupied_entry.get_mut();
                            let side_entry = entry.entry(side.to_string());
                            match side_entry {
                                Entry::Occupied(mut occupied_entry) => {
                                    occupied_entry
                                        .get_mut()
                                        .insert((name_with_side, packet_name));
                                }
                                Entry::Vacant(vacant_entry) => {
                                    vacant_entry.insert({
                                        let mut set = HashSet::default();
                                        set.insert((name_with_side, packet_name));
                                        set
                                    });
                                }
                            }
                        }
                        Entry::Vacant(vacant_entry) => {
                            vacant_entry.insert({
                                let mut map = HashMap::new();
                                map.insert(side.to_string(), {
                                    let mut set = HashSet::default();
                                    set.insert((name_with_side, packet_name));
                                    set
                                });
                                map
                            });
                        }
                    }
                }
            }
            for ty in $ctx.used_types.difference(&$ctx.added_utility_types) {
                $ctx.utility_types
                    .insert(ty.to_string(), ty[$ctx.prefix.len()..].to_string());
            }

            side = "to_server";
            $ctx.prefix = format!("{}_{}_", stringify!($field), side);
            $ctx.added_utility_types.clear();
            $ctx.used_types.clear();
            for (name, ty) in &to_server.types {
                let name_with_side = format!("{}{}", $ctx.prefix, name);
                let ty_str = print_ty(ty, &mut $ctx);
                $ctx.utility_types.insert(name_with_side.clone(), ty_str);
                $ctx.added_utility_types.insert(name_with_side.clone());

                if name_with_side.ends_with("_packet") {
                    $s.push_str(&format!("| {}\n", name_with_side));
                }

                if name.starts_with("packet_") {
                    let x = $ctx.packet_names.entry(stringify!($field).to_string());
                    let packet_name = name["packet_".len()..].to_string();
                    match x {
                        Entry::Occupied(mut occupied_entry) => {
                            let entry = occupied_entry.get_mut();
                            let side_entry = entry.entry(side.to_string());
                            match side_entry {
                                Entry::Occupied(mut occupied_entry) => {
                                    occupied_entry
                                        .get_mut()
                                        .insert((name_with_side, packet_name));
                                }
                                Entry::Vacant(vacant_entry) => {
                                    vacant_entry.insert({
                                        let mut set = HashSet::default();
                                        set.insert((name_with_side, packet_name));
                                        set
                                    });
                                }
                            }
                        }
                        Entry::Vacant(vacant_entry) => {
                            vacant_entry.insert({
                                let mut map = HashMap::new();
                                map.insert(side.to_string(), {
                                    let mut set = HashSet::default();
                                    set.insert((name_with_side, packet_name));
                                    set
                                });
                                map
                            });
                        }
                    }
                }
            }
            for ty in $ctx.used_types.difference(&$ctx.added_utility_types) {
                $ctx.utility_types
                    .insert(ty.to_string(), ty[$ctx.prefix.len()..].to_string());
            }
        }
    };
}

pub fn protocol2types(p: Protocol) -> String {
    let mut s = String::new();

    let mut ctx = Context::default();

    for (name, ty) in p.types {
        if name == "switch" || name == "void" || name == "string" {
            continue;
        }
        s.push_str(&format!("type {name} = {};\n", print_ty(&ty, &mut ctx)))
    }

    s.push_str("\n");

    s.push_str("type Packet =\n");

    process_packets!(handshaking, p, s, ctx);
    process_packets!(status, p, s, ctx);
    process_packets!(login, p, s, ctx);
    process_packets!(configuration, p, s, ctx);
    process_packets!(play, p, s, ctx);

    s.push_str("\n");

    for (name, ty) in ctx.utility_types {
        s.push_str(&format!("type {name} = {ty};\n"))
    }

    s.push_str("\n");
    s.push_str("interface PacketWithDir {");
    for (k, v) in ctx.packet_names {
        s.push_str(&format!("{k}: {{\n"));
        for (k, v) in v {
            s.push_str(&format!("{k}: {{"));
            for (name_with_side, name) in v {
                s.push_str(&format!("{name}: {name_with_side}\n"))
            }
            s.push_str("}\n");
        }
        s.push_str("}\n");
    }
    s.push_str("}");
    s.push_str("\n");

    // process_packets!(configuration, p, s, &mut ctx);
    // process_packets!(handshaking, p, s, &mut ctx);
    // process_packets!(status, p, s, &mut ctx);
    // process_packets!(login, p, s, &mut ctx);
    // process_packets!(configuration, p, s, &mut ctx);
    // process_packets!(play, p, s, &mut ctx);

    s
}
