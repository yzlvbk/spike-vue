### 项目环境

```js
node -v
v12.13.0

npm -v
6.12.0

yarn -v
1.19.1

注意在使用包管理工具的时候，两个不能混合使用。推荐yarn 

//yarn 设置淘宝源
yarn config set registry https://registry.npm.taobao.org

//node-sass设置镜像
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

### 快速上手

在新项目的命令行终端运行一下命令

```js
yarn add spike-vue
```

或

```js
npm install spike-vue
```

### 使用

如果使用了 npm / yarn 安装，一般在组件中如下配置：

```js
import { sButton } from "spike-vue"
import 'spike-vue/package/lib/spike-vue.css'
export default {
  components: {
    sButton,
  }
}
```

### 特别提醒

使用 spike-vue 时，您需要使用 border-box 盒模型，否则会影响样式。代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

