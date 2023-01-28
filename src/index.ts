import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from "@codemirror/view";
import { defaultKeymap, indentWithTab, history, historyKeymap } from "@codemirror/commands";
import { StreamLanguage, defaultHighlightStyle, syntaxHighlighting, bracketMatching, foldGutter } from "@codemirror/language";
import { highlightSelectionMatches } from "@codemirror/search";
import {autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap} from "@codemirror/autocomplete"

import { sparql } from "@codemirror/legacy-modes/mode/sparql";
import { linter, lintGutter, LintSource } from "@codemirror/lint";
import { sparqlLinter } from "./extentions/sparql-linter";

const defaultExtentions = [
  keymap.of([
    indentWithTab
  ]), 
  lineNumbers(),
  StreamLanguage.define(sparql),
  syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
  closeBrackets(),
  linter(sparqlLinter<LintSource>),
  lintGutter(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  bracketMatching(),
  foldGutter(),
]

const defaultDoc = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
  ?sub ?pred ?obj .
 } LIMIT 10`

export class SparqlEditor extends EditorView {
  constructor({ parent, onChange, doc = defaultDoc }) {
    super({
        parent: parent, 
        doc: doc,
        extensions: [ 
          ...defaultExtentions,
          EditorView.updateListener.of(onChange)
        ]
    })
  }
}