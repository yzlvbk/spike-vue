<template>
  <div class="s-cascader-item">
    <div class="item-wrapper" v-if="source.children&&source.children.length">
      <div class="s-item" v-for="item in source.children" :key="item.value">
        <div class="s-label" @click="onClick(item)" :class="{active:selected.indexOf(item.label)>-1}">
          <span>{{item.label}}</span>
          <s-icon name="arrow-right" class="x-icon" v-if="item.children"></s-icon>
        </div>
      </div>

    </div>

    <div class="children-wrapper">
      <s-cascader-item class="children-item"
        :source="childrenItem" :level="level+1"
        v-if="childrenItem&&childrenItem.children&&selected.indexOf(childrenItem.label)>-1"
        :selected="selected"
        @update="onUpdate"
        @closeOptions="closeOptions"></s-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sIcon from '../icon/Icon.vue'
export default defineComponent({
  name: 'sCascaderItem',
  props: {
    source: { type: Object },
    selected: { type: Array, default: () => [] },
    level: { type: Number, default: 0 }
  },
  setup(props, { emit }) {
    const childrenItem = ref(null)
    // 如果selected中有默认项，将下一级赋值给childrenItem
    if (props.selected[props.level]) {
      let childArry = props.source.children.filter(child => child.label === props.selected[props.level])
      childrenItem.value = childArry[0]
    }

    const onClick = (item) => {
      childrenItem.value = item
      emit('update', { label: item.label, level: props.level });
      if (!props.source.children[0].children) {
        emit('closeOptions')
      }
    }

    const onUpdate = (obj) => {
      emit('update', obj)
    }

    const closeOptions = () => {
      emit('closeOptions')
    }

    return { childrenItem, onClick, onUpdate, closeOptions }
  },
  components: { sIcon }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-cascader-item {
  position: relative;
  display: flex;
  cursor: pointer;
  background: #fff;

  > .item-wrapper {
    > .s-item {
      width: 100px;
      > .s-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.1em 0.2em;

        > span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          user-select: none;
        }

        > .s-icon {
          margin-left: auto;
          flex-shrink: 0;
          color: $sub;
        }
        &.active {
          background: $bg;
          color: $p;
        }
        &:hover {
          background: $bg;
        }
      }
    }
  }
}
</style>