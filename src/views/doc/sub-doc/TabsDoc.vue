<template>
  <div>
    <Demo
      title="基本用法"
      description="基础的、简洁的标签页。"
      :component="TabsDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import TabsDemo1 from '../../../demo-code/tabs-demo/TabsDemo1.vue'
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
        params: 'active-key',
        desc: '绑定值',
        type: 'String',
        select: '——',
        default: '第一个选项卡的 key',
      },
      {
        params: 'key',
        desc: '标识',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'title',
        desc: '标题名称',
        type: 'String',
        select: '——',
        default: '——',
      }
    ]

    return {
      TabsDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
