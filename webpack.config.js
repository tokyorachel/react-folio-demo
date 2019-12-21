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
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: ['babel-loader', 'eslint-loader']
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