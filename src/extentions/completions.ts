import { CompletionContext } from '@codemirror/autocomplete';
import { dictionary } from '../data';

export function completions(context: CompletionContext) {
  let word = context.matchBefore(/\w*/)
  if (word.from == word.to && !context.explicit)
    return null

  const results = Object.entries(dictionary)
  .map(([key, value]) => value);
  
  return {
    from: word.from,
    options: results,
    validFor: /^(@\w*)?$/
  }
}