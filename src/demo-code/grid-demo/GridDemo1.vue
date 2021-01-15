<demo>
</demo>
<template>
  <div>
    <s-row class="grid-demo1">
      <s-col :mobile="{8:0}">8</s-col>
      <s-col :mobile="{8:0}">8</s-col>
      <s-col :mobile="{8:0}">8</s-col>
    </s-row>

    <s-row class="grid-demo1">
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
    </s-row>
  </div>
</template>

<script lang="ts">
import { sCol, sRow } from "spike-vue"
import { ref } from "vue"
export default {
  components: {
    sCol,
    sRow
  }
}
</script>

<style lang="scss" scoped>
.grid-demo1 {
  margin-bottom: 10px;
  .s-col:nth-child(odd) {
    background-color: rgb(211, 220, 230);
  }

  .s-col:nth-child(even) {
    background-color: rgb(248, 248, 249);
  }
}
</style>
