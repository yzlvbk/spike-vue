<template>
  <div>
    <Demo
      title="基本用法"
      description="Waterfall 瀑布流组件，快速实现瀑布流布局。"
      :component="WaterfallDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

    <Event
      :columns="eventColumns"
      :data="eventData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import WaterfallDemo1 from '../../../demo-code/waterfall-demo/WaterfallDemo1.vue'
import { attrColumns, eventColumns } from '../../../utils/cloumn-config'
import {
  ref
} from 'vue';
export default {
  components: {
    Demo,
    Attr,
    Event
  },

  setup() {
    const attrData = [
      {
        params: 'width',
        desc: '瀑布流布局中每个子元素的宽度，单位为 px',
        type: 'Number',
        select: '——',
        default: '200',
      },
      {
        params: 'source',
        desc: '	组件 v-for 列表渲染的数据，必填，渲染时数据将以作用域插槽的形式传回父组件',
        type: 'Array',
        select: '——',
        default: '——',
      },
      {
        params: 'target',
        desc: '	组件监听滚动的目标，可以是 CSS 选择器，也可以是 HTML 元素，如果不传，组件将默认监听 window',
        type: 'String , HTMLElement',
        select: '	——',
        default: '——',
      }
    ]

    const eventData = [
      {
        event: 'scroll-bottom',
        desc: '被监听的元素滚动到底部时触发，只触发一次，当 source 数据改变时，会重新添加监听（滚动到底部时会再次触发）',
        params: '——'
      }
    ]

    return {
      WaterfallDemo1,
      attrData,
      eventData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
