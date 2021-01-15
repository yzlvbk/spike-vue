<template>
  <div class="sticky-wrapper" ref="stickyWrapRef">
    <div class="s-sticky" ref="stickyRef" :class="{sticky}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'sSticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const stickyRef = ref(null)
    const stickyWrapRef = ref(null)
    const sticky = ref(false)
    const topDistance = ref(0)

    onMounted(() => {
      let { top } = stickyRef.value.getBoundingClientRect()
      topDistance.value = top + window.scrollY
      window.addEventListener('scroll', scrollHandle)
    })

    const scrollHandle = () => {
      if (window.scrollY > topDistance.value - props.distance) {
        let { width, height, left } = stickyRef.value.getBoundingClientRect()
        stickyWrapRef.value.style.width = width + 'px'
        stickyWrapRef.value.style.height = height + 'px'
        stickyRef.value.style.width = width + 'px'
        stickyRef.value.style.height = height + 'px'
        stickyRef.value.style.top = props.distance + 'px'
        stickyRef.value.style.left = left + 'px'
        sticky.value = true
      } else {
        sticky.value = false
      }
    }

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollHandle)
    })

    return { stickyRef, stickyWrapRef, sticky }
  }
})
</script>

<style lang="scss" scoped>
.sticky-wrapper {
  width: 100%;
  > .s-sticky {
    width: 100%;
    height: 100%;
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
}
</style>