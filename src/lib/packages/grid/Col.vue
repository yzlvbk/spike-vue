<template>
  <div class="s-col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'

export default defineComponent({
  name: 'sCol',
  props: {
    mobile: { type: Object },
    ipad: { type: Object },
    npc: { type: Object },
    pc: { type: Object },
    wpc: { type: Object }
  },
  setup(props) {
    const gutter: any = inject("gutter") || 0

    const getScale = (type, obj) => {
      let array = Object.entries(obj)[0]
      let span = +array[0];
      let offset = +array[1];
      let visible = '';
      if (span === 0) {
        visible = `${type}-visible-false`
      } else {
        visible = `${type}-visible-true`
      }
      return [`${type}-col-${span}`, offset && `${type}-offset-${offset}`, visible]
    }

    const colClasses = computed(() => {
      let mobile = []
      let ipad = []
      let npc = []
      let pc = []
      let wpc = []

      if (props.mobile) {
        mobile = getScale('mobile', props.mobile);
      }
      if (props.ipad) {
        ipad = getScale('ipad', props.ipad);
      }
      if (props.npc) {
        npc = getScale('npc', props.npc);
      }
      if (props.pc) {
        pc = getScale('pc', props.pc);
      }
      if (props.wpc) {
        wpc = getScale('wpc', props.wpc);
      }
      return [...mobile, ...ipad, ...npc, ...pc, ...wpc];
    })

    const colStyle = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
    })

    return { colClasses, colStyle }
  }
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.s-col {
  $class-prefix: mobile-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: mobile-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

  &.mobile-visible-true {
    display: block;
  }
  &.mobile-visible-false {
    display: none;
  }

  @media (min-width: 577px) {
    $class-prefix: ipad-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.ipad-visible-true {
      display: block;
    }
    &.ipad-visible-false {
      display: none;
    }
  }

  @media (min-width: 769px) {
    $class-prefix: npc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: npc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.npc-visible-true {
      display: block;
    }
    &.npc-visible-false {
      display: none;
    }
  }

  @media (min-width: 993px) {
    $class-prefix: pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.pc-visible-true {
      display: block;
    }
    &.pc-visible-false {
      display: none;
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: wpc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: wpc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.wpc-visible-true {
      display: block;
    }
    &.wpc-visible-false {
      display: none;
    }
  }
}
</style>