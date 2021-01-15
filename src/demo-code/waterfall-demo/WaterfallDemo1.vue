<demo>
</demo>
<template>
  <div>
    <s-waterfall
      :width="150"
      :source="source"
      @scroll-bottom="scrollBottom">
      <template v-slot:default="slotProps">
        <div :style="'height:' + (slotProps.item*20) +'px;' + 'background: rgb(128, 210, 219); margin-bottom: 10px; overflow: hidden;' ">
          <div>slot</div>
          <div>宽度{{slotProps.item}}</div>
        </div>
      </template>
    </s-waterfall>
  </div>
</template>

<script lang="ts">
import { sWaterfall } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sWaterfall
  },
  setup() {
    const source = [1, 2, 5, 8, 3, 13, 7, 4, , 10, 5, 6, 9, 2, 7, 8, 9]

    const scrollBottom = () => {
      console.log('scrollBottom')

    }

    return { source, scrollBottom }
  }
}
</script>
