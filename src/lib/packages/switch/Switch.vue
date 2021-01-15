<template>
  <div class="s-switch">
    <span v-if="falseText" class="switch-left-text">{{falseText}}</span>
    <button ref="core" class="s-switch-core" :class="{checked:value, 'disabled': disabled}" @click="toggle">
      <span class="s-switch-core-inner"></span>
    </button>
    <span v-if="trueText" class="switch-right-text">{{trueText}}</span>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
export default {
  props: {
    value: { type: Boolean, default: false, },
    disabled: { type: Boolean, default: false },
    falseText: { type: String, default: '' },
    trueText: { type: String, default: '' },
    falseColor: { type: String, default: '' },
    trueColor: { type: String, default: '' }
  },
  setup(props, context) {
    const core = ref(null)

    onMounted(() => {
      if (props.trueColor && props.value) core.value.style.background = props.trueColor
      if (props.falseColor && !props.value) core.value.style.background = props.falseColor
    })

    const toggle = () => {
      if (props.disabled) return
      context.emit('update:value', !props.value)
      context.emit('onChange', !props.value)
      if (props.trueColor && !props.value) core.value.style.background = props.trueColor
      if (props.falseColor && props.value) core.value.style.background = props.falseColor
    }
    return {
      core,
      toggle,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
$h: 22px;
$h2: $h - 4px;
.s-switch {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > .switch-left-text {
    margin-right: 3px;
  }
  > .switch-right-text {
    margin-left: 3px;
  }
  .s-switch-core {
    position: relative;
    height: $h;
    width: $h * 2;
    border: none;
    background-color: gray;
    border-radius: $h / 2;
    cursor: pointer;

    > .s-switch-core-inner {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background-color: white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    }

    &.checked {
      background-color: $p;

      > .s-switch-core-inner {
        left: calc(100% - 20px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active .s-switch-core-inner {
      width: $h2 + 4px;
    }

    &.checked:active {
      > .s-switch-core-inner {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
