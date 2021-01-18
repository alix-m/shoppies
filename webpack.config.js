const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const js = /\.js$/
const file = /\.(png|jpe?g|gif|svg)$/i
const html = /\.html$/
const styles = /\.s(a|c)ss$/

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  devServer: { 
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/'
 },
  module: {
    rules: [
        { test: js, loader: 'babel-loader', exclude: /node_modules/ },
        { test: file, use: { loader: 'file-loader' } },
        { test: html, use: { loader: 'html-loader' } },
        { test: styles, use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
            { loader: 'postcss-loader' }
        ]}
    ]},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}