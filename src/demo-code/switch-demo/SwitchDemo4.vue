<demo>
</demo>
<template>
  <div>
    <s-switch v-model:value="check" false-color="black" true-color="red" false-text="按月付费" true-text="按年付费"></s-switch>
  </div>
</template>

<script lang="ts">
import { sSwitch } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sSwitch,
  },
  setup() {
    const check = ref(false)
    return {
      check
    }
  }
}
</script>
