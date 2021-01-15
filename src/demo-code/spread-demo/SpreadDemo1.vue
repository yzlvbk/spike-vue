<demo>
</demo>
<template>
  <div class="icon-demo">
    <s-button @onClick="isVisibleFn">纵向展开/收起</s-button>
    <s-spread :visible="visible" horizontal>
      <div style="padding: 10px; width: 300px; height:200px; background: rgb(54, 177, 191);"></div>
    </s-spread>
  </div>
</template>

<script lang="ts">
import { sSpread, sButton } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sSpread,
    sButton
  },
  setup() {
    const visible = ref(true)

    const isVisibleFn = () => {
      visible.value = !visible.value
    }

    return { visible, isVisibleFn }
  }
}
</script>
