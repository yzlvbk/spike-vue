<template>
  <div class="s-collapse">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'

export default {
  name: 'sCollapse',
  props: {
    selected: { type: Array, default: [] },
    multiple: { type: Boolean, default: false }
  },
  created() {
    this.$bus.on('click-title', (name) => {
      if (this.multiple) {
        let array = [...this.selected]
        let index = array.indexOf(name)
        if (index === -1) {
          array.push(name);
        } else {
          array.splice(index, 1)
        }
        this.$emit('update:selected', array)
        console.log(array);
      } else {
        let array = [...this.selected];
        if (array.indexOf(name) === -1) {
          array = [name]
        } else {
          array = []
        }
        this.$emit('update:selected', array);
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-collapse {
  border: $borderbase;
  border-radius: 4px;
  cursor: pointer;
}
</style>