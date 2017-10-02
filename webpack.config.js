const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/public`,
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/, 
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: `${__dirname}/views/index.html`,
      filename: 'index.html',
      inject: 'body'
    }),
    new UglifyJSPlugin()
  ]
}