<template>
  <div>
    <ul class="s-pager" :class="{simple}">

      <li class="num" :class="{disabled:current===1}" @click="onSkip(-1)">
        <s-icon name="arrow-left" class="icon"></s-icon>
      </li>

      <li v-for="(page,index) in pages" :key="index"
        @click="onClickPage(page)"
        :class="{active:page===current,seprator:page==='...'}" class="num">
        <template v-if="page==='...'">
          ...
        </template>
        <template v-else>
          {{page}}
        </template>
      </li>

      <li class="num" :class="{disabled:current===total}" @click="onSkip(1)">
        <s-icon name="arrow-right" class="icon"></s-icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import sIcon from '../icon/Icon.vue'

export default defineComponent({
  name: 'sPager',
  props: {
    total: { type: Number, required: true },
    current: { type: Number, required: true },
    singleHide: { type: Boolean, default: true },
    simple: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const pages = computed(() => {
      let array
      if (props.current <= 4) {
        array = [1, 2, 3, 4, 5, 6, 7, props.total];
      } else if (props.current >= props.total - 3) {
        array = [1, props.total - 6, props.total - 5, props.total - 4, props.total - 3, props.total - 2, props.total - 1, props.total]
      } else {
        array = [1, props.current - 2, props.current - 1, props.current, props.current + 1, props.current + 2, props.total]
      }
      // 数组去重
      array = Array.from(new Set(array))
      let pages = array.reduce((prev, current) => {
        prev.push(current)
        let length = prev.length
        if (prev[length - 2] && current - prev[length - 2] > 1) {
          prev.splice(prev.length - 1, 0, '...')
        }
        return prev
      }, [])
      return pages.filter(n => (n >= 1 && n <= props.total) || n === '...')
    })

    const onSkip = (num) => {
      num === -1 && props.current > 1 ? emit('update:current', props.current - 1) : '';
      num === 1 && props.current < props.total ? emit('update:current', props.current + 1) : '';
    }

    const onClickPage = (page) => {
      page !== '...' ? emit('update:current', page) : ''
    }

    return { pages, onSkip, onClickPage }
  },
  components: { sIcon }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-pager {
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 30px;
  user-select: none;
  height: 30px;

  > .num {
    min-width: 35px;
    height: 100%;
    background: $bg;
    cursor: pointer;
    padding: 2px 0;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:first-child) {
      margin-left: 4px;
    }
    &:hover:not(.seprator) {
      color: $p;
    }
    &.active {
      background: $p;
      color: #fff;
      cursor: default;
      &:hover {
        color: #fff;
      }
    }
    &.seprator {
      cursor: default;
    }
    &.disabled {
      color: $disabled;
      cursor: default;
      &:hover {
        color: $disabled;
      }
    }
  }

  &.simple {
    > .num {
      background: none;
      color: $main;
      &:hover:not(.seprator) {
        color: $p;
      }
      &.active {
        color: $p;
        cursor: default;
      }
      &.disabled {
        color: $disabled;
        cursor: default;
        &:hover {
          color: $disabled;
        }
      }
    }
  }
}
</style>