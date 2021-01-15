<demo>
</demo>
<template>
  <div>
    <s-button primary @click="showModal">打开对话框</s-button>
    <s-modal
      v-model:visible="visible"
      :ok="onOk"
      :cancel="onCancel">
      <template v-slot:title>
        <span class="modal-title-doc">标题</span>
      </template>
      <template v-slot:content>
        <div class="content-doc">展示的内容</div>
      </template>
    </s-modal>
  </div>
</template>

<script lang="ts">
import { sButton, sModal } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sModal,
    sButton
  },
  setup() {
    const visible = ref(false)
    const showModal = () => {
      visible.value = true
    }
    const onOk = () => {
    }
    const onCancel = () => {
    }
    return {
      showModal,
      visible,
      onOk,
      onCancel,
    }
  }
}
</script>
