<demo>
</demo>
<template>
  <div>
    <div style="height: 250px;"></div>
    <s-sticky :distance="20">
      <div style="text-align: center; background: skyblue; height: 40px;">sticky</div>
    </s-sticky>
    <div style="height: 500px;"></div>
  </div>
</template>

<script lang="ts">
import { sSticky } from "spike-vue"
export default {
  components: {
    sSticky
  }
}
</script>

