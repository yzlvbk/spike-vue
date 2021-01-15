<demo>
</demo>
<template>
  <div>
    <s-row class="grid-demo3" gutter="10">
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>

      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        <div>内容</div>
      </s-col>

    </s-row>
  </div>
</template>

<script lang="ts">
import { sCol, sRow } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sCol,
    sRow
  }
}
</script>

<style lang="scss" scoped>
.grid-demo3 {
  .s-col:nth-child(odd) {
    margin-bottom: 10px;
    > div {
      background-color: rgb(211, 220, 230);
    }
  }

  .s-col:nth-child(even) {
    margin-bottom: 10px;
    > div {
      background-color: rgb(248, 248, 249);
    }
  }
}
</style>
