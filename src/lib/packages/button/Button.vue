<template>
  <button ref="buttonRef" type="button" class="s-button" :class="{ [`icon-${position}`]: true, wave, primary, normal }" @click="onClick">
    <s-icon v-if="icon && !slefLoading" :name="icon" class="s-icon"></s-icon>
    <s-icon name="loading" v-show="loading && slefLoading" class="s-icon loading"></s-icon>
    <span class="slot-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue"
import sIcon from "../icon/Icon.vue"
export default {
  name: 's-button',
  props: {
    icon: String,
    position: {
      type: String,
      default: "left",
      validator(value) {
        return value === "right" || value === "left";
      },
    },
    primary: { type: Boolean, default: false },
    normal: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const buttonRef = ref(null)
    const state = reactive({ dotVisible: false, wave: false, slefLoading: false })

    onMounted(() => {
      buttonRef.value.addEventListener('animationend', listenAnimation)
    })

    const onClick = (e) => {
      emit('onClick', e)
      if (props.loading) {
        state.slefLoading = !state.slefLoading
      }
      state.wave = true
    }

    const listenAnimation = () => state.wave = false

    return { ...toRefs(state), onClick, buttonRef }
  },
  components: { sIcon }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-button {
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  height: 32px;
  padding: 0 12px;
  color: $main;
  border-radius: 4px;
  background: #fff;
  border: 1px solid;
  border-color: $border;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;

  > .s-icon {
    width: 1em;
    height: 1em;

    &.loading {
      animation: loading-spin 1.3s linear infinite;
    }
  }

  &:hover {
    color: $p;
    border-color: $p;
  }

  &:focus {
    color: $p;
    border-color: $p;
    outline: none;
  }

  &.icon-left {
    > .s-icon {
      order: 1;
      margin-right: 0.1em;
    }

    > .slot-content {
      order: 2;
    }
  }

  &.icon-right {
    > .s-icon {
      order: 2;
      margin-left: 0.1em;
    }

    > .slot-content {
      order: 1;
    }
  }

  &.primary {
    background: $p;
    color: #fff;
    border-color: $p;
  }

  &.normal {
    background: $bg;
  }

  &.wave {
    &::after {
      content: '';
      display: block;
      background: $habg;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      border: 0 solid $p;
      opacity: 0.4;
      animation: after-scale 0.5s linear forwards;
      flex-shrink: 0;
    }
  }

  &::after {
    display: none;
  }
}

@keyframes after-scale {
  to {
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
    opacity: 0;
  }
}

@keyframes loading-spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
