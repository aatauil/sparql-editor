import CodeMirror from "codemirror";
var SparqlParser = require('sparqljs').Parser;
var parser = new SparqlParser();
import { Diagnostic, LintSource } from "@codemirror/lint";

function pos(editor, { line, ch }) {
  const doc = editor.state.doc;
  return doc.line(line + 1).from + ch
}

export function sparqlLinter<LintSource>(editor) {
  const diagnostics = [];
  const value = editor.state.doc.toString();

  try {
    const parsedQuery = parser.parse(value);
  } catch (err) {
    const hash = err.hash;

    diagnostics.push({
      from: pos(editor, { line: hash.loc.first_line - 1, ch: hash.loc.first_column }),
      to: pos(editor, { line: hash.loc.last_line - 1, ch: hash.loc.last_column }),
      message: err.message,
      severity : "error"
    })
  }
  
  return diagnostics
}