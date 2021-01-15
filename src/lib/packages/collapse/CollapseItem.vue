<template>
  <div class="s-collapse-item">
    <div class="title" @click="onClick" :class="{selected:selected.indexOf(name)>=0}">
      <s-icon name="arrow-right" class="s-icon"></s-icon>
      <slot name="title"></slot>
    </div>
    <s-spread :visible="selected.indexOf(name)>=0">
      <div class="collapse-content">
        <slot></slot>
      </div>
    </s-spread>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sIcon from '../icon/Icon.vue'
import sSpread from '../spread/Spread.vue'
export default defineComponent({
  name: 'sCollapseItem',
  props: {
    name: { type: String, required: false }
  },
  computed: {
    selected() {
      return this.$parent.selected
    }
  },
  methods: {
    onClick() {
      this.$bus.emit('click-title', this.name)
    }
  },
  components: { sIcon, sSpread }
})
</script>

<style lang='scss' scoped>
@import '../../style/mixni.scss';
.s-collapse-item {
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  > .title {
    border: $borderbase;
    border-bottom: none;
    margin: -1px -1px 0;
    padding: 4px 0 4px 8px;
    background: $bg;
    color: $title;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    > .s-icon {
      margin-right: 15px;
      width: 10px;
      height: 10px;
      transition: transform 0.3s;
    }
    &.selected {
      > .s-icon {
        transform: rotateZ(90deg);
      }
    }
  }

  .collapse-content {
    font-size: 14px;
    padding: 4px 0 4px 8px;
    text-indent: 2em;
    color: $main;
  }
}
</style>