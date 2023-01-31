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
    indentWithTab,
    ...historyKeymap
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
  history()
]

const defaultDoc = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
  ?sub ?pred ?obj .
 } LIMIT 10`

export function createSparqlEditor({ parent, onChange, value }) {
  const extensions = [defaultExtentions]
  const doc = value || defaultDoc;

  if(onChange === 'function') {
    const updateListener = EditorView.updateListener.of((viewUpdate) => {
      if (viewUpdate.docChanged && typeof onChange === 'function') {
        const doc = viewUpdate.state.doc;
        const value = doc.toString();
        onChange(value, viewUpdate);
      }
    });
  
    extensions.push(updateListener)
  }



  return new EditorView({ parent, doc, extensions })
}