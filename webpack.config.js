module.exports = {
  entry: {
    //vendor: "./scripts/vendor.js",
    bundle: "./scripts/index.js"
  },
  output: {
    path: './scripts',
    filename: "[name].build.js"
  },
	plugins: [
	],
  module: {
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url?limit=8192"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.ttf$/,
        loader: "file"
      }
    ]
  }
};
