use std::{env, path::Path, sync::Arc};

use oxc::{allocator::Allocator, ast::ast::Statement, parser::Parser, span::SourceType};
use oxc_semantic::SemanticBuilder;

pub fn find() -> anyhow::Result<()> {
    let ns = "play";
    let dir = "to_server";
    let looking_for = "packet_edit_book";

    let name = env::args()
        .nth(1)
        .unwrap_or_else(|| "protocol.ts".to_string());
    let path = Path::new(&name);
    let source_text = Arc::new(std::fs::read_to_string(path)?);
    let source_type = SourceType::from_path(path).unwrap();
    // Memory arena where Semantic and Parser allocate objects
    let allocator = Allocator::default();

    // Parse the source text into an AST
    let parser_ret = Parser::new(&allocator, &source_text, source_type).parse();
    if !parser_ret.errors.is_empty() {
        let error_message: String = parser_ret
            .errors
            .into_iter()
            .map(|error| format!("{:?}", error.with_source_code(Arc::clone(&source_text))))
            .collect::<Vec<_>>()
            .join("\n");
        println!("Parsing failed:\n\n{error_message}",);
        return Ok(());
    }

    let program = parser_ret.program;

    let wanted_namespaces = vec!["handshaking", "status", "login", "configuration", "play"];
    let wanted_dirs = vec!["to_client", "to_server"];

    let x = program
        .body
        .iter()
        .filter_map(|x| match x {
            Statement::TSModuleDeclaration(x)
                if wanted_namespaces.contains(&x.id.name().as_str()) =>
            {
                match x.body.as_ref().unwrap() {
                    oxc::ast::ast::TSModuleDeclarationBody::TSModuleDeclaration(
                        tsmodule_declaration,
                    ) if wanted_dirs.contains(&tsmodule_declaration.id.name().as_str()) => {
                        match tsmodule_declaration.body.as_ref().unwrap() {
                            oxc::ast::ast::TSModuleDeclarationBody::TSModuleBlock(
                                tsmodule_block,
                            ) => {
                                return Some((
                                    x.id.name().to_string(),
                                    tsmodule_declaration.id.name().to_string(),
                                    tsmodule_block.as_ref(),
                                ));
                            }
                            _ => None,
                        }
                    }
                    _ => None,
                }
            }
            _ => None,
        })
        .collect::<Vec<_>>();

    let y = x
        .into_iter()
        .flat_map(|(x0, x1, x2)| {
            x2.body
                .iter()
                .filter_map(|z| match z {
                    Statement::TSInterfaceDeclaration(y) => Some((
                        x0.clone(),
                        x1.clone(),
                        y.id.name.to_string(),
                        vec![y.span.start, y.span.end],
                    )),
                    _ => None,
                })
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();

    println!("{}", serde_json::to_string_pretty(&y).unwrap());

    Ok(())
}
