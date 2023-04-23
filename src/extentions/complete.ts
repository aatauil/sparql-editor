import { Completion } from '@codemirror/autocomplete';
import { CompletionResult } from '@codemirror/autocomplete';
import { SyntaxNode } from '@lezer/common';
import { syntaxTree } from '@codemirror/language';
import { CompletionContext } from '@codemirror/autocomplete';
import { dictionary } from '../data';


export function keywordCompletionSource(context: CompletionContext) {
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

export function localCompletionSource(context: CompletionContext): CompletionResult | null {
  let inner = syntaxTree(context.state).resolveInner(context.pos , -1)
  let read = (node: SyntaxNode) => context.state.doc.sliceString(node.from, node.to)

  let options: Completion[] = []
  for (let pos: SyntaxNode | null = inner; pos; pos = pos.parent) {
    if(pos.name == "SelectQuery") {
      const vars = pos.getChild("SelectClause").getChildren('Var')
      
      options = vars.map((item) => ({
        type: "variable",
        label: read(item),
        boost: 99
      }))
    }
  }

  return {
    options,
    from: inner.from
  }
}