'use strict';

var webpack = require('webpack')
var prefixLoaders = 'css-loader!postcss-loader'

var env = process.env.NODE_ENV
var config = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        loader: prefixLoaders,
      },
      {
        test: /\.less$/,
        loader: `${prefixLoaders}!less-loader`,
      },
      {
        test: /\.scss$/,
        loader: `${prefixLoaders}!sass-loader`,
      },
      {
        test: /\.styl$/,
        loader: `${prefixLoaders}!stylus-loader`,
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    library: '@hhjcz/react-lib',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
