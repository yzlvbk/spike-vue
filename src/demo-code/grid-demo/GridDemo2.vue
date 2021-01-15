<demo>
</demo>
<template>
  <div>
    <s-row class="grid-demo2" :gutter="20">
      <s-col :mobile="{8:0}">
        <div>间隙20px</div>
      </s-col>

      <s-col :mobile="{8:0}">
        <div>间隙20px</div>
      </s-col>

      <s-col :mobile="{8:0}">
        <div>间隙20px</div>
      </s-col>
    </s-row>

    <s-row class="grid-demo2">
      <s-col :mobile="{8:0}">
        <div>偏移8</div>
      </s-col>
      <s-col :mobile="{8:8}">
        <div>偏移8</div>
      </s-col>
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
.grid-demo2 {
  margin-bottom: 10px;
  .s-col:nth-child(odd) {
    > div {
      background-color: rgb(211, 220, 230);
    }
  }

  .s-col:nth-child(even) {
    > div {
      background-color: rgb(248, 248, 249);
    }
  }
}
</style>
