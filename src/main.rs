use std::collections::HashMap;

use anyhow::Context;
use serde::Deserialize;

mod de;

#[derive(Debug)]
struct Protocol {
    states: HashMap<String, BiDirectionalPackets>,
}

#[derive(Debug)]
struct BiDirectionalPackets {
    to_client: TypeHolder,
    to_server: TypeHolder,
}

#[derive(Debug)]
struct TypeHolder {
    types: HashMap<String, Ty>,
}

#[derive(Debug)]
pub struct ContainerType {
    fields: Vec<TypeWithName>,
}

#[derive(Debug, Deserialize)]
#[serde(untagged)]
pub enum ArrayType {
    FixedSize(FixedArrayType),
    VariableSize(VariableArrayType),
}

#[derive(Debug, Deserialize)]
pub struct FixedArrayType {
    count: u8,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize)]
pub struct VariableArrayType {
    #[serde(rename = "countType")]
    count_type: Box<Ty>,
    #[serde(rename = "type")]
    ty: Box<Ty>,
}

#[derive(Debug, Deserialize)]
struct TypeWithName {
    name: String,
    #[serde(rename = "type")]
    ty: Ty,
}

#[derive(Debug, Deserialize)]
struct BitFieldType {
    name: String,
    size: u8,
    signed: bool,
}

#[derive(Debug)]
struct SwitchType {
    // #[serde(rename = "compareTo")]
    compare_to: String,
    fields: HashMap<String, Ty>,
    default: Box<Ty>,
}

#[derive(Debug)]
struct BufferType {
    #[serde(rename = "countType")]
    count_type: Box<Ty>,
}

#[derive(Debug, Deserialize)]
struct MapperType {
    #[serde(rename = "type")]
    ty: Box<Ty>,
    mappings: HashMap<String, Ty>,
}

#[derive(Debug)]
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
    Native,

    NonNativeType(String),

    Option { ty: Box<Ty> },
    Buffer { ty: BufferType },
    BitField { fields: Vec<BitFieldType> },
    Switch { switch: SwitchType },
    Container { ty: ContainerType },
    Array { ty: ArrayType },
    Mapper { mapper: MapperType },
}

fn main() -> anyhow::Result<()> {
    let protocol_txt = include_str!("protocol.json");

    let p: Protocol = serde_json::from_str(protocol_txt)
        .context("failed to parse protocol.json to a Protocol<> file")?;

    println!("{p:#?}");

    Ok(())
}
