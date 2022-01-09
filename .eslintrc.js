module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:vue/essential', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0
  }
}
