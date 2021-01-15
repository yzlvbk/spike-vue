<template>
  <div class="s-waterfall" ref="waterfallRef">
    <template v-if="col&&source&&source.length">
      <div class="box" v-for="(n,index) in col" :key="index" ref="boxRef">
      </div>
      <div class="item" ref="itemRef" v-for="(item,index) in source" :key="`item-${index}`">
        <slot :item="item"></slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted, nextTick, onUnmounted, watch } from 'vue'

export default defineComponent({
  name: 'sWaterfall',
  props: {
    width: {
      type: Number,
      default: 200
    },
    source: { type: Array, required: true },
    target: String || HTMLElement
  },
  setup(props, { emit }) {
    const waterfallRef = ref(null)
    const boxRef = ref(null)
    const itemRef = ref(null)

    const state = reactive({
      col: 0,
      gutter: 0,
      heightArray: null,
      dom: null
    })

    onMounted(() => {
      resize()
      if (props.target) {
        typeof props.target === 'string' ? state.dom = document.querySelector(props.target) : state.dom = props.target
        state.dom.addEventListener('scroll', listenScroll)
      } else {
        window.addEventListener('scroll', listenScroll)
      }
      window.addEventListener('resize', resize)
    })

    const resize = () => {
      waterfallRef.value.style.width = 'auto'
      const { width: mainWidth } = waterfallRef.value.getBoundingClientRect()
      waterfallRef.value.style.width = mainWidth + 'px'
      state.col = Math.floor(mainWidth / props.width) // 计算分多少列
      if (state.col === 1) {
        state.gutter = (mainWidth - props.width) / 2
      } else {
        state.gutter = (mainWidth - props.width * state.col) / (state.col - 1) //空隙
      }
      state.heightArray = Array(state.col).fill(0)

      nextTick(() => {
        const boxDivs = document.querySelectorAll('.box')
        const itemDivs = document.querySelectorAll('.item')
        boxDivs.forEach(el => {
          // @ts-ignore
          el.style.width = props.width + 'px'
        })
        itemDivs.forEach(el => {
          // @ts-ignore
          const style = el.style
          style.width = props.width + 'px'
          let minH = Math.min.apply(undefined, state.heightArray)
          let index = state.heightArray.indexOf(minH)
          let { height } = el.getBoundingClientRect()
          style.top = minH + 'px'
          if (state.col === 1) {
            style.left = state.gutter + 'px'
          } else {
            style.left = state.gutter * index + props.width * index + 'px'
          }
          // @ts-ignore
          boxDivs[index].style.height = (minH + height) + 'px'
          state.heightArray[index] = height + minH
        })
      })
    }

    const listenScroll = () => {
      let scrollHeight
      let scrollTop
      let clientHeight
      if (props.target) {
        scrollHeight = state.dom.scrollHeight
        scrollTop = state.dom.scrollTop
        clientHeight = state.dom.clientHeight
      } else {
        scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      }
      if (scrollHeight - scrollTop < clientHeight + 10) {
        emit('scroll-bottom')
        props.target ? state.dom.removeEventListener('scroll', listenScroll) :
          window.removeEventListener('scroll', listenScroll)
      }
    }

    watch(() => props.source, () => {
      resize()
      props.target ? state.dom.removeEventListener('scroll', listenScroll) :
        window.removeEventListener('scroll', listenScroll)
      props.target ? state.dom.addEventListener('scroll', listenScroll) :
        window.addEventListener('scroll', listenScroll)
    })

    onUnmounted(() => {
      props.target ? state.dom.removeEventListener('scroll', listenScroll) :
        window.removeEventListener('scroll', listenScroll)
      window.removeEventListener('resize', resize)
    })

    return { ...toRefs(state), waterfallRef, boxRef, itemRef }
  }
})
</script>

<style lang="scss" scoped>
.s-waterfall {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  > .box {
    flex-shrink: 0;
  }
  > .item {
    width: 200px;
    position: absolute;
  }
}
</style>