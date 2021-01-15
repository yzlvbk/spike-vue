<demo>
</demo>
<template>
  <div class="icon-demo">
    <s-container style="height: 200px;">
      <s-header style="background: rgb(211, 220, 230);height: 40px;">header</s-header>
      <s-main>main</s-main>
      <s-footer style="background: rgb(211, 220, 230);height: 40px;">footer</s-footer>
    </s-container>
  </div>
</template>

<script lang="ts">
import { sContainer, sFooter, sHeader, sMain, sSider } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sContainer,
    sFooter,
    sHeader,
    sMain,
    sSider
  }
}
</script>

