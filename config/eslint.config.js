import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,

  {
    // Apply rules to all JS files
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],

    languageOptions: {
      // Globals for browser + node
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      // more rules can be added there
    },
  },
]);
