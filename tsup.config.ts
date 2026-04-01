import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  globalName: "sparqlEditor",
  dts: true,
  clean: true,
  injectStyle: true,
});
