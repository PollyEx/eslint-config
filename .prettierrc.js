module.exports = {
  "trailingComma": "es5",
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "printWidth": 80,
  "singleAttributePerLine": true,
  "plugins": ["@ianvs/prettier-plugin-sort-imports"],
  "importOrder": [
    "^vue$",
    "^vue.*$",
    "<BUILT_IN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>",
    "<TYPES>^[.]",
    "^@\\/types.*$",
    "",
    "^@\\/.*$",
    "^[.]"
  ]
}
