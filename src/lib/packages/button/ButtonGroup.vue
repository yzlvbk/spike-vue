<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Button from './Button.vue'
export default defineComponent({
  setup(props, context) {
    let defaultSlots = context.slots.default()
    onMounted(() => {
      defaultSlots.forEach(node => {
        // @ts-ignore
        if (node.type.name !== 's-button') throw new Error(`s-button-group的子元素应该全是s-button，否则会影响样式，但你的是${node.type}`)
      })
    })
    return {}
  }
})
</script>

<style lang="scss">
@import '../../style/mixni.scss';
.s-button-group {
  display: inline-block;
  justify-content: center;
  align-items: center;

  > .s-button {
    position: relative;
    border-radius: 0;
    border-left: 1px solid transparent;

    &:hover {
      border-left: 1px solid $p;
    }
    &:focus {
      border-left: 1px solid $p;
      border-right: 1px solid $p;
    }

    &:first-child {
      border-left: $borderbase;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      &:hover {
        border-left-color: $p;
      }
    }

    &:last-child {
      border-right: $borderbase;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      &:hover {
        border-right-color: $p;
      }
    }
  }
}
</style>