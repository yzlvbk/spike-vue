<demo>
</demo>
<template>
  <div class="icon-demo">
    <s-radio :options="options" :defaultIndex="1" @value-change="changeValue" vertical></s-radio>
  </div>
</template>

<script lang="ts">
import { sRadio } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sRadio
  },
  setup() {
    const options = [
      { label: '苹果', value: 'Apple' },
      { label: '梨', value: 'Pear' },
      { label: '橘子', value: 'Orange' }
    ]
    const changeValue = (value) => {
      console.log('changevalue', value)

    }

    return { options, changeValue }
  }
}
</script>
