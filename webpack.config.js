const SassLintPlugin = require('sass-lint-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + 'dist/',
    filename: 'bundle.js'
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
  plugins: [
    new SassLintPlugin({
      options: {
        files: {
          ignore: [ 'node_modules/**/*' ],
        },
      },
    }),
  ],
}