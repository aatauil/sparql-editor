import { Parser } from 'sparqljs';
import { EditorView } from '@codemirror/view';
import { Diagnostic } from '@codemirror/lint';

// Initialize the SPARQL parser
const parser = new Parser();

/**
 * Calculate the position in the document based on line and character.
 * @param {EditorView} editor - The CodeMirror editor instance.
 * @param {Object} position - An object containing line and character information.
 * @returns {number} - The calculated position in the document.
 */
function pos(editor: EditorView, { line, ch }: { line: number; ch: number }): number {
  const doc = editor.state.doc;
  return doc.line(line + 1).from + ch;
}

/**
 * Lint function for SPARQL queries in the CodeMirror editor.
 * @param {EditorView} editor - The CodeMirror editor instance.
 * @returns {Diagnostic[]} - An array of diagnostics containing error information.
 */
export function sparqlLinter(editor: EditorView): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const value = editor.state.doc.toString();

  try {
    // Attempt to parse the SPARQL query
    parser.parse(value);
  } catch (err: any) {
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
