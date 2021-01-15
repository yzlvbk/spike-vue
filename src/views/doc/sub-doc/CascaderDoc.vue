<template>
  <div>
    <Demo
      title="基本用法"
      description="当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。"
      :component="CascaderDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import CascaderDemo1 from '../../../demo-code/cascader-demo/CascaderDemo1.vue'
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
        desc: '当前选中的数据 value 值的集合，按层级次序排序，用 v-model 绑定',
        type: 'Array',
        select: '——',
        default: '——',
      },
      {
        params: 'source',
        desc: '级联选择器的数据源，格式较严格',
        type: '	Array',
        select: '——',
        default: '——',
      },
      {
        params: 'clearable',
        desc: '	是否支持清空选项',
        type: 'Boolean',
        select: '——',
        default: 'false',
      }
    ]

    return {
      CascaderDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
