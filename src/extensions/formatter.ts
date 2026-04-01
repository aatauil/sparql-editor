import { Parser, Generator } from 'sparqljs';
import { EditorView, keymap } from '@codemirror/view';

const parser = new Parser();
const generator = new Generator();

/**
 * Adds blank lines between major SPARQL sections for readability.
 * sparqljs Generator has no built-in blank-line control, so we post-process.
 */
function addSpacing(sparql: string): string {
  return sparql
    // Blank line before query form — separates PREFIX block from the query
    .replace(/^(SELECT|CONSTRUCT|DESCRIBE|ASK|INSERT|DELETE|LOAD|CLEAR|DROP|CREATE|ADD|MOVE|COPY)\b/mg, '\n$1')
    // Blank line before major trailing clause sections (HAVING/LIMIT/OFFSET stay attached)
    .replace(/^(GROUP BY|ORDER BY)\b/mg, '\n$1')
    .trimStart();
}

/**
 * Formats the current SPARQL query in the editor using sparqljs.
 * Silently no-ops if the query has syntax errors.
 * @param {EditorView} view - The CodeMirror editor instance.
 * @returns {boolean} - True if formatting was applied, false otherwise.
 */
export function formatQuery(view: EditorView): boolean {
  const text = view.state.doc.toString();
  let formatted: string;
  try {
    formatted = addSpacing(generator.stringify(parser.parse(text)));
  } catch {
    return false;
  }
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: formatted }
  });
  return true;
}

export const formatKeymap = keymap.of([{ key: "Shift-Alt-f", run: formatQuery }]);
