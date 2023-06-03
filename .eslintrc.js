module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
  },
}
