<template>
  <div class="s-container" :class="sClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

export default defineComponent({
  name: 'sContainer',
  setup(props, { slots }) {
    const hasSider = ref(false)

    onMounted(() => {
      const defaultSlots = slots.default()
      defaultSlots.forEach(node => {
        // @ts-ignore
        if (node.type.name === 'sSider') {
          hasSider.value = true
        }
      })
    })

    const sClass = computed(() => {
      return {
        ['has-sider']: hasSider.value
      }
    })
    return { sClass }
  }
})
</script>

<style scoped lang="scss">
.s-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.has-sider {
    flex-direction: row;
  }
}
</style>