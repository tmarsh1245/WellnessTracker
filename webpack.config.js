module.exports = {
    entry: "./src/App.jsx",
    output: {
      filename: "../static/app.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
  