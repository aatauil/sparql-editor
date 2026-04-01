import { hoverTooltip } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { dictionary } from "../data";

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
    create(view) {
      const selection = dictionary[selectionName];

      // HTML template for the tooltip content with improved styling
      const htmlTemplate = `
        <div style="padding: 12px; background-color: #f9f9f9; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div style="display: inline-block; padding: 2px 4px; background-color: #e0e0e0; color: black; border-radius: 4px; font-size: small; margin-bottom: 8px;">${selection?.type}</div>
          <div style="font-weight: medium; margin-bottom: 8px;">${selection?.description}</div>
          <pre style="display: block; background-color: #eaeaea; padding: 6px; border-radius: 3px; margin-bottom: 8px;">${selection?.example}</pre>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 12px 0;">
          <a href="${selection.link}" target="_blank" rel="noopener noreferrer" style="color: #007acc; text-decoration: none; margin-top: 8px;">${selectionName} Documentation</a>
        </div>
      `;

      const dom = document.createElement("div");
      dom.innerHTML = htmlTemplate;

      return { dom };
    }
  };
});