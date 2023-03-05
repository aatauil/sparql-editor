import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { foldGutter } from "@codemirror/language";
import { search } from "@codemirror/search";

import { linter, lintGutter, LintSource } from "@codemirror/lint";
import { sparqlLinter } from "./extentions/sparql-linter";
import { sparql } from "codemirror-lang-sparql";
import { basicSetup } from "codemirror";

const defaultExtentions = [
  basicSetup,
  keymap.of([
    indentWithTab
  ]),
  sparql(),
  search({ top: true }),
  lintGutter(),
  linter(sparqlLinter<LintSource>),
]

const defaultDoc = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
  ?sub ?pred ?obj .
 } LIMIT 10`

export function createSparqlEditor({ parent, onChange, value }) {
  const extensions: [any] = [ defaultExtentions] 
  const doc = value || defaultDoc;

  if(typeof onChange === 'function') {
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