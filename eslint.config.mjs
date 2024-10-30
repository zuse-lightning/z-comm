import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: "babel-eslint", // or "@babel/eslint-parser" if using that
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "commonjs", // or "commonjs" based on your project
      },
    },
    plugins: {
      react: pluginReact,
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];