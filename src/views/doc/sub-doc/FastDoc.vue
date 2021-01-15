<template>
  <div class="into">
    <h3 id="项目环境">项目环境</h3>

    <pre><code class="language-js">node -v
v12.13.0

npm -v
6.12.0

yarn -v
1.19.1

注意在使用包管理工具的时候，两个不能混合使用。推荐yarn 

//yarn 设置淘宝源
yarn config set registry https://registry.npm.taobao.org

//node-sass设置镜像
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g</code></pre>

    <h3 id="快速上手">快速上手</h3>

    <p>在新项目的命令行终端运行一下命令</p>

    <pre><code class="language-js">yarn add spike-vue</code></pre>
    <p>或</p>
    <pre><code class="language-js">npm install spike-vue</code></pre>
    <h3 id="使用">使用</h3>
    <p>如果使用了 npm / yarn 安装，一般在组件中如下配置：</p>
    <pre><code class="language-js">import { sButton } from "spike-vue"
import 'spike-vue/package/lib/spike-vue.css'
export default {
  components: {
    sButton,
  }
}</code></pre>

    <h3 id="特别提醒">特别提醒</h3>

    <p>使用 spike-vue 时，您需要使用 border-box 盒模型，否则会影响样式。代码示例：</p>

    <pre><code class="language-css">*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style scoped lang="scss">
.into {
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-size: 1.25em;
  }

  p {
    margin-top: 0px;
    margin-bottom: 16px;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: rgb(246, 248, 250);
    border-radius: 3px;
  }

  pre code {
    display: inline;
    padding: 0px;
    margin: 0px;
    overflow: visible;
    line-height: inherit;
    overflow-wrap: normal;
    background-color: initial;
    border: 0px;
  }

  ul {
    padding-left: 2em;
    margin-top: 0px;
    margin-bottom: 16px;
  }
}
</style>