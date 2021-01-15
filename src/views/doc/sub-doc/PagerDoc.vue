<template>
  <div>
    <Demo
      title="基本用法"
      description="Pager 页数较少时完全显示。"
      :component="PagerDemo1" />

    <Demo
      title="显示分隔符"
      description="Pager 页数较多时非连续页之间显示分隔符。"
      :component="PagerDemo2" />

    <Demo
      title="简洁样式"
      description="Pager simple属性开启简洁样式"
      :component="PagerDemo3" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import PagerDemo1 from '../../../demo-code/pager-demo/PagerDemo1.vue'
import PagerDemo2 from '../../../demo-code/pager-demo/PagerDemo2.vue'
import PagerDemo3 from '../../../demo-code/pager-demo/PagerDemo3.vue'
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
        params: 'total',
        desc: '总页数，必填',
        type: 'Number',
        select: '——',
        default: '——',
      },
      {
        params: 'current',
        desc: '	当前页数，必填，用 v-model 绑定',
        type: 'Number',
        select: '——',
        default: '——',
      },
      {
        params: 'single-hide',
        desc: '	当只有一页时隐藏分页器，默认隐藏',
        type: 'Boolean',
        select: '——',
        default: 'true',
      },
      {
        params: 'simple',
        desc: '	简洁样式，默认不开启',
        type: 'Boolean',
        select: '——',
        default: 'false',
      }
    ]

    return {
      PagerDemo1,
      PagerDemo2,
      PagerDemo3,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
