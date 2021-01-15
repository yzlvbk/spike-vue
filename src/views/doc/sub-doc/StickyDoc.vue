<template>
  <div>
    <Demo
      title="基本用法"
      description="Sticky 用于窗口滚动时固定某元素的组件。"
      :component="StickyDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import StickyDemo1 from '../../../demo-code/sticky-demo/StickyDemo1.vue'
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
        params: 'distance',
        desc: '粘滞位置距离窗口顶部的距离，单位 px，默认100',
        type: 'Number',
        select: '——',
        default: '100',
      }
    ]

    return {
      StickyDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
