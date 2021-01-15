<template>
  <div>
    <Demo
      title="基本用法"
      description="Container 普通上中下三栏布局。"
      :component="ContainerDemo1" />

    <Demo
      title="主体部分带侧边栏"
      description="Container 上中下三栏布局，主体部分带侧边栏。"
      :component="ContainerDemo2" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import ContainerDemo1 from '../../../demo-code/container-demo/ContainerDemo1.vue'
import ContainerDemo2 from '../../../demo-code/container-demo/ContainerDemo2.vue'
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
        params: 'style',
        desc: 'css行内样式',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'width',
        desc: '	侧边栏宽度',
        type: 'String',
        select: '——',
        default: '300px',
      }
    ]

    return {
      ContainerDemo1,
      ContainerDemo2,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
