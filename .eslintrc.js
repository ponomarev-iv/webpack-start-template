module.exports = {
  'env': {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  'rules': {
    'semi': 'off',
    'indent': 'off',
    'generator-star-spacing': 'off',
    'quotes': [2, 'single']
  }
};
