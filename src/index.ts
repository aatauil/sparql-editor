import { EditorView, ViewUpdate, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { search } from "@codemirror/search";
import { linter, lintGutter } from "@codemirror/lint";
import { sparqlLinter } from "./extensions/sparql-linter";
import { SparqlLanguage, sparql } from "codemirror-lang-sparql";
import { basicSetup } from "codemirror";
import { wordHover } from "./extensions/tooltip";
import { keywordCompletionSource, localCompletionSource } from "./extensions/complete";
import { formatQuery, formatKeymap } from "./extensions/formatter";

/**
 * Type definition for the properties required to create a SPARQL editor.
 */
export type Props = {
  parent: HTMLElement,
  onChange?: (value: string, viewUpdate: ViewUpdate) => void,
  value?: string
}

/** 
 * SPARQL keyword completions configuration.
 */
const sparqlKeywordCompletions = SparqlLanguage.data.of({
  autocomplete: keywordCompletionSource
});

/** 
 * SPARQL local variable completions configuration.
 */
const sparqlLocalCompletions = SparqlLanguage.data.of({
  autocomplete: localCompletionSource
});

/**
 * Default extensions for the CodeMirror editor setup.
 */
const defaultExtensions = [
  basicSetup,
  keymap.of([indentWithTab]),
  sparql(),
  search({ top: true }),
  lintGutter(),
  linter(sparqlLinter),
  sparqlKeywordCompletions,
  sparqlLocalCompletions,
  wordHover,
  formatKeymap
];

/** 
 * Default SPARQL document content.
 */
const defaultDoc = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?s ?p ?o WHERE {
  ?sub ?pred ?obj .
} LIMIT 100
`;

/**
 * Creates a SPARQL editor instance.
 * @param {Props} props - The properties for creating the editor.
 * @returns {EditorView} - The created editor view instance.
 */
export { formatQuery };

export function createSparqlEditor({ parent, onChange, value }: Props): EditorView {
  const extensions = [...defaultExtensions];
  const doc = value || defaultDoc;

  if (onChange) {
    extensions.push(EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
      if (viewUpdate.docChanged) {
        onChange(viewUpdate.state.doc.toString(), viewUpdate);
      }
    }));
  }

  return new EditorView({ parent, doc, extensions });
}