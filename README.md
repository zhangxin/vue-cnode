# vue-cnode

## Vue.js 实现 CNODE 社区

学习了 Vue 基础知识后进行了一次实战，利用 CNODE 社区提供的 API 对网站进行了重构，并实现了响应式，在移动端也可以使用。

[预览](https://zhangxin.github.io/vue-cnode)

### 使用到的技术有

ES6、sass、vue-cli 、vue-router、filters（vue 3 貌似已经弃用）、组件通信、axios、生命周期钩子等。

### 目录结构

```
├── dist                  // 项目 build 目录
├── public       		
|   ├── index.html        // 项目入口页面
├── src                   // 生产目录
│   ├── assets            // css js 和图片资源
│   ├── components        // 组件仓库
│     ├── Article.vue     // 文章组件
│     ├── Header.vue      // 顶部导航栏组件
│     ├── Pagination.vue  // 分页器
│     ├── PostList.vue    // 文章列表组件
│     ├── SideBar.vue     // 侧边栏组件
│     ├── UserInfo.vue    // 用户信息组件
│   ├── plugins           // axios 插件
│   ├── router            // 路由
│   ├── store             // vuex 状态仓库，可惜没用上
│   ├── App.vue           // 根组件
│   └── main.js           // 入口文件
├── deploy.sh             // 项目部署脚本
├── vue.config.js         // 项目打包配置文件
├── package.json          // 项目配置文件

```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 版本

@vue/cli 4.5.12

npm 6.14.12

node v14.16.1

yarn 1.22.5


