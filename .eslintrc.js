module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/recommended",
    "prettier/vue"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};
