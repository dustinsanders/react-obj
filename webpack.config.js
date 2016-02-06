module.exports = {
  entry: './example/client',
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/public/scripts',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
};
