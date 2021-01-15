<template>
  <div class="into">
    <h3 id="写在前面">写在前面</h3>
    <p>本项目是为了学习vue3.0而写的一个组件库，使用<code>typescript</code>、<code>scss</code>可以让你快速学习vue3的新特性。这是我出于提升自己对Vue3.0和组件化开发的理解而制作的一个UI组件库。</p>

    <h3 id="重要概念">重要概念</h3>

    <pre>
<code>
1. 数据响应式
2. 组件化
3. 编译
4. 事件、双向绑定、插槽
5. 缓存组件、动画（transition）
6. typescript
7. vue3.0
</code>
    </pre>

    <h3 id="项目特点">项目特点</h3>

    <ul>
      <li>使用了重构、设计模式、单向数据流等技术概念。</li>
      <li>使用Vue的多种功能。</li>
      <li>组件的样式、色彩的搭配参考了一些成熟的UI框架（如Element UI、iView）。</li>
    </ul>

    <p>目前代码尚未完工，持续更新中。本组件库仅供学习交流，请勿在生产环境中使用。 欢迎讨论交流，如果你觉得还不错，请<a style="color: rgb(54, 177, 191)" href="https://github.com/yzlvbk/spike-vue">Star</a>。</p>
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