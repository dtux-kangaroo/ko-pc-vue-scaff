const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (context) => {
  const { webpack } = context;
  return {
    webpack: {
      entry: {},
      output: {},
      module: {
        rules: []
      },
      plugins: [
        // new VueLoaderPlugin(),
        // new HtmlWebpackPlugin({
        //   filename: 'index.html',
        //   template:"index.ejs",
        //   hash: false,
        //   chunksSortMode: "none",
        //   assets: {
        //     config_js: '/config/conf.dev.js'
        //   }
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //   __PRODUCTION: JSON.stringify(true)
        // }),
        new CopyWebpackPlugin([
          // {from: path.resolve(__dirname,'/public'),to:'/'}
          {from: path.resolve(__dirname,'public/config'),to:'config'},
          {from: path.resolve(__dirname,'public/mock'),to:'mock'},
          {from: path.resolve(__dirname,'public/assets'),to:'assets'}
        ])
      ],
      resolve: {
        // extensions: ['.js', '.jsx', '.scss', '.css', '.vue'], //自动解析确定的扩展。覆盖原有扩展
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'src'),
          '@public': path.resolve(__dirname, 'public'),
          '@nm': path.resolve(__dirname, 'node_modules')
        }
      },
      externals :{
        'FRONT_CONF': 'FRONT_CONF'
      }
    }
  };
};