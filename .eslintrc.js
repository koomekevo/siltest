/* eslint-disable no-undef */
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
      "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
      "no-shadow": "off",
      "no-unused-vars": "off",
      "no-undef": "off"
    },
  "ignorePatterns": [
      "dist/",
      "build/"
  ]
}