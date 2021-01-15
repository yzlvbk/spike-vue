<demo>
</demo>
<template>
  <div class="icon-demo">
    <s-pager :total="50" v-model:current="current"></s-pager>
  </div>
</template>

<script lang="ts">
import { sPager } from "spike-vue"
import { ref } from "vue"
export default {
  components: {
    sPager
  },
  setup() {
    const current = ref(10)
    return {
      current
    }
  }
}
</script>

