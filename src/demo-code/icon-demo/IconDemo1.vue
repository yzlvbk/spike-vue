<demo>
</demo>
<template>
  <div class="icon-demo">
    <s-icon name="success" />
    <s-icon name="user" />
    <s-icon name="close" />
    <s-icon name="setting" />
    <s-icon name="power" />
    <s-icon name="loading" />
  </div>
</template>

<script lang="ts">
import { sIcon } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sIcon
  },
  setup() {
    const visible = ref(false)
    const showModal = () => {
      visible.value = true
    }
    return {
      showModal,
      visible
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-demo {
  .s-icon-wrapper {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>
