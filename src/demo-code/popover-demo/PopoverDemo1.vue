<demo>
</demo>
<template>
  <div class="popover-demo">
    <s-popover>
      <template v-slot:content>弹出内容</template>
      <s-button>click激活</s-button>
    </s-popover>

    <s-popover position="bottom">
      <template v-slot:content>弹出内容</template>
      <s-button>click激活(bottom)</s-button>
    </s-popover>

    <s-popover trigger="hover" position="right">
      <template v-slot:content>弹出内容</template>
      <s-button>hover激活</s-button>
    </s-popover>
  </div>
</template>

<script lang="ts">
import { sPopover, sButton } from "spike-vue"
export default {
  components: {
    sPopover,
    sButton
  }
}
</script>

<style lang="scss" scoped>
.popover-demo {
  .s-popover {
    margin-right: 20px;
  }
}
</style>
