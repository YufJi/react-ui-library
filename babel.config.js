module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [require('./custom-babel.js'), { libraryName: '../src' }]
  ]
}