const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app/index.tsx'),
  // 输出
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/build/',
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
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    })
  ],
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
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', 
        ],
      },
      {
        test: /\.(png|svg|woff|woff2|ttf|eot)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'url-loader?limit=100000',
          },
        ],
      },
    ],
  },
}