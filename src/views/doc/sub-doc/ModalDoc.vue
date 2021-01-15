<template>
  <div>
    <Demo
      title="基本用法"
      description="Modal 弹出一个对话框，适合需要定制性更大的场景。"
      :component="ModalDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import ModalDemo1 from '../../../demo-code/modal-demo/ModalDemo1.vue'
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
        params: 'visible',
        desc: '是否展示',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '	确认触发函数',
        type: 'Function',
        select: '( )=>{ }',
        default: '——',
      },
      {
        params: 'cancel',
        desc: '	取消触发函数',
        type: 'Function',
        select: '( )=>{ }',
        default: '——',
      }
    ]

    return {
      ModalDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
