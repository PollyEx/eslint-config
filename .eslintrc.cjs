module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off',
        indent: 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.vue'],
      rules: {
        'default-case': 'off',
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
}
