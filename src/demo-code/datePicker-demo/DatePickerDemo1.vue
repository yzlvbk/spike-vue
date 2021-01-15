<demo>
</demo>
<template>
  <div>
    <s-datePicker default-value="2008-10-10" @change="change"></s-datePicker>
  </div>
</template>

<script lang="ts">
import { sDatePicker } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sDatePicker
  },
  setup() {
    const change = (date) => {
      console.log('change', date)
    }

    return { change }
  }
}
</script>
