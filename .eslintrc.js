module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    'plugin:ember/recommended',
    "standard"
  ],
  "rules": {
    "arrow-parens": "off",
    "camelcase": "off",
    "comma-dangle": ["error", "always-multiline"],
    "func-call-spacing": "off",
    "generator-star-spacing": "off",
    "ember/no-on-calls-in-components": "off",
    "ember/no-global-jquery": "off",
    "key-spacing": ["error", { beforeColon: true, afterColon: true, align: "colon" }],
    "new-cap": "off",
    "no-console": "off",
    "no-mixed-operators": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-return-assign": "off",
    "no-sequences": "off",
    "no-template-curly-in-string": "off",
    "no-whitespace-before-property": "off",
    "object-curly-spacing": ["error", "never"],
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "quotes": "off",
    "spaced-comment": "off",
    "standard/object-curly-even-spacing": "off",
    "standard/no-callback-literal": "off",
  },

  "globals": {
    // "showdown": false,
  },
  overrides: [
    // node files
    {
      files: [
        'index.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ],
}
