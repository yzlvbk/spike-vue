<demo>
</demo>
<template>
  <div class="demo">
    <s-button>Default</s-button>
    <s-button normal>Normal</s-button>
    <s-button primary>primary</s-button>
    <s-button icon="power">Icon</s-button>
    <s-button icon="power" position="right">Icon</s-button>
    <s-button icon="power" loading primary>Click me!</s-button>
  </div>
</template>

<script lang="js">
import { sButton } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sButton,
  },
  setup() {
    const check = ref(true)
    return {
      check
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .s-button {
    margin: 10px 10px 0 0;
  }
}
</style>
