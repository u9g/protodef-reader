use core::fmt;

use serde::{
    de::{self, SeqAccess, Visitor},
    Deserialize, Deserializer,
};

use crate::*;

impl<'de> Deserialize<'de> for Ty {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_any(TyVisitor)
    }
}

struct TyVisitor;

impl<'de> Visitor<'de> for TyVisitor {
    type Value = Ty;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(r#"a string in the format "varint" or "f64" or "i16" or "i8""#)
    }

    fn visit_str<E>(self, v: &str) -> Result<Self::Value, E>
    where
        E: de::Error,
    {
        if v.starts_with("packet_") {
            return Ok(Ty::NonNativeType(v.to_string()));
        }

        match v {
            "varint" => Ok(Ty::VarInt),
            "f64" => Ok(Ty::F64),
            "i16" => Ok(Ty::I16),
            "i8" => Ok(Ty::I8),
            "UUID" => Ok(Ty::UUID),
            "i32" => Ok(Ty::I32),
            "entityMetadata" => Ok(Ty::EntityMetadata),
            "string" => Ok(Ty::String),
            "position" => Ok(Ty::Position),
            "u8" => Ok(Ty::U8),
            "bool" => Ok(Ty::Bool),
            "slot" => Ok(Ty::Slot),
            "f32" => Ok(Ty::F32),
            "void" => Ok(Ty::Void),
            "i64" => Ok(Ty::I64),
            "optionalNbt" => Ok(Ty::OptionalNbt),
            "restBuffer" => Ok(Ty::RestBuffer),
            "nbt" => Ok(Ty::Nbt),
            "varlong" => Ok(Ty::VarLong),
            "u16" => Ok(Ty::U16),
            "anonymousNbt" => Ok(Ty::AnonymousNbt),
            "native" => Ok(Ty::NativeType),
            named => {
                println!("non native type: {}", named);
                Ok(Ty::NonNativeType(named.to_string()))
            } // _ => Err(de::Error::unknown_variant(
              //     v,
              //     &[
              //         "varint",
              //         "f64",
              //         "i16",
              //         "i8",
              //         "UUID",
              //         "i32",
              //         "entityMetadata",
              //         "string",
              //         "position",
              //         "u8",
              //         "bool",
              //         "slot",
              //         "f32",
              //         "void",
              //         "i64",
              //         "optionalNbt",
              //         "restBuffer",
              //         "nbt",
              //         "varlong",
              //     ],
              // )),
        }
    }

    fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
    where
        A: SeqAccess<'de>,
    {
        // Expecting the first element to be the string "container".
        let tag: String = seq
            .next_element()?
            .ok_or_else(|| de::Error::invalid_length(0, &self))?;
        match tag.as_str() {
            "buffer" => {
                let value: BufferType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Buffer { ty: value })
            }
            "switch" => {
                let switch: SwitchType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Switch { switch })
            }
            "bitfield" => {
                // Expecting the second element to be an array of `BitField`.
                let fields: Vec<BitFieldType> = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::BitField { fields })
            }
            "container" => {
                // Expecting the second element to be an array of `TypeWithName`.
                let fields: Vec<TypeInContainer> = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Container {
                    ty: ContainerType { fields },
                })
            }
            "array" => {
                // Expecting the second element to be an array of `Ty`.
                let value: ArrayType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Array { ty: value })
            }
            "pstring" => {
                #[derive(Deserialize)]
                struct PStringArgumentsObject {
                    #[serde(rename = "countType")]
                    count_type: Ty,
                }
                let arguments_object: PStringArgumentsObject = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::PString {
                    count_type: Box::new(arguments_object.count_type),
                })
            }
            "option" => {
                let value: Ty = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Option {
                    ty: Box::new(value),
                })
            }
            "mapper" => {
                let value: MapperType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::Mapper { mapper: value })
            }
            "arrayWithLengthOffset" => {
                let _value: serde_json::Value = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                // todo: deserialize arguments
                Ok(Ty::ArrayWithLengthOffset)
            }
            "entityMetadataLoop" => {
                let value: EntityMetadataLoopType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::EntityMetadataLoop { ty: value })
            }
            "topBitSetTerminatedArray" => {
                #[derive(Deserialize)]
                struct TopBitSetTerminatedArrayArguments {
                    #[serde(rename = "type")]
                    ty: Ty,
                }
                let value: TopBitSetTerminatedArrayArguments = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::TopBitSetTerminatedArray {
                    ty: Box::new(value.ty),
                })
            }
            "entityMetadataItem" => {
                let value: EntityMetadataItemType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::EntityMetadataItem { ty: value })
            }
            "particleData" => {
                let value: ParticleDataType = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &self))?;
                Ok(Ty::ParticleData { ty: value })
            }
            _ => Err(de::Error::invalid_value(de::Unexpected::Str(&tag), &self)),
        }
    }
}
