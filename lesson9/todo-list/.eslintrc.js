module.exports = {
  extends: ['eslint-config-airbnb-base'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'func-names': 0,
    'max-len': 0,
  },
};
