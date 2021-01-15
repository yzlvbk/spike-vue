<demo>
</demo>
<template>
  <div>
    <s-container style="height: 300px;">
      <s-header style="background: rgb(211, 220, 230);">header</s-header>
      <s-container>
        <s-sider width="100px" style="background: rgb(248, 248, 249);">sider</s-sider>
        <s-main>main</s-main>
      </s-container>
      <s-footer style="background: rgb(211, 220, 230);">footer</s-footer>
    </s-container>
  </div>
</template>

<script lang="ts">
import { sContainer, sFooter, sHeader, sMain, sSider } from "spike-vue"
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
