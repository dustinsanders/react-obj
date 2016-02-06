module.exports = {
  entry: './example/client',
  output: {
    path: __dirname + '/public/scripts',
    filename: 'bundle.js',
  },
  loaders: [
    {
      test: /\.jsx?$/,
      // exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015'],
      },
    },
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
};
