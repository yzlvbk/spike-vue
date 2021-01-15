<template>
  <div class="s-cascader">
    <div class="selected" @click="showOptions" :class="{active:optionsVisible}">
      <div class="value">{{addr}}</div>
      <s-icon name="close" v-if="clearable" class="s-icon close" v-show="selected.length" @click.stop="clearSelected"></s-icon>
      <s-icon name="arrow-left" v-else class="s-icon" :class="{active:optionsVisible}"></s-icon>
    </div>
    <div class="cascader-options" :class="{optionsVisible}">
      <s-cascader-item :source="source" :selected="selected" @update="onUpdate" @closeOptions="closeOptions"></s-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import sIcon from '../icon/Icon.vue'
import sCascaderItem from './CascaderItem.vue'
export default defineComponent({
  props: {
    source: { type: Object },
    selected: { type: Array, default: () => [] },
    clearable: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const optionsVisible = ref(false)

    const addr = computed(() => {
      return props.selected.join('/')
    })

    const showOptions = () => {
      optionsVisible.value = !optionsVisible.value
    }

    const closeOptions = () => {
      optionsVisible.value = false
    }

    const onUpdate = (obj) => {
      let copy = [...props.selected]
      copy[obj.level] = obj.label
      copy = copy.slice(0, obj.level + 1)
      emit('update:selected', copy)
    }

    const clearSelected = () => {
      emit('update:selected', [])
      closeOptions()
    }

    return { optionsVisible, showOptions, addr, onUpdate, closeOptions, clearSelected }
  },
  methods: {
    listenDocument(e) {
      if (!this.$el.contains(e.target)) {
        this.closeOptions()
      }
    }
  },

  watch: {
    optionsVisible(val) {
      if (val) {
        document.addEventListener('click', this.listenDocument);
      } else {
        document.removeEventListener('click', this.listenDocument);
      }
    }
  },
  components: { sIcon, sCascaderItem },

  beforeDestroy() {
    document.removeEventListener('click', this.listenDocument);
  }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-cascader {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  color: $main;
  font-size: 14px;

  > .selected {
    cursor: pointer;
    position: relative;
    width: 300px;
    border-radius: 4px;
    border: $borderbase;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border: 1px solid $disabled;
    }

    &.active {
      border: 1px solid $p;
    }

    > .value {
      height: 30px;
      padding: 5px;
      // border: $borderbase;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
      user-select: none;
    }

    > .s-icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%) rotateZ(-90deg);
      transition: all 0.3s;
      color: $sub;
      &.active {
        transform: translateY(-50%) rotateZ(90deg);
        transition: all 0.3s;
      }
      &.close {
        border-radius: 50%;
        width: 18px;
        height: 18px;

        &:hover {
          color: $p;
        }
      }
    }
  }

  > .cascader-options {
    position: absolute;
    top: 100%;
    z-index: 10;
    margin-top: 10px;
    border: $borderbase;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.optionsVisible {
      opacity: 1;
    }
  }
}
</style>