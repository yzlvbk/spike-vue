<template>
  <div class="s-date-picker" ref="pickerRef">
    <div class="input-wrapper">
      <input type="text" :value="value" @click="pickerVisible = true" @change="inputChange" autocomplete="off" placeholder="选择日期">
      <s-icon name="date" class="icon prefix"></s-icon>
      <s-icon name="close" class="icon clear" v-if="value" @click="value=''"></s-icon>
    </div>

    <s-spread class="spread" :visible="pickerVisible" :duration="200" ref="pickerRef">
      <div class="picker">
        <div class="action-bar">

          <div class="icons">
            <s-icon name="shuangjiantou-zuo" class="icon double-arrow" @click="handleDoubleNext(-1)"></s-icon>
            <s-icon name="arrow-left" class="icon" @click="changeMonth(-1)" v-show="dateListVisible"></s-icon>
          </div>

          <div class="time">
            <span class="year" @click="showList('yearListVisible')" v-show="dateListVisible||monthListVisible">{{year}}年</span>
            <span class="month" @click="showList('monthListVisible')" v-show="dateListVisible">{{month}}月</span>
            <span class="year-area" v-show="yearListVisible">{{yearArray[1]+'-'+yearArray[10]}}</span>
          </div>

          <div class="icons">
            <s-icon name="arrow-right" class="icon" @click="changeMonth(1)" v-show="dateListVisible"></s-icon>
            <s-icon name="shuangjiantou-you" class="icon double-arrow" @click="handleDoubleNext(1)"></s-icon>
          </div>

        </div>

        <div class="picker-body" v-show="dateListVisible">
          <div class="days">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
          </div>
          <div class="dates">
            <div class="row">
              <span v-for="n in dateArray.slice(0,7)" :key="n" :class="{selected:date===n&&n<8,sub:n>7,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value&&n<8}" @click="changeDate(n,'first')">{{n}}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(7,14)" :key="n" :class="{selected:date===n,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value}" @click="changeDate(n)">{{n}}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(14,21)" :key="n" :class="{selected:date===n,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value}" @click="changeDate(n)">{{n}}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(21,28)" :key="n" :class="{selected:date===n,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value}" @click="changeDate(n)">{{n}}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(28,35)" :key="n" :class="{selected:date===n&&n>22,sub:n<15,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value&&n>22}" @click="changeDate(n,'last')">{{n}}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(35,42)" :key="n" :class="{selected:date===n&&n>22,sub:n<15,value:`${year}-${month>9?month:'0'+month}-${n>9?n:'0'+n}`===value&&n>22}" @click="changeDate(n,'last')">{{n}}</span>
            </div>
          </div>
        </div>

        <div class="today" v-show="dateListVisible">
          <span @click="onClickToday">今天</span>
        </div>

        <div class="month-list" v-show="monthListVisible">
          <div class="row">
            <span :class="{selected:month===1}" @click="setMonth(1)">一月</span>
            <span :class="{selected:month===2}" @click="setMonth(2)">二月</span>
            <span :class="{selected:month===3}" @click="setMonth(3)">三月</span>
          </div>
          <div class="row">
            <span :class="{selected:month===4}" @click="setMonth(4)">四月</span>
            <span :class="{selected:month===5}" @click="setMonth(5)">五月</span>
            <span :class="{selected:month===6}" @click="setMonth(6)">六月</span>
          </div>
          <div class="row">
            <span :class="{selected:month===7}" @click="setMonth(7)">七月</span>
            <span :class="{selected:month===8}" @click="setMonth(8)">八月</span>
            <span :class="{selected:month===9}" @click="setMonth(9)">九月</span>
          </div>
          <div class="row">
            <span :class="{selected:month===10}" @click="setMonth(10)">十月</span>
            <span :class="{selected:month===11}" @click="setMonth(11)">十一月</span>
            <span :class="{selected:month===12}" @click="setMonth(12)">十二月</span>
          </div>
        </div>

        <div class="year-list" v-show="yearListVisible">
          <div class="row">
            <span v-for="n in yearArray.slice(0,3)" :key="n" @click="setYear(n)" :class="{sub:n<yearAreaBase,selected:year===n}">{{n}}</span>
          </div>
          <div class="row">
            <span v-for="n in yearArray.slice(3,6)" :key="n" @click="setYear(n)" :class="{selected:year===n}">{{n}}</span>
          </div>
          <div class="row">
            <span v-for="n in yearArray.slice(6,9)" :key="n" @click="setYear(n)" :class="{selected:year===n}">{{n}}</span>
          </div>
          <div class="row">
            <span v-for="n in yearArray.slice(9,12)" :key="n" @click="setYear(n)" :class="{sub:n>yearAreaBase+9,selected:year===n}">{{n}}</span>
          </div>
        </div>

      </div>
    </s-spread>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch, onMounted, ref, onBeforeUnmount } from 'vue'
