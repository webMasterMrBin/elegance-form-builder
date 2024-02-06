const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app/index.tsx'),
  // 输出
  output: {
    path: path.resolve(__dirname, '../built'),
    publicPath: '/built/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.join(__dirname, '../src'),
    },
  },
  // 模式
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    // 清除一些大文件的监听
    ignored: [
      path.join(__dirname, '../build'),
      path.join(__dirname, '../node_modules'),
    ],
  },
  cache: {
    type: 'filesystem',
  },
  // 开发服务器
  devServer: {
    client: {
      reconnect: 3,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
    historyApiFallback: {
      index: 'webpack/index.html',
    },
    static: [
      {
        directory: path.join(__dirname, '../'),
        publicPath: '/',
      },
    ],
    port: 9001,
    compress: true,
    hot: true,
    liveReload: false,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js|ts|tsx$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', 
        ],
      },
      {
        test: /\.(png|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader?limit=100000',
          },
        ],
      },
    ],
  },
}