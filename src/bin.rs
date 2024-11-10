use mylib::{json2ts, oxc_find};

fn main() -> anyhow::Result<()> {
    std::fs::write(
        "protocol.ts",
        json2ts(std::fs::read_to_string("protocol.json")?),
    )?;

    oxc_find::find(std::fs::read_to_string("protocol.ts")?)?;

    Ok(())
}
