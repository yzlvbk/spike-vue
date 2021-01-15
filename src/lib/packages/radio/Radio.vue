<template>
  <div class="s-radio" :class="{vertical}">
    <s-option v-for="(option,index) in options" :key="option.value" :option="option" :index="index" v-model:current="current"></s-option>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import sOption from './Option.vue'
export default defineComponent({
  name: "xRadio",
  props: {
    options: { type: Array, required: true },
    vertical: { type: Boolean, default: false },
    defaultIndex: Number
  },
  setup(props, { emit }) {
    const current = ref(-1)
    onMounted(() => {
      props.defaultIndex || props.defaultIndex === 0 ? current.value = props.defaultIndex : -1
    })

    watch(current, () => {
      // @ts-ignore
      emit('value-change', props.options[current.value].value)
    })

    return { current }
  },
  components: { sOption }
})
</script>

<style lang="scss" scoped>
.s-radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.vertical {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>