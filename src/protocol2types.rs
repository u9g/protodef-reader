use crate::{AnonymousType, BiDirectionalPackets, Protocol, Ty, TypeWithName};

fn print_type_with_name(type_with_name: &TypeWithName) -> String {
    format!(
        "{}: {}\n",
        type_with_name.name,
        print_ty(&type_with_name.ty)
    )
}

fn print_anonymous_type(anonymous_type: &AnonymousType) -> String {
    match &anonymous_type.ty {
        Ty::Container { ty } => ty
            .fields
            .iter()
            .map(|f| match f {
                crate::TypeInContainer::Named(type_with_name) => {
                    print_type_with_name(type_with_name)
                }
                crate::TypeInContainer::Anonymous(anonymous_type) => {
                    print_anonymous_type(anonymous_type)
                }
            })
            .collect::<Vec<_>>()
            .join("\n"),
        Ty::Switch { switch } => switch
            .fields
            .iter()
            .map(|(name, ty)| format!("{name}: {} | undefined", print_ty(ty)))
            .collect::<Vec<_>>()
            .join("\n"),
        x => todo!("{:?}", x),
    }
}

const ANY_TYPE: &str = "never"; // "any"

fn print_ty(ty: &Ty) -> String {
    match ty {
        Ty::U16
        | Ty::VarLong
        | Ty::I64
        | Ty::F32
        | Ty::U8
        | Ty::I32
        | Ty::I8
        | Ty::I16
        | Ty::F64
        | Ty::VarInt => "number".to_string(),
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
        | Ty::NonNativeType(..)
        | Ty::Count { .. }
        | Ty::TopBitSetTerminatedArray { .. }
        | Ty::PString { .. }
        | Ty::Buffer { .. }
        | Ty::Mapper { .. }
        | Ty::EntityMetadata => ANY_TYPE.to_string(),
        Ty::Bool => "boolean".to_string(),
        Ty::Void => "never".to_string(),
        Ty::OptionalNbt => format!("{} | undefined", ANY_TYPE),
        Ty::RestBuffer => "Buffer".to_string(),
        Ty::Option { ty } => format!("{} | undefined", print_ty(ty)),
        Ty::BitField { fields } => format!(
            "{{\n{}\n}}",
            fields
                .iter()
                .map(|f| format!("{}: number | boolean", f.name))
                .collect::<Vec<_>>()
                .join("\n")
        ),
        Ty::Switch { switch } => format!(
            "{}",
            switch
                .fields
                .iter()
                .map(|(_, ty)| format!("{}", print_ty(ty)))
                .collect::<Vec<_>>()
                .join(" | ")
        ),
        Ty::Container { ty } => {
            if !ty.fields.is_empty() {
                format!(
                    "{{\n{}\n}}",
                    ty.fields
                        .iter()
                        .map(|f| match f {
                            crate::TypeInContainer::Named(type_with_name) =>
                                print_type_with_name(type_with_name),
                            crate::TypeInContainer::Anonymous(anonymous_type) =>
                                print_anonymous_type(anonymous_type),
                        })
                        .collect::<Vec<_>>()
                        .join("\n")
                )
            } else {
                format!("Record<never, never> & {{__type: \'empty_object\'}}")
            }
        }
        Ty::Array { ty } => format!(
            "{}[]",
            print_ty(match ty {
                crate::ArrayType::FixedSize(fixed_array_type) => &fixed_array_type.ty,
                crate::ArrayType::VariableSize(variable_array_type) => &variable_array_type.ty,
                crate::ArrayType::ReferencedLength(explicit_referenced_length_type) =>
                    &explicit_referenced_length_type.ty,
            })
        ),
        Ty::Map {
            key,
            value,
            count_type,
        } => todo!(),
    }
}

macro_rules! process_packets {
    ($field:ident, $p:expr, $s:ident) => {
        if let Some(BiDirectionalPackets {
            to_client,
            to_server,
        }) = $p.$field.as_ref()
        {
            for (_, ty) in &to_client.types {
                $s.push_str(&format!("| {}\n", print_ty(&ty)));
            }
            for (_, ty) in &to_server.types {
                $s.push_str(&format!("| {}\n", print_ty(&ty)));
            }
        }
    };
}

pub fn protocol2types(p: Protocol) -> String {
    let mut s = String::new();

    s.push_str("type Packet =\n");

    process_packets!(configuration, p, s);
    process_packets!(handshaking, p, s);
    process_packets!(status, p, s);
    process_packets!(login, p, s);
    process_packets!(configuration, p, s);
    process_packets!(play, p, s);

    s
}
