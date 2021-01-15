<template>
  <div>
    <Demo
      title="基本用法"
      description="Radio 适用于在多个互斥的选项中选择的场景。"
      :component="RadioDemo1" />

    <Demo
      title="垂直模式"
      description="Radio 适用于在多个互斥的选项中选择的场景。"
      :component="RadioDemo2" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import RadioDemo1 from '../../../demo-code/radio-demo/RadioDemo1.vue'
import RadioDemo2 from '../../../demo-code/radio-demo/RadioDemo2.vue'
import { attrColumns, eventColumns } from '../../../utils/cloumn-config'
import {
  ref
} from 'vue';
export default {
  components: {
    Demo,
    Attr
  },

  setup() {
    const attrData = [
      {
        params: 'options',
        desc: 'radio 的选项数组',
        type: 'Array',
        select: '——',
        default: '——',
      },
      {
        params: 'vertical',
        desc: '	垂直排列的 radio',
        type: 'Boolean',
        select: '——',
        default: 'false',
      },
      {
        params: 'default-index',
        desc: '	默认选中选项的 index 值',
        type: 'Number',
        select: '——',
        default: '——',
      }
    ]

    return {
      RadioDemo1,
      RadioDemo2,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
