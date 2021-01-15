<template>
  <div class="s-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide, onMounted } from 'vue'

export default defineComponent({
  name: 'sRow',
  props: {
    gutter: { type: [Number, String] },
    alignPosition: {
      type: String,
      validator(value: string) {
        return ['left', 'center', 'right'].indexOf(value) >= 0
      }
    }
  },
  setup(props, { slots }) {
    // @ts-ignore
    const gutter = props.gutter
    provide("gutter", gutter)

    onMounted(() => {
      let defaultSlots = slots.default()
      defaultSlots.forEach(node => {
        // @ts-ignore
        if (node.type.name !== 'sCol') throw new Error(`s-row的子元素应该全是s-col，否则会影响样式，但你的是${node.type}`)
      })
    })

    const rowStyle = computed(() => {
      if (gutter) {
        return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
      }
    })

    const rowClass = computed(() => {
      // @ts-ignore
      const alignPosition = props.alignPosition
      if (alignPosition) {
        return [alignPosition && `align-${alignPosition}`]
      }
    })

    return { rowStyle, rowClass }
  }
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.s-row {
  display: flex;
  flex-wrap: wrap;
  // box-sizing: border-box;
  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }
}
</style>