import sIcon from '../icon/Icon.vue'
import sSpread from '../spread/Spread.vue'
export default defineComponent({
  name: 'sDatePicker',
  props: {
    defaultValue: {
      type: String,
      validator(val: string) {
        return !isNaN(Date.parse(val))
      }
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      value: '',
      pickerVisible: false,
      year: 0,
      month: 0,
      date: 0,
      dateListVisible: true,
      monthListVisible: false,
      yearListVisible: false,
      centuryListVisible: false,
      yearAreaBase: 0,
      century: 0
    })

    onMounted(() => {
      // @ts-ignore
      const defaultValue = props.defaultValue
      if (!isNaN(Date.parse(defaultValue))) {
        setValue(defaultValue)
        setDate(defaultValue)
      } else {
        setDate('')
      }
    })

    // 日期数组
    const dateArray = computed(() => {
      let currentMonthLength = new Date(state.year, state.month, 0).getDate()
      let list = Array.from({ length: currentMonthLength },
        (val, index) => index + 1
      )
      //星期天为0
      let startDay = new Date(`${state.year}-${state.month}-01`).getDay()
      let prevMonthLength = new Date(state.year, state.month - 1, 0).getDate()
      for (let i = 0; i < startDay; i++) {
        list.unshift(prevMonthLength - i)
      }
      let space = 42 - list.length
      for (let i = 0; i < space; i++) {
        list.push(i + 1)
      }
      return list
    })

    // 年数组
    const yearArray = computed(() => {
      return Array.from({ length: 12 },
        (val, index) => state.yearAreaBase - 1 + index
      )
    })

    const setValue = (str) => {
      if (str) {
        let time = new Date(str)
        let year = time.getFullYear()
        let month: any = time.getMonth() + 1
        let date: any = time.getDate()
        month = month > 9 ? month : `0${month}`
        date = date > 9 ? date : `0${date}`
        state.value = `${year}-${month}-${date}`
      } else {
        let tempMonth = state.month > 9 ? state.month : `0${state.month}`
        let tempDate = state.date > 9 ? state.date : `0${state.date}`
        state.value = `${state.year}-${tempMonth}-${tempDate}`
      }
    }

    const setMonth = (month) => {
      state.month = month
      showList('dateListVisible')
    }

    const setYear = (n) => {
      if (n < state.yearAreaBase) {
        // 延迟0s，否则监听点击事件为false，会关闭datePicker
        setTimeout(() => {
          state.yearAreaBase -= 10
        }, 0)
      } else if (n > state.yearAreaBase + 9) {
        setTimeout(() => {
          state.yearAreaBase += 10
        }, 0)
      } else {
        state.year = n
        showList('dateListVisible')
      }
    }

    const setDate = (str) => {
      if (str) {
        let time = new Date(str)
        state.year = time.getFullYear()
        state.month = time.getMonth() + 1
        state.date = time.getDate()
      } else {
        const today = new Date()
        state.year = today.getFullYear()
        state.month = today.getMonth() + 1
        state.date = today.getDate()
      }
    }

    const changeDate = (n, tag) => {
      if (tag === 'first' && n > 7) {
        changeMonth(-1)
      } else if (tag === 'last' && n < 15) {
        changeMonth(1)
      }
      state.date = n
      setValue('')
      state.pickerVisible = false
    }

    const changeMonth = (payload) => {
      if (state.month + payload === 13) {
        state.month = 1
        state.year += 1
      } else if (state.month + payload === 0) {
        state.month = 12
        state.year -= 1
      } else {
        state.month += payload
      }
    }

    const showList = (name) => {
      const keys = [
        'dateListVisible',
        'monthListVisible',
        'yearListVisible',
        'centuryListVisible'
      ]
      keys.forEach(key => {
        if (key === name) {
          state[key] = true
        } else {
          state[key] = false
        }
      })
    }

    const inputChange = (e) => {
      let value = e.target.value
      if (!isNaN(Date.parse(value))) {
        setValue(value)
        state.pickerVisible = false
      }
    }

    const onClickToday = () => {
      setDate('')
      setValue('')
      state.pickerVisible = false
    }

    const handleDoubleNext = (payload) => {
      //不同显示状态下，双箭头修改不同值
      if (state.yearListVisible) {
        state.yearAreaBase += payload * 10
      } else if (state.dateListVisible) {
        state.year += payload
      }
    }

    const pickerRef = ref(null)
    const listenDocument = (e) => {
      if (!pickerRef.value.contains(e.target)) {
        //点击别处关闭且无value，将数据初始化
        if (!state.value) {
          state.yearAreaBase = 0
          // @ts-ignore
          setDate(state.defaultValue)
        } else {
          setDate(state.value)
        }
        state.pickerVisible = false
      }
    }

    watch(() => state.yearListVisible, (val) => {
      if (val) {
        //已有，则不赋值
        state.yearAreaBase = state.yearAreaBase || Math.floor(state.year / 10) * 10
      }
    })

    watch(() => state.pickerVisible, (val) => {
      if (val) {
        document.addEventListener('click', listenDocument)
      } else {
        document.removeEventListener('click', listenDocument)
      }
    })

    watch(() => state.value, (val) => {
      emit('change', val)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', listenDocument)
    })

    return { ...toRefs(state), dateArray, yearArray, changeDate, showList, setMonth, setYear, setDate, inputChange, onClickToday, pickerRef, changeMonth, handleDoubleNext }
  },
  components: { sIcon, sSpread }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-date-picker {
  width: 280px;

  > .input-wrapper {
    width: 280px;
    height: 32px;
    position: relative;

    > input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      border: 1px solid $border;
      border-radius: 2px;
      color: $main;
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
      color: $disabled;

      &.prefix {
        left: 5px;
      }

      &.clear {
        cursor: pointer;
        right: 5px;
      }

      &:hover {
        &.clear {
          color: $main;
        }
      }
    }
  }

  > .spread {
    margin-top: 10px;
    box-shadow: 0 2px 8px $border;

    > .picker {
      position: relative;
      height: 315px;
      padding: 0 1px;
      box-sizing: border-box;
      color: $main;
      background: #fff;

      > .action-bar {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $border;
        user-select: none;

        > .time {
          > span {
            cursor: pointer;
            font-weight: 600;

            &:hover {
              color: $p;
            }

            &.year-area {
              color: $main;
              cursor: default;
            }
          }
        }

        > .icons {
          display: flex;
          align-items: center;
          padding: 0 10px;

          > .icon {
            width: 12px;
            height: 12px;
            cursor: pointer;
            margin-right: 5px;
            &:hover {
              color: $p;
            }

            &.double-arrow {
              width: 22px;
              height: 22px;
            }
          }
        }
      }

      > .picker-body {
        padding: 0 12px;

        > .days {
          height: 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          > span {
            display: inline-flex;
            width: 26px;
            height: 26px;
            justify-content: center;
            align-items: center;
            cursor: default;
            user-select: none;
          }
        }

        > .dates {
          > .row {
            height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > span {
              display: inline-flex;
              width: 26px;
              height: 26px;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              user-select: none;
              font-size: 12px;

              &:hover {
                color: $p;
              }

              &.selected {
                color: $p;
              }

              &.sub {
                color: rgba(0, 0, 0, 0.25);
              }
              &.value {
                background: $p;
                color: rgba(255, 255, 255, 0.85);
                border-radius: 50%;
              }
            }
          }
        }
      }

      > .today {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin-top: 5px;
        border-top: 1px solid $border;
        color: $p;

        > span {
          padding: 5px;
          cursor: pointer;
          user-select: none;
          font-size: 14px;
        }
      }

      > .month-list,
      > .year-list {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 275px;
        padding: 0 25px;

        > .row {
          display: flex;
          justify-content: space-between;
          align-items: center;

          > span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 24px;
            cursor: pointer;
            background: #fff;
            font-size: 14px;
            border-radius: 2px;
            user-select: none;

            &:hover {
              color: $p;
            }
            &.selected {
              background-color: #dff2f2;
            }
            &.sub {
              color: rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
    }
  }
}
</style>