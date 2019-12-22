const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new SassLintPlugin({
      options: {
        files: {
          ignore: [ 'node_modules/**/*' ],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
}