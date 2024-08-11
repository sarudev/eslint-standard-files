module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    'curly': ['warn', 'multi'],
    '@typescript-eslint/prefer-readonly': 'off'
  }
}
