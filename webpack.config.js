module.exports = {
    entry: './js/client.js',
    output: {
      path: __dirname,
      filename: './js/client.min.js'
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'es2015', 'react'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          },
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  };