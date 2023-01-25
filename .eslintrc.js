module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:react/recommended",
      'plugin:@next/next/recommended'
  ],
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "settings": {
      "react": {
          "version": "detect"
      }
  },
  "rules": {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts"] }],
      "react/no-unescaped-entities": 0
  }
}