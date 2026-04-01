<p align="center">
    <img src="https://user-images.githubusercontent.com/52280338/222252617-f86be28d-f2f3-4871-a0bf-00e7c42080fa.png" alt="Sparql Editor" />
</p>
<h1 align="center">SPARQL Editor</h1>
<h2 align="center">Built on CodeMirror 6</h2>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/aatauil/sparql-editor" alt="Version" />
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="License: MIT" />
  </a>
  <a href="https://github.com/aatauil/sparql-editor/actions/workflows/publish.yml">
    <img src="https://github.com/aatauil/sparql-editor/actions/workflows/publish.yml/badge.svg" alt="NPM Publish Status" />
  </a>
</p>

---

## Features

- 🏳‍🌈 Syntax Highlighting
- 📔 History Tracking
- 💢 Linting
- 🔎 Search Functionality
- 🔽 Tooltips
- ✨ Query Formatting

## 📚 Documentation

### Usage
The SPARQL Editor is stable and actively used in the [sparql-browser-extension](https://github.com/aatauil/sparql-browser-extension). It returns a CodeMirror 6 `EditorView` instance, enabling you to manipulate the editor as detailed in the [CodeMirror documentation](https://codemirror.net/docs/ref/).

### Overview
This editor instance leverages CodeMirror 6 with sensible defaults and enhanced features. It utilizes the [codemirror-lang-sparql](https://github.com/aatauil/codemirror-lang-sparql) parser for syntax highlighting, while linting is facilitated by the [SPARQL.js](https://github.com/RubenVerborgh/SPARQL.js) library.

## Getting Started

`npm i sparql-editor`

```js
  import { createSparqlEditor } from "sparql-editor"
  
  const domElement = document.getElementById("editor")

  const editor = createSparqlEditor({
    parent: domElement,
    onChange: onChange,
    value: "SELECT * WHERE { ?s ?p ?o }"
  });

  function onChange(value, codemirrorViewInstance) {
      console.log(codemirrorViewInstance)
      alert(value)
  }
```

## Options
| Argument  | Description | default | required |
|---|---|---|---|
| parent | html dom element to attach editor to | / | required
| onChange | function that gets called whenever editor value changes  | / |   |
| value |  Initial value of editor | `SELECT * WHERE { ?s ?p ?o } LIMIT 100`  |  |
| extensions | additional CodeMirror 6 extensions to load alongside the built-in ones | `[]` | |

## Formatting

The editor includes built-in SPARQL query formatting powered by [sparqljs](https://github.com/RubenVerborgh/SPARQL.js).

**Keyboard shortcut:** `Shift + Alt + F`

**Programmatic access:** `formatQuery` is exported so you can trigger formatting from your own UI (e.g. a button):

```js
import { createSparqlEditor, formatQuery } from "sparql-editor"

const editor = createSparqlEditor({ parent: domElement });

document.getElementById("format-btn").addEventListener("click", () => {
  formatQuery(editor);
});
```

Formatting silently no-ops if the query has syntax errors.

## Extending the editor

Pass any CodeMirror 6 extensions via the `extensions` prop. They are loaded after the built-in defaults, so they can override themes, keymaps, or other behaviour.

Import CodeMirror primitives (`EditorView`, `StateField`, `StateEffect`, etc.) from `sparql-editor` when building extensions:

```js
import { createSparqlEditor, EditorView } from "sparql-editor";

const myTheme = EditorView.theme({ "&": { fontSize: "14px" } });

const editor = createSparqlEditor({
  parent: document.getElementById("editor"),
  extensions: [myTheme]
});
```

For full control, the built-in extension set is also exported so you can compose your own:

```js
import { defaultExtensions, EditorView } from "sparql-editor";

const editor = new EditorView({
  parent: document.getElementById("editor"),
  extensions: [...defaultExtensions, myCustomExtension]
});
```

## Development guide

- clone this repo
- `cd` into it
- run `npm install`
- run `npm run dev`

This will start the TypeScript compiler in watch mode and automatically open `test/index.html` in your browser at `http://127.0.0.1:8080/test/index.html`. Hard-refresh the browser after making changes to see them reflected.

## 📍 Roadmap
- [x] Tooltip functionality
- [x] Linting (via SPARQL.js)
- [x] Autocomplete (keywords + local variables)
- [x] Query formatting (via SPARQL.js)
- [x] Extensible extensions API

# License

This project is [MIT](LICENSE) licensed.