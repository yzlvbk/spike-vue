<template>
  <div>
    <Demo
      title="横向展开"
      description="Spread 用于提供水平和垂直方向展开收起动画功能的小组件。"
      :component="SpreadDemo1" />

    <Demo
      title="纵向展开"
      description="Spread 用于提供水平和垂直方向展开收起动画功能的小组件。"
      :component="SpreadDemo2" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import SpreadDemo1 from '../../../demo-code/spread-demo/SpreadDemo1.vue'
import SpreadDemo2 from '../../../demo-code/spread-demo/SpreadDemo2.vue'
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
        desc: '控制内容的展开和收起，可动态绑定，必填。组件内部使用 v-show 控制内容的显示。',
        type: 'Boolean',
        select: '——',
        default: '——',
      },
      {
        params: 'horizontal',
        desc: '	横向展开和收起，默认为纵向。',
        type: 'Boolean',
        select: '——',
        default: 'false',
      },
      {
        params: 'duration',
        desc: '	动画持续时间，单位为 ms。',
        type: 'String , Number',
        select: '	——',
        default: '300',
      }
    ]

    return {
      SpreadDemo1,
      SpreadDemo2,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
