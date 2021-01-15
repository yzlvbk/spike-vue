<template>
  <div>
    <Demo
      title="基本用法"
      description="按钮的基本用法"
      :component="ButtonDemo1" />

    <Demo
      title="按钮组"
      description="按钮组"
      :component="ButtonDemo2" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import ButtonDemo1 from '../../../demo-code/button-demo/ButtonDemo1.vue'
import ButtonDemo2 from '../../../demo-code/button-demo/ButtonDemo2.vue'
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
        params: 'icon',
        desc: 'icon 图标名',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'position',
        desc: 'icon 位置',
        type: 'String',
        select: 'left , right',
        default: 'left',
      },
      {
        params: 'normal',
        desc: '带背景色的按钮',
        type: '	Boolean',
        select: '——',
        default: 'false',
      },
      {
        params: 'primary',
        desc: '主题色按钮',
        type: '	Boolean',
        select: '——',
        default: 'false',
      },
      {
        params: 'loading',
        desc: '带 loading 效果的按钮，当按钮被点击时会出现 loading 效果，再次点击 loading 效果消失',
        type: '	Boolean',
        select: '——',
        default: 'false',
      }
    ]

    return {
      ButtonDemo1,
      ButtonDemo2,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
