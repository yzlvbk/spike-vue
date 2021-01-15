<template>
  <div class="s-footer" :style="sStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sFooter',
  props: { height: { type: String, default: '60px' } },
  computed: {
    sStyle() {
      return { height: this.height }
    }
  }
}
</script>