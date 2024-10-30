import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser"; // Import the parser

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module", // or "commonjs" if you prefer
      globals: { ...globals.browser, ...globals.node },
      parser: babelParser, // Set the parser correctly
      parserOptions: {
        requireConfigFile: false, // You might need this depending on your Babel setup
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];