use crate::{AnonymousType, Protocol, Ty, TypeWithName};

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
        | Ty::EntityMetadata => "any".to_string(),
        Ty::Bool => "boolean".to_string(),
        Ty::Void => "never".to_string(),
        Ty::OptionalNbt => "any | undefined".to_string(),
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
        Ty::Container { ty } => format!(
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
        ),
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

pub fn protocol2types(p: Protocol) -> String {
    let mut s = String::new();

    s.push_str("type types =\n");
    for (name, ty) in p.play.unwrap().to_client.types {
        s.push_str(&format!("| {}\n", print_ty(&ty)));
    }

    s
}
