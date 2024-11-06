use crate::{ArrayType, HashCountType, Ty, TypeInContainer};

pub fn walk_ty(top_lvl_ty: &mut Ty, on_each_type: fn(&mut Ty)) {
    on_each_type(top_lvl_ty);

    match top_lvl_ty {
        Ty::Array { ty } => match ty {
            ArrayType::FixedSize(fixed_array_type) => {
                walk_ty(&mut fixed_array_type.ty, on_each_type);
            }
            ArrayType::VariableSize(variable_array_type) => {
                walk_ty(&mut variable_array_type.count_type, on_each_type);
                walk_ty(&mut variable_array_type.ty, on_each_type);
            }
        },
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
        Ty::Option { ty } => walk_ty(ty.as_mut(), on_each_type),
        Ty::Buffer { ty } => walk_ty(&mut ty.count_type, on_each_type),
        Ty::Switch { switch } => {
            if let Some(default) = &mut switch.default {
                walk_ty(default, on_each_type);
            }

            for (_, field) in switch.fields.iter_mut() {
                walk_ty(field, on_each_type);
            }
        }
        Ty::Container { ty } => {
            for field in ty.fields.iter_mut() {
                match field {
                    TypeInContainer::Named(type_with_name) => {
                        walk_ty(&mut type_with_name.ty, on_each_type);
                    }
                    TypeInContainer::Anonymous(anonymous_type) => {
                        assert!(anonymous_type.anon);
                        walk_ty(&mut anonymous_type.ty, on_each_type);
                    }
                }
            }
        }
        Ty::Mapper { mapper } => {
            walk_ty(&mut mapper.ty, on_each_type);
        }
        Ty::Map {
            key,
            value,
            count_type,
        } => {
            walk_ty(key, on_each_type);
            walk_ty(value, on_each_type);
            match count_type {
                HashCountType::Typed(ty) => walk_ty(ty, on_each_type),
                HashCountType::Fixed(_) => {}
            }
        }
    }
}
