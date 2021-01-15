<demo>
</demo>
<template>
  <div style="height: 200px;">
    <s-timePicker default-value="12:30:30" @change='change'></s-timePicker>
  </div>
</template>

<script lang="ts">
import { sTimePicker } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sTimePicker
  },
  setup() {
    const change = (val) => {
      console.log('change', val)

    }

    return { change }
  }
}
</script>
