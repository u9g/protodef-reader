use mylib::{json2ts, oxc_find, protocol2types::protocol2types, Protocol};

fn main() -> anyhow::Result<()> {
    let p: Protocol = serde_json::from_str(&std::fs::read_to_string("protocol.json")?).unwrap();

    std::fs::write("protocol.ts", protocol2types(p))?;

    Ok(())
}
