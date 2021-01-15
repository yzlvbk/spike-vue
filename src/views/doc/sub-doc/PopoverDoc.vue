<template>
  <div>
    <Demo
      title="基本用法"
      description="Popover 常用于展示提示信息。"
      :component="PopoverDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import PopoverDemo1 from '../../../demo-code/popover-demo/PopoverDemo1.vue'
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
        params: 'position',
        desc: '弹框位置，默认顶部',
        type: 'String',
        select: 'top , right , left , bottom',
        default: 'top',
      },
      {
        params: 'trigger',
        desc: '	弹框的触发方式，默认点击触发',
        type: 'String',
        select: 'click , hover',
        default: 'click',
      }
    ]

    return {
      PopoverDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
