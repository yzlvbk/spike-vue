<template>
  <div>
    <Demo
      title="基本用法"
      description="Iput 输入框基础表单组件，支持v-model绑定和原生事件。"
      :component="InputDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import InputDemo1 from '../../../demo-code/input-demo/InputDemo1.vue'
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
        params: 'placeholder',
        desc: '原生属性',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'type',
        desc: '	原生属性(当type为textarea时渲染为文本输入框)',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'icon',
        desc: '	icon 图标名',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'disabled',
        desc: 'disabled 状态',
        type: 'Boolean',
        select: '——',
        default: 'false',
      },
      {
        params: 'error',
        desc: 'error 状态',
        type: 'String',
        select: '——',
        default: 'false',
      }
    ]

    return {
      InputDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
