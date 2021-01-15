<demo>
</demo>
<template>
  <div>
    <s-switch v-model:value="check" disabled></s-switch>
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
