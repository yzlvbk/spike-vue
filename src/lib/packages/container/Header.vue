<template>
  <div class="s-header" :style="sStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sHeader',
  props: { height: { type: String, default: '60px' } },
  computed: {
    sStyle() {
      return { height: this.height }
    }
  }
}
</script>