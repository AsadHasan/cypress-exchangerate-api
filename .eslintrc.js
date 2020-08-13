module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:mocha/recommended",
    "plugin:cypress/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier", "mocha"],
  rules: { "prettier/prettier": ["error"] },
};
