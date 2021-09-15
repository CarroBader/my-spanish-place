const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     indentedSyntax: true,
          //     // sass-loader version >= 8
          //     sassOptions: {
          //       indentedSyntax: true
          //     }
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}