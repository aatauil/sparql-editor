import { hoverTooltip } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { dictionary } from "../data";
import "./tooltip.css";

/**
 * Provides a hover tooltip for words in the editor.
 * @param {EditorView} view - The editor view instance.
 * @param {number} pos - The position in the document.
 * @param {number} side - The side of the position.
 * @returns {Tooltip | null} - A tooltip object or null if no tooltip is applicable.
 */
export const wordHover = hoverTooltip((view, pos, side) => {
  const tree = syntaxTree(view.state);
  const cursor = tree.cursorAt(pos);
  const selectionName = cursor.type.name;

  // Check if the current selection name exists in the dictionary
  if (!(selectionName in dictionary)) return null;

  const { from, to, text } = view.state.doc.lineAt(pos);
  let start = pos, end = pos;

  // Expand the start position to the left while the character is a word character
  while (start > from && /\w/.test(text[start - from - 1])) start--;

  // Expand the end position to the right while the character is a word character
  while (end < to && /\w/.test(text[end - from])) end++;

  // Return null if the position is at the boundary and the side is incorrect
  if ((start === pos && side < 0) || (end === pos && side > 0)) return null;

  return {
    pos: start,
    end,
    above: true,
    create() {
      const selection = dictionary[selectionName];

      const container = document.createElement("div");
      container.className = "sparql-tooltip";

      const typeBadge = document.createElement("div");
      typeBadge.className = "sparql-tooltip__type";
      typeBadge.textContent = selection.type;

      const description = document.createElement("div");
      description.className = "sparql-tooltip__description";
      description.textContent = selection.description;

      const example = document.createElement("pre");
      example.className = "sparql-tooltip__example";
      example.textContent = selection.example;

      const divider = document.createElement("hr");
      divider.className = "sparql-tooltip__divider";

      const link = document.createElement("a");
      link.className = "sparql-tooltip__link";
      link.href = selection.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${selectionName} Documentation`;

      container.append(typeBadge, description, example, divider, link);

      return { dom: container };
    }
  };
});
