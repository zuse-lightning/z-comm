import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser"; // Import the parser

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // This allows you to use Babel without a config file
        babelOptions: {
          presets: ["@babel/preset-react"], // Ensure JSX parsing is enabled
        },
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Optional
    },
  },
];