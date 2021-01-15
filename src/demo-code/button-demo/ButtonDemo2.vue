<demo>
</demo>
<template>
  <div>
    <s-button-group>
      <s-button>选项一</s-button>
      <s-button>选项二</s-button>
      <s-button>选项三</s-button>
      <s-button>选项四</s-button>
    </s-button-group>
  </div>
</template>

<script lang="ts">
import { sButton, sButtonGroup } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sButton,
    sButtonGroup
  }
}
</script>

