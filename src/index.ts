import "codemirror/lib/codemirror.css";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/lint/lint.css"
import "codemirror/addon/hint/show-hint.css"
// import "./scss/codemirrorMods.scss"

import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/search/match-highlighter.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/hint/show-hint.js";

import CodeMirror from "codemirror";
import * as sparql11Mode from "./grammar/tokenizer";
import { linter } from "./extentions/linter";
import prefixFold from "./extentions/prefixFold";

CodeMirror.registerHelper("fold", "prefix", prefixFold);
CodeMirror.registerHelper("lint", "sparql11", linter);
CodeMirror.defineMode("sparql11", sparql11Mode.default);

const defaultConfig = {
    mode: "sparql11",
    value: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT * WHERE {
  ?sub ?pred ?obj .
} LIMIT 10`,
    highlightSelectionMatches: true,
    tabMode: "indent",
    lineNumbers: true,
    lineWrapping: true,
    lint: {highlightLines: true}
    foldGutter: {
      rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.brace, CodeMirror.fold.prefix),
    },
    collapsePrefixesOnLoad: false,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    matchBrackets: true,
    fixedGutter: true,
    syntaxErrorCheck: true,
    autocompleters: [] ,
}

export function SparqlEditor(elem, config) {
  return new CodeMirror(elem, defaultConfig);
}

