const Path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')


const ExtractStyle = new ExtractTextPlugin({filename: 'bundle.css'})

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: Path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractStyle.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader'}, {loader: 'sass-loader'}]
        })
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader?outputPath=font/&publicPath=font/'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=img/&publicPath=img/'
      }
    ]
  },
  devServer: {
    contentBase: Path.resolve(__dirname, 'src/'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
    compress: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    ExtractStyle
  ]
}
