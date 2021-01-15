<template>
  <span class="s-icon-wrapper">
    <svg
      class="s-icon"
      aria-hidden="true"
      @click="$emit('click',$event)">
      <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
  </span>
</template>

<script>
import { reactive, toRefs } from 'vue'
import './svg'
export default {
  props: { name: { type: String, required: true } },
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>
.s-icon-wrapper {
  width: 1em;
  height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .s-icon {
    fill: currentColor;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
  }
}
</style>