module.exports = {
  presets : [
    require('babel-preset-react')
  ],
  plugins : [
  ],
  env : {
    development : {
      presets : [
        require('babel-preset-react-hmre')
      ]
    }
  }
};
