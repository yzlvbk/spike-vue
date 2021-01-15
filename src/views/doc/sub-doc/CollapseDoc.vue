<template>
  <div>
    <Demo
      title="基本用法"
      description="Collapse 将内容区域折叠/展开。"
      :component="CollapseDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import CollapseDemo1 from '../../../demo-code/collapse-demo/CollapseDemo1.vue'
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
        params: 'selected',
        desc: '当前展开 item 的 name 组成的数组。可以用 v-model 修饰符绑定。',
        type: 'Array',
        select: '——',
        default: '——',
      },
      {
        params: 'multiple',
        desc: '是否允许同时展开多个 item。',
        type: 'Boolean',
        select: '——',
        default: 'true',
      },
      {
        params: 'name',
        desc: 'item 的 name 属性，唯一且必填。',
        type: '	String',
        select: '——',
        default: '——',
      }
    ]

    return {
      CollapseDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
