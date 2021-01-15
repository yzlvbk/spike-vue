<template>
  <div class="s-textarea-wrapper" v-if="type==='textarea'">
    <textarea :style="textAreaStyle" :value="value" @change="$emit('change',$event)" @input="onInput" @focus="$emit('focus',$event)" @blur="$emit('blur',$event)"></textarea>
  </div>
  <div class="s-input" :class="{error,disabled}" v-else>
    <s-icon v-if="icon" :name="icon" class="icon" :class="{focus:focus||value}"></s-icon>
    <s-icon name="error" class="error"></s-icon>
    <input ref="inputRef"
      :type="type"
      @focus="onFocus"
      @blur="onBlur"
      :value="value"
      @input="onInput"
      @change="onChange"
      :placeholder="placeholder"
      :class="{['no-icon']:!icon}">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import sIcon from '../icon/Icon.vue'
export default defineComponent({
  props: {
    placeholder: String,
    value: String,
    icon: String,
    type: { type: String, default: 'text' },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    resize: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const focus = ref(false)
    const inputRef = ref(null)

    const textAreaStyle = computed(() => props.resize ? { resize: 'auto' } : { resize: 'none' })

    const onFocus = (e) => {
      if (props.disabled) return inputRef.value.blur()
      focus.value = true
      emit('focus', e)
    }

    const onBlur = (e) => {
      if (props.disabled) return
      focus.value = false
      emit('blur', e)
    }

    const onInput = (e) => {
      emit('input', e.target.value)
      emit('update:value', e.target.value)
    }

    const onChange = (e) => {
      emit('change', e.target.value)
    }

    return { focus, inputRef, onFocus, onBlur, onInput, onChange, textAreaStyle }
  },
  components: { sIcon }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-input {
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: $main;

  > .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    pointer-events: none;
    color: $sub;
    &.focus {
      color: $main;
    }
  }

  > .error {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    color: $error;
    pointer-events: none;
    display: none;
  }

  > input {
    width: 100%;
    height: 100%;
    display: inline-block;
    border: 1px solid $border;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 0 5px 0 30px;
    color: inherit;

    &.no-icon {
      padding: 0 5px;
    }
    &:focus {
      outline: none;
      border-color: $p;
    }
    &:hover {
      border-color: $p;
    }
  }

  &.disabled {
    > input {
      cursor: not-allowed;
      user-select: none;
      opacity: 0.5;
      &:focus {
        outline: none;
        border-color: $border;
      }
      &:hover {
        border-color: $border;
      }
    }
  }

  &.error {
    > .error {
      display: inline-flex;
    }
    > input {
      border: 1px solid $error;
    }
  }
}

.s-textarea-wrapper {
  width: 100%;

  > textarea {
    width: 100%;
    height: 100%;
    resize: none;
    padding: 0.5em 0.5em;
    border: 1px solid $border;
    border-radius: 4px;
    color: $main;
    font-size: 14px;
    &:hover {
      border-color: $p;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 0 1px $disabled;
    }
  }
}
</style>