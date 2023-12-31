module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "off", // overridden by @typescript-eslint plugin
    "no-undef": "off", // overridden by @typescript-eslint plugin
    "no-redeclare": "off", // overridden by @typescript-eslint plugin
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: ["**/*.vue"],
      rules: {
        "@typescript-eslint/indent": "off",
        indent: "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.vue"],
      rules: {
        "default-case": "off",
      },
    },
  ],
  globals: {
    vi: true,
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    test: true,
    afterAll: true,
    beforeAll: true,
  },
};
