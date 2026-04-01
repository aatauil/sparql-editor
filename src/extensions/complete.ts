import { Completion, CompletionResult, CompletionContext } from '@codemirror/autocomplete';
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
 * Scans the full document syntax tree for all Var nodes so that variables
 * used anywhere (WHERE clause, FILTER, BIND, OPTIONAL, etc.) are suggested
 * when typing in any position, including the SELECT clause.
 * @param {CompletionContext} context - The context in which completion is requested.
 * @returns {CompletionResult | null} - A completion result containing variable options or null if no completion is applicable.
 */
export function localCompletionSource(context: CompletionContext): CompletionResult | null {
  const word = context.matchBefore(/\?\w*/);
  if (!word || (word.from === word.to && !context.explicit)) return null;

  const seen = new Set<string>();
  const options: Completion[] = [];

  syntaxTree(context.state).cursor().iterate(node => {
    if (node.name === "Var") {
      const label = context.state.doc.sliceString(node.from, node.to);
      if (!seen.has(label)) {
        seen.add(label);
        options.push({ type: "variable", label, boost: 99 });
      }
    }
  });

  if (options.length === 0) return null;

  return { from: word.from, options };
}