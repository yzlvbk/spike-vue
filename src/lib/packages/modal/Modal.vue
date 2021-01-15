<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="s-modal">
        <div class="s-modal-wrapper" :style="styles">
          <div class="s-modal-header">
            <slot name="title" />
            <s-icon class="icon close" name="close" @click="close"></s-icon>
          </div>

          <div class="s-modal-content">
            <slot name="content" />
          </div>

          <div class="s-modal-footer">
            <s-button size="mini" style="margin-right: 10px" @click="cancel">取消</s-button>
            <s-button size="mini" theme="primary" @click="ok">确认</s-button>
          </div>

        </div>
      </div>
    </Teleport>
  </template>
</template>


<script lang="ts">
import sButton from "../button/Button.vue"
import sIcon from '../icon/Icon.vue'

export default {
  name: 'sModal',
  components: { sButton, sIcon },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '100px'
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const styles = {
      width: props.width,
      marginTop: props.top
    }
    const close = () => {
      context.emit('update:visible', false)
    }

    const cancel = () => {
      if (props.cancel && props.cancel() !== false)
        close()
    }

    const ok = () => {
      if (props.ok && props.ok() !== false)
        close()
    }


    return {
      styles,
      cancel,
      ok,
      close
    }
  }
}
</script>


<style lang="scss">
@import '../../style/mixni.scss';
.s-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .s-modal-wrapper {
    width: 50%;
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    margin-top: 100px;

    .s-modal-header {
      padding: 20px 20px 10px;
      position: relative;
      color: $title;

      .close {
        fill: #909399;
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 10px;
        width: 36px;
        height: 36px;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
          color: $p;
        }
      }
    }

    .s-modal-content {
      padding: 30px 20px;
      color: $main;
      font-size: 14px;
      word-break: break-all;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
    }

    .s-modal-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>
