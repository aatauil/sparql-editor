# sparql-editor

## Installation:
`npm i sparql-editor`

## Simple usage example:
```js
    
  import { createSparqlEditor } from "sparql-editor"
  
  const editor = createSparqlEditor({
    parent: document.getElementById("editor"),
    onChange: onChange
    doc: "default value"
  });

  function onChange(value) {
      console.log(value)
  }
```
