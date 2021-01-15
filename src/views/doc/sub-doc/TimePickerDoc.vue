<template>
  <div>
    <Demo
      title="基本用法"
      description="TimePicker 输入或选择时间的组件。使用v-model绑定。"
      :component="TimePickerDemo1" />

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
import TimePickerDemo1 from '../../../demo-code/timePicker-demo/TimePickerDemo1.vue'
import { attrColumns, eventColumns } from '../../../utils/cloumn-config'
export default {
  components: {
    Demo,
    Attr,
    Event
  },

  setup() {
    const attrData = [
      {
        params: 'default-value',
        desc: '	默认选中时间，必须为"00:00:00"格式的字符串',
        type: 'String',
        select: '——',
        default: '——',
      }
    ]

    const eventData = [
      {
        event: 'change',
        desc: '用户确认选定的值时触发',
        params: '组件绑定值'
      }
    ]

    return {
      TimePickerDemo1,
      attrData,
      eventData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
