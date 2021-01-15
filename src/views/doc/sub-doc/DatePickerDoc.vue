<template>
  <div>
    <Demo
      title="基本用法"
      description="DatePicker 用于选择或输入日期。"
      :component="DatePickerDemo1" />

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
import DatePickerDemo1 from '../../../demo-code/datePicker-demo/DatePickerDemo1.vue'
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
        params: 'default-value',
        desc: '默认选中日期，必须为能转换为日期时间对象的字符串',
        type: 'String',
        select: '——',
        default: '——',
      }
    ]

    const eventData = [
      {
        event: 'change',
        desc: 'value 改变时触发',
        params: '改变后的value值'
      }
    ]

    return {
      DatePickerDemo1,
      attrData,
      eventData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
