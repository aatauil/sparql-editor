<p align="center">
    <img src="https://user-images.githubusercontent.com/52280338/222252617-f86be28d-f2f3-4871-a0bf-00e7c42080fa.png" alt="mu-node-authentication" />
</p>
<h1 align="center">Sparql Editor</h1>
<h2 align="center">Sparql Editor based on CodeMirror 6</h2>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/aatauil/sparql-editor" />
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="license: MIT" />
  </a>
  <a href="https://github.com/aatauil/sparql-editor/actions/workflows/publish.yml">
    <img src="https://github.com/aatauil/sparql-editor/actions/workflows/publish.yml/badge.svg" alt="npm publish" />
  </a>
  </a>
</p>

---

## Functionality:

- 🏳‍🌈 Syntax highlighting
- 📔 History 
- 💢 Linting
- 🔎 Search
- ℹ️ tooltip 

# :open_book: Documentation
## Usage recommendation
Currently its not adviced to use this editor in production as it is in early development. It will still change a lot and releases can have bugs therefor when using this library in a project, make sure to fix the version and manualy check the commit history before upgrading.


## Description
This editor is nothing more then a codemirror 6 editor instance with sparql support from the codemirror legacy language list and some defaults functionality out of the box. The linter uses (this sparql parser)[https://github.com/RubenVerborgh/SPARQL.js] to show any errors while you code. It is framework agnostic and can theirfor be used in any project. 

## Getting Started

`npm i sparql-editor`

```js
  import { createSparqlEditor } from "sparql-editor"
  
  const editor = createSparqlEditor({
    parent: document.getElementById("editor"),
    onChange: onChange,
    value: "SELECT * WHERE { ?s ?p ?o }"
  });

  function onChange(value, codemirrorViewInstance) {
      alert(value)
  }
```

## Options
| ENV  | Description | default | required |
|---|---|---|---|
| parent | html dom element to attach editor to | / | required
| onChange | function that gets called whenever editor value changes  | / |   |
| value |  Initial value of editor | https://github.com/aatauil/sparql-editor/blob/4732494949e44910d8ca45d0391331b520ae9ee0/src/index.ts#L32-L37  |  |

## Extending the editor
Currently there is no easy way for adding extentions to the editor, this will hopefully be added soon. Until then, the best direction to take forking this project, installing or deleting extentions and updating the index.ts file accordingly.  

## Development guide

- clone this repo
- `cd` into it
- run `npm install`
- run `npm run dev` 

In the test folder there is a index.html file. Your editor probably has an extention that can easily serve this file for you. In case you are using VSCode, you can use the Live Server Extention. 


# :orange_heart: Contributing

Everyone can open an issue or send in a pull request. 


# 📝 License

This project is [MIT](LICENSE) licensed.
