import { Parser } from 'sparqljs';

// Initialize the SPARQL parser
const parser = new Parser();

/**
 * Calculate the position in the document based on line and character.
 * @param {CodeMirror.Editor} editor - The CodeMirror editor instance.
 * @param {Object} position - An object containing line and character information.
 * @returns {number} - The calculated position in the document.
 */
function pos(editor, { line, ch }) {
  const doc = editor.state.doc;
  return doc.line(line + 1).from + ch;
}

/**
 * Lint function for SPARQL queries in the CodeMirror editor.
 * @param {CodeMirror.Editor} editor - The CodeMirror editor instance.
 * @returns {Diagnostic[]} - An array of diagnostics containing error information.
 */
export function sparqlLinter(editor) {
  const diagnostics = [];
  const value = editor.state.doc.toString();

  try {
    // Attempt to parse the SPARQL query
    parser.parse(value);
  } catch (err) {
    const hash = err.hash;

    // Push diagnostic information for any parsing errors
    diagnostics.push({
      from: pos(editor, { line: hash.loc.first_line - 1, ch: hash.loc.first_column }),
      to: pos(editor, { line: hash.loc.last_line - 1, ch: hash.loc.last_column }),
      message: err.message,
      severity: "error"
    });
  }
  
  return diagnostics;
}