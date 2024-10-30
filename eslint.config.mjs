import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "commonjs", // or "commonjs" if you prefer
      globals: { ...globals.browser, ...globals.node },
      parser: "@babel/eslint-parser", // Add the parser here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];