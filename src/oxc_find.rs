use std::sync::Arc;

use codespan::Files;
use oxc::{allocator::Allocator, ast::ast::Statement, parser::Parser, span::SourceType};

pub fn find(s: String) -> anyhow::Result<String> {
    let source_text = Arc::new(s);
    let source_type = SourceType::from_path("protocol.ts").unwrap();
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
        return Err(anyhow::anyhow!("Parsing failed"));
    }

    let mut files: Files<&str> = Files::new();
    let the_file = files.add("the-file", &source_text);

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
                    Statement::TSInterfaceDeclaration(y) => {
                        Some((x0.clone(), x1.clone(), y.id.name.to_string(), {
                            let mut v: Vec<_> = Vec::with_capacity(4);
                            let loc1 = files.location(the_file, y.span.start).unwrap();
                            v.push(loc1.line.0);
                            v.push(loc1.column.0);
                            let loc2 = files.location(the_file, y.span.end).unwrap();
                            v.push(loc2.line.0);
                            v.push(loc2.column.0);

                            v
                        }))
                    }
                    _ => None,
                })
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();

    Ok(serde_json::to_string_pretty(
        &y.into_iter()
            .map(|x| (format!("{}.{}.{}", x.0, x.1, x.2), x.3))
            .collect::<Vec<_>>(),
    )
    .unwrap())
}
