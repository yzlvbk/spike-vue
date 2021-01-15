<template>
  <label class="s-option" @click="handleClick">
    <div class="check-box" :class="{checked:current===index}">
      <transition name="fill-fade">
        <span class="fill" v-show="current===index"></span>
      </transition>
    </div>
    <span class="label-text">{{option.label}}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sOption',
  props: {
    option: { type: Object, required: true },
    current: Number,
    index: Number
  },
  setup(props, { emit }) {

    const handleClick = () => {
      emit('update:current', props.index)
    }
    return { handleClick }
  }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-option {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding-right: 8px;

  > .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid $border;

    > .fill {
      display: inline-flex;
      width: 8px;
      height: 8px;
      background: $p;
      border-radius: 50%;
    }

    &.checked {
      border-color: $p;
    }
  }
  > .label-text {
    padding: 0 8px;
  }
}
.fill-fade-enter-active,
.fill-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.fill-fade-enter-to,
.fill-fade-leave {
  opacity: 1;
  transform: scale(0.85);
}
.fill-fade-enter,
.fill-fade-leave-to {
  opacity: 0;
  transform: scale(0.05);
}
</style>