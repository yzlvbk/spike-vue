<template>
  <div class="s-popover" ref="popoverRef">
    <div ref="contentWrapperRef" v-show="visible" :class="{[`${position}`]:true}" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span class="trigger" ref="triggerRef">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'
interface Props {
  position: string
  trigger: string
}

export default defineComponent({
  name: 'sPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value: string) {
        return ['top', 'right', 'left', 'bottom'].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value: string) {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    }
  },
  setup(props: Props) {
    const popoverRef = ref(null)
    const contentWrapperRef = ref(null)
    const triggerRef = ref(null)
    const visible = ref(false)

    const openEvent = computed(() => {
      props.trigger === 'click' ? 'click' : 'mouseenter'
    })

    const closeEvent = computed(() => {
      props.trigger === 'click' ? 'click' : 'mouseenter'
    })

    onMounted(() => {
      let popover = popoverRef.value
      if (props.trigger === 'click') {
        popover.addEventListener('click', onClick);
      } else {
        popover.addEventListener('mouseenter', open);
        popover.addEventListener('mouseleave', close);
      }
    })

    const onClick = (e) => {
      if (triggerRef.value.contains(e.target)) {
        visible.value === true ? close() : open()
      }
    }

    const open = () => {
      visible.value = true
      nextTick(() => {
        positionContent();
        document.addEventListener('click', onClickDocument)
      })
    }

    const close = () => {
      let content = contentWrapperRef.value
      document.body.removeChild(content)
      visible.value = false
      document.removeEventListener('click', onClickDocument)
    }

    const positionContent = () => {
      let content = contentWrapperRef.value
      document.body.appendChild(content)
      let { top, left, bottom, right, height, width } = triggerRef.value.getBoundingClientRect()
      if (props.position === 'top') {
        content.style.top = `${top + window.scrollY}px`;
        content.style.left = `${left + window.scrollX}px`;
      } else if (props.position === 'bottom') {
        content.style.top = `${top + height + window.scrollY}px`;
        content.style.left = `${left + window.scrollX}px`;
      } else if (props.position === 'left') {
        content.style.top = `${top + height / 2 + window.scrollY}px`;
        content.style.left = `${left + window.scrollX}px`;
      } else if (props.position === 'right') {
        content.style.top = `${top + height / 2 + window.scrollY}px`;
        content.style.left = `${left + width + window.scrollX}px`;
      }
    }

    const onClickDocument = (e) => {
      if (!contentWrapperRef.value.contains(e.target) && !triggerRef.value.contains(e.target)) {
        close()
      }
    }

    return { visible, popoverRef, contentWrapperRef, triggerRef }
  }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-popover {
  display: inline-block;
  vertical-align: top;

  > .trigger {
    display: inline-block;
    vertical-align: top;
  }
}
.content-wrapper {
  border: $borderbase;
  border-color: $p;
  border-radius: 4px;
  background: #fff;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  position: absolute;
  z-index: 25;
  cursor: default;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    position: absolute;
  }

  &.top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      top: 100%;
      border-top-color: $p;
      left: 10px;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: #fff;
      left: 10px;
    }
  }

  &.bottom {
    margin-top: 10px;
    &::before {
      bottom: 100%;
      border-top: none;
      border-bottom-color: $p;
      left: 10px;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-top: none;
      border-bottom-color: #fff;
      left: 10px;
    }
  }

  &.left {
    transform: translateX(-100%) translateY(-50%);
    margin-left: -10px;
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
      border-left-color: $p;
    }
    &::after {
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
      border-left-color: #fff;
    }
  }

  &.right {
    margin-left: 10px;
    transform: translateY(-50%);
    &::before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
      border-right-color: $p;
    }
    &::after {
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
      border-right-color: #fff;
    }
  }
}
</style>