<template>
  <div class="s-sider" :style="sStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'sSider',
  props: { width: { type: String, default: '300px' } },
  computed: {
    sStyle() {
      return { width: this.width }
    }
  }
}
</script>

<style scoped lang="scss">
.s-sider {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>