module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "react-app", "react-app/jest"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};