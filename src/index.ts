import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from "@codemirror/view";
import { defaultKeymap, indentWithTab, history, historyKeymap } from "@codemirror/commands";
import { StreamLanguage, defaultHighlightStyle, syntaxHighlighting, bracketMatching, foldGutter } from "@codemirror/language";
import { highlightSelectionMatches } from "@codemirror/search";
import {autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap} from "@codemirror/autocomplete"

import { sparql } from "@codemirror/legacy-modes/mode/sparql";
import { linter, lintGutter } from "@codemirror/lint";
import { sparqlLinter } from "./extentions/sparql-linter";

const extentions = [
  keymap.of(
    indentWithTab
  ), 
  lineNumbers(),
  StreamLanguage.define(sparql),
  syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
  closeBrackets(),
  linter(sparqlLinter),
  lintGutter(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  bracketMatching(),
  foldGutter(),
]

export function view(element) {

  return new EditorView({
    doc: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
  ?sub ?pred ?obj .
} LIMIT 10`,
    parent: element,
    extensions: extentions
  })
}
