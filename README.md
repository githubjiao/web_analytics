# hwweb

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start 或 npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##代理设置
修改代理请修改`build/config.js`中的`proxyTable`属性
```
proxyTable: {
    '/api/*': {
        target: 'http://192.168.2.20:8090'
    }
}
```

##页面配置文件
修改页面请修改`src/entry.js`中的`pages`对象
```
let pages = {
    home: 'pages/home/home.js',
    index: 'pages/index/index.js',
    vocation: 'pages/vocation/vocation.js',
    vocationDetail: 'pages/vocationDetail/vocationDetail.js',
};
```
