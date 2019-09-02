module.exports = {
  extends: "eslint:recommended",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "no-console": "error",
    "no-unused-vars": "off"
  },
  globals: {
    fetch: false
  }
};
