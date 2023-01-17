import CodeMirror from "codemirror";
var SparqlParser = require('sparqljs').Parser;
var parser = new SparqlParser();

export function linter(text, options, cm) {
  const issues = [];

  try {
    const parsedQuery = parser.parse(text);
  } catch (err) {
    const hash = err.hash;
    
    issues.push({
      from: CodeMirror.Pos(hash.loc.first_line - 1, hash.loc.first_column),
      to: CodeMirror.Pos(hash.loc.last_line - 1, hash.loc.last_column),
      message: err.message,
      severity : "error"
    })
  }
  
  return issues
}