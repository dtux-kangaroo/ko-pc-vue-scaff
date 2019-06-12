# pc-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 技术概览
```
# 使用UI库
[element-ui](https://vux.li/)
````
```
#主要技术
vue2,vuex,webpack4 ,babel7,vue-router,element-ui,axios,echarts--图表，scss

```
## 本地代理
```
查看build文件夹下 dev.js中webpack配置 
 devServer: {
    disableHostCheck: true,
    contentBase: require('path').join(__dirname, "dist"),
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 8090,
    host: "127.0.0.1",
    // proxy: [{
    //   context: ['/auth', '/api'],
    //   target: 'http://localhost:3000',
    // }],
    hotOnly: true,
  }
  取消proxy注释后，即可完成本地代理 ，（context 接口前缀 ，target 接口api服务地址）
  ```
  ## 参考地址
  ```
  https://segmentfault.com/a/1190000016314976
  ```
  
