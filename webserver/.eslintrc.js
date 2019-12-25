module.exports =  {
  parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
  extends:  [
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
 parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  "module",  // Allows for the use of imports
  },
  plugins: [
    "prettier"
  ],
  rules:  {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/prefer-interface": 0,
    "no-warning-comments": 1,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false }]
  },
};
