const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: { 
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/',
    proxy: {
      '/api/**': {
        target: 'http://localhost:5000/',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      }
    }
 },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
        ]
    },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}