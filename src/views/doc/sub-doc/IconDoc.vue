<template>
  <div>
    <Demo
      title="基本用法"
      description="提供一些常用图标集合。"
      :component="IconDemo1" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import IconDemo1 from '../../../demo-code/icon-demo/IconDemo1.vue'
import { attrColumns, eventColumns } from '../../../utils/cloumn-config'
import {
  ref
} from 'vue'
export default {
  components: {
    Demo,
    Attr,
    Event
  },

  setup() {
    const attrData = [
      {
        params: 'name',
        desc: '	icon 图标名',
        type: '	String',
        select: '——',
        default: '——',
      }
    ]

    return {
      IconDemo1,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
