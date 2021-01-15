<template>
  <div class="s-time-picker" ref="pickerRef">
    <div class="input-wrapper">
      <s-icon name="time" class="icon prefix" style="pointer-events:none;"></s-icon>
      <input type="text" :value="value" @click="pickerVisible = true" @input="input" placeholder="选择时间" />
      <s-icon name="close" class="icon clear" @click="clearValue"></s-icon>
    </div>

    <s-spread class="spread" :visible="pickerVisible" :duration="200">
      <div class="picker-items">

        <div class="item" ref="hourRef">
          <ul class="hour">
            <li v-for="(n,index) in 24" :key="n" @click=" handleClick(index,'hour')" :class="{selected:hour===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

        <div class="item" ref="minuteRef">
          <ul class="minute">
            <li v-for="(n,index) in 60" :key="n" @click=" handleClick(index,'minute')" :class="{selected:minute===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

        <div class="item" ref="secondRef">
          <ul class="second">
            <li v-for="(n,index) in 60" :key="n" @click=" handleClick(index,'second')" :class="{selected:second===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

      </div>
    </s-spread>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed, watch, onMounted, onUnmounted } from 'vue'
import sIcon from '../icon/Icon.vue'
import sSpread from '../spread/Spread.vue'
import tweenScroll from '../../utils/tweenScroll'
export default defineComponent({
  name: 'sTimePicker',
  props: {
    defaultValue: {
      type: String,
      validator(val: string) {
        const pattern = /^([\d]{2}):([\d]{2}):([\d]{2})$/
        if (pattern.test(val)) {
          let hour = +RegExp.$1
          let minute = +RegExp.$2
          let second = +RegExp.$3
          return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59
        }
        return false
      }
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      pickerVisible: true,
      hour: -1,
      minute: -1,
      second: -1
    })

    const pickerRef = ref(null)
    const hourRef = ref(null)
    const minuteRef = ref(null)
    const secondRef = ref(null)

    onMounted(() => {
      // @ts-ignore
      const defaultValue = props.defaultValue
      if (defaultValue) {
        const pattern = /^([\d]{2}):([\d]{2}):([\d]{2})$/
        if (pattern.test(defaultValue)) {
          state.hour = +RegExp.$1
          state.minute = +RegExp.$2
          state.second = +RegExp.$3
          setTimeout(() => {
            hourRef.value.scrollTop = state.hour * 32
            minuteRef.value.scrollTop = state.minute * 32
            secondRef.value.scrollTop = state.second * 32
            state.pickerVisible = false
          }, 0)
        }
      } else {
        state.pickerVisible = false
      }

    })

    const value = computed(() => {
      if (state.hour >= 0 && state.minute >= 0 && state.second >= 0) {
        return `${state.hour > 9 ? state.hour : '0' + state.hour}:${state.minute > 9 ? state.minute : '0' + state.minute}:${state.second > 9 ? state.second : '0' + state.second}`
      } else {
        return ''
      }
    })

    const handleClick = (index, key) => {
      ['hour', 'minute', 'second'].forEach(item => {
        if (item === key) {
          state[key] = index
        } else {
          state[item] = state[item] === -1 ? 0 : state[item]
        }
      })
    }

    const scroll = (ref, target) => {
      tweenScroll(ref, { x: 0, y: target }, 200)
    }

    watch(() => state.pickerVisible, (val) => {
      if (val) {
        document.addEventListener('click', listenDocument)
      } else {
        document.removeEventListener('click', listenDocument)
      }
    })

    watch(() => state.hour, (val) => {
      scroll(hourRef.value, 32 * val)
    })

    watch(() => state.minute, (val) => {
      scroll(minuteRef.value, 32 * val)
    })
    watch(() => state.second, (val) => {
      scroll(secondRef.value, 32 * val)
    })

    watch(value, (val) => {
      emit('change', val)
    })

    const input = (e) => {
      let val = e.target.value
      if (val.length < 8) { return }
      const pattern = /^([\d]{2}):([\d]{2}):([\d]{2})$/
      if (pattern.test(val)) {
        let hour = +RegExp.$1
        let minute = +RegExp.$2
        let second = +RegExp.$3
        if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
          state.hour = hour
          state.minute = minute
          state.second = second
        } else {
          e.target.value = value.value
        }
      } else {
        e.target.value = value.value
      }
    }

    const listenDocument = (e) => {
      if (!pickerRef.value.contains(e.target)) {
        if (!value) {
          state.hour = -1
          state.minute = -1
          state.second = -1
        }
        state.pickerVisible = false
      }
    }

    const clearValue = () => {
      state.hour = -1
      state.minute = -1
      state.second = -1
    }

    onUnmounted(() => {
      document.removeEventListener('click', listenDocument)
    })

    return { ...toRefs(state), value, handleClick, hourRef, minuteRef, secondRef, pickerRef, input, clearValue }
  },
  components: { sIcon, sSpread }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-time-picker {
  position: relative;
  width: 180px;

  > .input-wrapper {
    width: 180px;
    position: relative;

    > input {
      width: 100%;
      height: 32px;
      display: block;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 2px;
      box-shadow: none;
      padding: 0 30px;
      color: rgba(0, 0, 0, 0.65);
      box-sizing: border-box;
      cursor: pointer;
      &:focus {
        outline: none;
        border-color: $p;
      }
      &:hover {
        border-color: $p;
      }
    }

    > .icon {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: $disabled;

      &.prefix {
        left: 5px;
      }

      &.clear {
        opacity: 0;
        right: 5px;
        transition: all 0.2s linear;

        &:hover {
          color: $sub;
        }
      }
    }

    &:hover {
      > .icon {
        &.clear {
          opacity: 1;
        }
      }
    }
  }

  > .spread {
    position: absolute;
    top: 32px;
    box-shadow: 0 2px 12px 0 $border;

    > .picker-items {
      display: flex;
      justify-content: flex-start;
      width: 180px;
      height: 160px;

      > .item {
        width: 60px;
        height: 160px;
        overflow-x: hidden;
        overflow-y: hidden;
        transition: all 0.3s;

        &:hover {
          overflow-y: scroll;
        }

        > ul {
          list-style: none;
          padding: 0 0 128px 0;
          margin: 0;
          border-left: 1px solid $border;
          transition: all 0.3s;

          &.hour {
            border-left: none;
          }

          > li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            transition: all 0.3s;

            cursor: pointer;
            user-select: none;
            font-size: 14px;

            &:hover {
              color: $p;
            }
            &.selected {
              background: #f5f5f5;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>