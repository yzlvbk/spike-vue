<demo>
</demo>
<template>
  <div>
    <s-switch v-model:value="check"></s-switch>
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
    const check = ref(true)
    return {
      check
    }
  }
}
</script>
