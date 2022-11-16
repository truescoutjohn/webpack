const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, args) => {
  const isProduction = args.mode === 'production';
  const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        { test: /\.js$/, use: ['babel-loader'] },
        {
          test: /.(png|jpg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    devServer: {
      hot: true,
    },
  };

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));
  }

  return config;
};
