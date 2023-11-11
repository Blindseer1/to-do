const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    sourceMapFilename: "./bundle.js.map",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
     
    },
    {
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
      },
    },
   ],
 },
};
