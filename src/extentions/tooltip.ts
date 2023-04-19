import {Tooltip, hoverTooltip} from "@codemirror/view"
import { syntaxTree } from "@codemirror/language"
import { dictionary  } from "../data";

export const wordHover = hoverTooltip((view, pos, side) => {
  const tree = syntaxTree(view.state);
  const cursor = tree.cursorAt(pos);
  const selectionName = cursor.type.name.toUpperCase();

  if (!(selectionName in dictionary)) return;

  let {from, to, text} = view.state.doc.lineAt(pos)
  let start = pos, end = pos
  while (start > from && /\w/.test(text[start - from - 1])) start--
  while (end < to && /\w/.test(text[end - from])) end++
  if (start == pos && side < 0 || end == pos && side > 0)
    return null

  return {
    pos: start,
    end,
    above: true,
    create(view) {
      const selection = dictionary[selectionName]

      const htmlTemplate = `
        <div>${selection?.description}</div>
        <code>${selection?.example}</code>
        <hr>
        <a href=${selection.link} target="_blank" rel="noopener noreferrer">documentation</a>
      `

      const dom = document.createElement("div")
      dom.innerHTML = htmlTemplate

      return {dom}
    }
  }
})