module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  ignorePatterns: ["node_modules", "dist"],
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    workbox: true,
    JSX: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "react/no-unknown-property": ["error", { ignore: ["on", "jsx", "global", "fetchpriority"] }],
    "eol-last": ["error", "always"],
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-prototype-builtins": "off",
    "react/react-in-jsx-scope": "off"
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "next"]
};
