<template>
  <div>
    <Demo
      title="基本用法"
      description="开关按钮的基本用法"
      :component="SwitchDemo1" />

    <Demo
      title="禁用"
      description="开关按钮的禁用状态"
      :component="SwitchDemo2" />

    <Demo
      title="自定义颜色"
      description="开关按钮自定义颜色"
      :component="SwitchDemo3" />

    <Demo
      title="文字描述"
      description="开关按钮文字描述"
      :component="SwitchDemo4" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

    <Event
      :columns="eventColumns"
      :data="eventData" />
  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import SwitchDemo1 from '../../../demo-code/switch-demo/SwitchDemo1.vue'
import SwitchDemo2 from '../../../demo-code/switch-demo/SwitchDemo2.vue'
import SwitchDemo3 from '../../../demo-code/switch-demo/SwitchDemo3.vue'
import SwitchDemo4 from '../../../demo-code/switch-demo/SwitchDemo4.vue'
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
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'disavled',
        desc: '禁用状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'false-color / true-color',
        desc: 'switch 开关不同状态对应的背景颜色',
        type: 'String',
        select: '——',
        default: '——',
      },
      {
        params: 'false-text / true-tex',
        desc: 'switch 开关不同状态对应的提示文字',
        type: 'String',
        select: '——',
        default: '——',
      }
    ]

    const eventData = [
      {
        event: 'onChange',
        desc: 'value 改变时触发',
        params: '改变后的value值'
      }
    ]
    return {
      SwitchDemo1,
      SwitchDemo2,
      SwitchDemo3,
      SwitchDemo4,
      attrData,
      eventData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
