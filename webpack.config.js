const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before each build
  },
  devServer: {
    static: './dist',
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match all .css files
        use: ['style-loader', 'css-loader'], // Loaders to process CSS
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource'  // Handle image files
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
