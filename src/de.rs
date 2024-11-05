use core::fmt;
use std::collections::{HashMap, HashSet};

use serde::{
    de::{self, DeserializeSeed, MapAccess, SeqAccess, Visitor},
    Deserialize, Deserializer,
};

use crate::{
    ArrayType, BiDirectionalPackets, BitFieldType, BufferType, ContainerType, MapperType, Protocol,
    SwitchType, Ty, TypeHolder, TypeWithName,
};

// struct ProtocolVisitor();

// impl<'de> Deserialize<'de> for Protocol {
//     fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
//     where
//         D: Deserializer<'de>,
//     {
//         deserializer.deserialize_any(ProtocolVisitor)
//     }
// }

// impl<'de> DeserializeSeed<'de> for ProtocolVisitor {
//     type Value = Protocol;

//     fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
//     where
//         D: Deserializer<'de>,
//     {
//         deserializer.deserialize_struct(name, fields, visitor)
//         todo!()
//     }
// }

// struct ProtocolSeed<'a>(&'a mut HashSet<String>);

impl<'de> Deserialize<'de> for Protocol {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        let mut types = HashSet::new();
        deserializer.deserialize_map(ProtocolVisitor(&mut types))
    }
}

struct ProtocolVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for ProtocolVisitor<'a> {
    type Value = Protocol;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("protocol structure")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        let mut states = HashMap::new();

        while let Some(key) = map.next_key::<String>()? {
            match key.as_str() {
                "types" => {
                    map.next_value_seed(TypesBlockSeed(self.0))?;
                }
                _ => {
                    states.insert(key, map.next_value_seed(BiDirectionalPacketsSeed(self.0))?);
                }
            }
        }

        Ok(Protocol { states })
    }
}

struct BiDirectionalPacketsSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for BiDirectionalPacketsSeed<'a> {
    type Value = BiDirectionalPackets;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(BiDirectionalPacketsVisitor(self.0))
    }
}

struct BiDirectionalPacketsVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for BiDirectionalPacketsVisitor<'a> {
    type Value = BiDirectionalPackets;

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        formatter.write_str("bi-directional packets structure")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        let mut bidirectional_packets = BiDirectionalPackets {
            to_client: TypeHolder {
                types: HashMap::new(),
            },
            to_server: TypeHolder {
                types: HashMap::new(),
            },
        };

        match map.next_key::<&str>()? {
            Some("toClient") => {
                bidirectional_packets.to_client.types =
                    map.next_value_seed(TypesBlockSeed(self.0))?
            }
            Some("toServer") => {
                bidirectional_packets.to_server.types =
                    map.next_value_seed(TypesBlockSeed(self.0))?
            }
            Some(it) => return Err(de::Error::unknown_variant(it, &["toClient", "toServer"])),
            None => {
                return Err(de::Error::unknown_variant(
                    "missing field name",
                    &["toClient", "toServer"],
                ));
            }
        }

        Ok(bidirectional_packets)
    }
}

struct ObjectWithJustTypesFieldInItSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for ObjectWithJustTypesFieldInItSeed<'a> {
    type Value = HashMap<String, Ty>;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(ObjectWithJustTypesFieldInItVisitor(self.0))
    }
}

struct ObjectWithJustTypesFieldInItVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for ObjectWithJustTypesFieldInItVisitor<'a> {
    type Value = HashMap<String, Ty>;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("object with just types field in it")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        match map.next_key::<&str>()? {
            Some("types") => map.next_value_seed(TypesBlockSeed(self.0)),
            Some(it) => return Err(de::Error::unknown_field(it, &["types"])),
            None => return Err(de::Error::unknown_field("missing field name", &["types"])),
        }
    }
}

struct DirectionalPacketsSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for DirectionalPacketsSeed<'a> {
    type Value = HashMap<String, Ty>;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(TypesBlockVisitor(self.0))
    }
}

struct TypesBlockSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for TypesBlockSeed<'a> {
    type Value = HashMap<String, Ty>;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(TypesBlockVisitor(self.0))
    }
}

struct TypesBlockVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for TypesBlockVisitor<'a> {
    type Value = HashMap<String, Ty>;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("type block structure")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        let mut types = HashMap::new();
        while let Some(key) = map.next_key::<String>()? {
            let value: Ty = map.next_value_seed(TySeed(self.0))?;
            types.insert(key, value);
        }
        Ok(types)
    }
}

struct TySeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for TySeed<'a> {
    type Value = Ty;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_any(TyVisitor(self.0))
    }
}

struct TyVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for TyVisitor<'a> {
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

            _ => Err(de::Error::unknown_variant(
                v,
                &[
                    "varint",
                    "f64",
                    "i16",
                    "i8",
                    "UUID",
                    "i32",
                    "entityMetadata",
                    "string",
                    "position",
                    "u8",
                    "bool",
                    "slot",
                    "f32",
                    "void",
                    "i64",
                    "optionalNbt",
                    "restBuffer",
                    "nbt",
                    "varlong",
                ],
            )),
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
                    .next_element_seed(BufferTypeSeed(self.0))?
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
                let fields: Vec<TypeWithName> = seq
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
            "option" => {
                let value: Ty = seq
                    .next_element_seed(TySeed(self.0))?
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
            _ => Err(de::Error::invalid_value(de::Unexpected::Str(&tag), &self)),
        }
    }
}

// Define BufferType with custom deserialization

struct BufferTypeSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for BufferTypeSeed<'a> {
    type Value = BufferType;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(BufferTypeVisitor(self.0))
    }
}

struct BufferTypeVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for BufferTypeVisitor<'a> {
    type Value = BufferType;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("buffer type structure")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        match map.next_key::<&str>()? {
            Some("countType") => {
                let ty: Ty = map.next_value_seed(TySeed(self.0))?;
                Ok(BufferType {
                    count_type: Box::new(ty),
                })
            }
            Some(key) => Err(de::Error::unknown_field(key, &["countType"])),
            None => Err(de::Error::unknown_field(
                "missing field name",
                &["countType"],
            )),
        }
    }
}

struct SwitchTypeSeed<'a>(&'a mut HashSet<String>);

impl<'de, 'a> DeserializeSeed<'de> for SwitchTypeSeed<'a> {
    type Value = SwitchType;

    fn deserialize<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(SwitchTypeVisitor(self.0))
    }
}

struct SwitchTypeVisitor<'a>(&'a mut HashSet<String>);

impl<'de, 'a> Visitor<'de> for SwitchTypeVisitor<'a> {
    type Value = SwitchType;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("switch type structure")
    }

    fn visit_map<V>(self, mut map: V) -> Result<Self::Value, V::Error>
    where
        V: MapAccess<'de>,
    {
        let mut compare_to = None;
        let mut fields = HashMap::new();
        let mut default = None;

        while let Some(key) = map.next_key::<&str>()? {
            match key {
                "compareTo" => {
                    compare_to = Some(map.next_value()?);
                }
                "fields" => {
                    fields = map.next_value_seed(TypesBlockSeed(self.0))?;
                }
                "default" => {
                    default = Some(map.next_value_seed(TySeed(self.0))?);
                }
                _ => {}
            }
            let value: Ty = map.next_value_seed(TySeed(self.0))?;
            types.insert(key, value);
        }
        Ok(SwitchType {
            compare_to: compare_to.unwrap(),
            fields,
            default: default.unwrap(),
        })
    }
}
