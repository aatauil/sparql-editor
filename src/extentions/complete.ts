import { Completion, CompletionResult, CompletionContext } from '@codemirror/autocomplete';
import { SyntaxNode } from '@lezer/common';
import { syntaxTree } from '@codemirror/language';
import { dictionary } from '../data';

/**
 * Provides keyword completions based on the current context.
 * @param {CompletionContext} context - The context in which completion is requested.
 * @returns {CompletionResult | null} - A completion result containing keyword options or null if no completion is applicable.
 */
export function keywordCompletionSource(context: CompletionContext) {
  const word = context.matchBefore(/\w*/);
  if (!word || (word.from === word.to && !context.explicit)) return null;

  const options = Object.values(dictionary);

  return {
    from: word.from,
    options,
    validFor: /^(@\w*)?$/
  };
}

/**
 * Provides local variable completions within a SPARQL query.
 * @param {CompletionContext} context - The context in which completion is requested.
 * @returns {CompletionResult | null} - A completion result containing variable options or null if no completion is applicable.
 */
export function localCompletionSource(context: CompletionContext): CompletionResult | null {
  const inner = syntaxTree(context.state).resolveInner(context.pos, -1);
  const read = (node: SyntaxNode) => context.state.doc.sliceString(node.from, node.to);

  let options: Completion[] = [];
  for (let pos: SyntaxNode | null = inner; pos; pos = pos.parent) {
    if (pos.name === "SelectQuery") {
      const selectClause = pos.getChild("SelectClause");
      if (selectClause) {
        const vars = selectClause.getChildren('Var');
        options = vars.map((item) => ({
          type: "variable",
          label: read(item),
          boost: 99
        }));
      }
      break; // Exit loop early since we found the SelectQuery
    }
  }

  return {
    options,
    from: inner.from
  };
}