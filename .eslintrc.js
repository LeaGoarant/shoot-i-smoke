module.exports = {
  env: {
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'semistandard'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 2,
  }
};
