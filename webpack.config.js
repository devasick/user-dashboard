const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: !isEnvProduction ? 'development' : 'production',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    vendor: [
      'react',
      'redux',
      'react-dom',
      'react-router',
      'react-redux',
      'react-router-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.[name].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { targets: { browsers: 'last 2 versions' } }
                ],
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
                [
                  '@babel/plugin-proposal-decorators',
                  {
                    legacy: true
                  }
                ],
                ['@babel/plugin-proposal-class-properties', { loose: true }]
              ],
              cacheDirectory: true,
              cacheCompression: isEnvProduction,
              compact: isEnvProduction
            }
          }
        ]
      }
    ]
  },
  
  resolve: {
    extensions: ['.jsx', '.js', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './public/index.html'),
      template: 'src/index.html'
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
},
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}
