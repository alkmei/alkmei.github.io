import eslintPluginAstro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...eslintPluginAstro.configs.recommended,

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Auto-sort imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
