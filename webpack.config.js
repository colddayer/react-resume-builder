const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      util: require.resolve('util'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      assert: require.resolve('assert/'),
      path: require.resolve('path-browserify'),
      url: require.resolve('url/'),
      fs: false
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp|ttf)$/,
        type: 'asset'
      },
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [require.resolve('react-refresh/babel')]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new ReactRefreshPlugin(),
    new webpack.ProvidePlugin({
      process: 'process'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
};
