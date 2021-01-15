<template>
  <div class="s-tab">
    <div class="s-tab-header">
      <div class="s-tab-header-title" :class="{'tab-active':activeKey===keys[index]}" v-for="(item,index) in titles"
        :ref="el => {if(el) navItems[index] = el}" :key="item" @click="change(keys[index],$event)">{{ item }}
      </div>
      <div class="s-tab-solid">
        <div class="move-bar" :style="{left:barLeft,width:barWidth}"></div>
      </div>
    </div>
    <div class="s-tab-content">
      <component :is="current" :key="current.props.key"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted } from 'vue'
export default {
  name: 's-tab',
  props: {
    activeKey: {
      type: String
    }
  },
  setup(props, context) {
    let titles = []
    let keys = []
    let contents = []
    let defaultSlots = context.slots.default()

    defaultSlots.map((item, index) => {
      titles.push(item.props.title)
      keys.push(item.props.key)
      contents.push(item)
    })

    //找到当前选中的内容slot
    const current = computed(() => {
      return defaultSlots.filter(tag => tag.props.key === props.activeKey)[0]
    })

    const barLeft = ref<string>('1px')
    const barWidth = ref<string>('10px')
    const change = (activeKey, e) => {
      let target = e.target
      let left = target.offsetLeft
      let width = target.offsetWidth
      barLeft.value = left + 'px'
      barWidth.value = width + 'px'
      context.emit('update:activeKey', activeKey)
    }

    //头部导航表示这个是一个div数组
    const navItems = ref<HTMLDivElement[]>([])

    onMounted(() => {
      //找见当前选中的元素，并获取其宽度给bar设置成初始宽度
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('tab-active'))[0]
      const width = result.offsetWidth
      const left = result.offsetLeft
      barLeft.value = left + 'px'
      barWidth.value = width + 'px'
    })


    return {
      titles,
      keys,
      contents,
      current,
      change,
      barLeft,
      barWidth,
      navItems
    }
  },
}

</script>

<style lang="scss">
@import '../../style/mixni.scss';
.s-tab {
  .s-tab-header {
    color: $title;
    position: relative;

    .s-tab-solid {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background: $border;

      .move-bar {
        position: absolute;
        width: 100px;
        top: 0;
        height: 2px;
        background: $p;
        transition: all 0.25s ease;
      }
    }

    .s-tab-header-title {
      display: inline-block;
      padding: 12px 16px;
      cursor: pointer;
      text-align: center;
      font-size: 14px;
    }

    .tab-active {
      color: $p;
    }
  }
}
</style>
