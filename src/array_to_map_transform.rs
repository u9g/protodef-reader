use crate::{
    ArrayType, ExplicitReferencedLengthType, FixedArrayType, HashCountType, Ty, TypeInContainer,
    TypeWithName, VariableArrayType,
};

pub fn do_array_to_map_transform(top_lvl_ty: &mut Ty) {
    match top_lvl_ty {
        Ty::Array { ty } => {
            let (count_type, ty) = match ty {
                ArrayType::VariableSize(VariableArrayType { count_type, ty }) => {
                    (HashCountType::Typed(count_type.clone()), ty)
                }
                ArrayType::FixedSize(FixedArrayType { count, ty }) => {
                    (HashCountType::Fixed(*count), ty)
                }
                ArrayType::ReferencedLength(ExplicitReferencedLengthType {
                    referenced_length,
                    ty,
                }) => (
                    HashCountType::ReferencedLength(referenced_length.clone()),
                    ty,
                ),
            };

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
                            let ty = ty.clone();
                            let ty2 = ty2.clone();
                            *top_lvl_ty = Ty::Map {
                                key: Box::new(ty),
                                value: Box::new(ty2),
                                count_type,
                            };
                        }
                        (
                            Some(TypeInContainer::Named(TypeWithName { name, ref ty })),
                            Some(TypeInContainer::Named(TypeWithName {
                                name: name2,
                                ty: ref ty2,
                            })),
                        ) if name2 == "key" && name == "value" => {
                            let ty2 = ty2.clone();
                            let ty = ty.clone();
                            *top_lvl_ty = Ty::Map {
                                key: Box::new(ty2),
                                value: Box::new(ty),
                                count_type,
                            };
                        }
                        _ => {}
                    }
                }
            }
        }
        _ => {}
    }
}

#[cfg(test)]
mod tests {
    use crate::{HashCountType, Ty, TypeInContainer, TypeWithName};

    use super::*;
    #[test]
    fn test_hashmap_transform_on_dynamic_array() {
        let mut ty = Ty::Array {
            ty: crate::ArrayType::VariableSize(crate::VariableArrayType {
                count_type: Box::new(Ty::VarInt),
                ty: Box::new(Ty::Container {
                    ty: crate::ContainerType {
                        fields: {
                            let mut v = Vec::new();

                            v.push(TypeInContainer::Named(TypeWithName {
                                name: "key".to_string(),
                                ty: Ty::String,
                            }));

                            v.push(TypeInContainer::Named(TypeWithName {
                                name: "value".to_string(),
                                ty: Ty::String,
                            }));

                            v
                        },
                    },
                }),
            }),
        };

        do_array_to_map_transform(&mut ty);

        assert_eq!(
            ty,
            Ty::Map {
                key: Box::new(Ty::String),
                value: Box::new(Ty::String),
                count_type: HashCountType::Typed(Box::new(Ty::VarInt))
            }
        );
    }
}
