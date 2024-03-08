module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-ally/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: {
      version: "18.2",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
    plugins: ["react-refresh", "import", "jsx-a11y"],
    rules: {
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
    },
  },
};
