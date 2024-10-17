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
| value |  Initial value of editor | https://github.com/aatauil/sparql-editor/blob/4732494949e44910d8ca45d0391331b520ae9ee0/src/index.ts#L32-L37  |  |

## Extending the editor
Currently there is no easy way for adding extentions to the editor, this will hopefully be added soon. Until then, the best direction to take is forking this project, installing or 
deleting extensions and updating the index.ts file accordingly.  

## Development guide

- clone this repo
- `cd` into it
- run `npm install`
- run `npm run dev` 

In the test folder there is a index.html file. Your editor probably has an extension that can easily serve this file (html) for you. In case you are using VSCode, we recommend the Live Server Extension. 

## 📍 Roadmap 
[x] Tooltip functionality <br />
[] Linting by codemirror-lang-sparql <br />
[] Autocomplete functionality <br />
[] Extensible extensions <br />

# License

This project is [MIT](LICENSE) licensed.