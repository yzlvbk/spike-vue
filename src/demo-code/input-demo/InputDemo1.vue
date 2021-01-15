<demo>
</demo>
<template>
  <div style="width: 300px;">
    <s-input />

    <s-input icon="user" placeholder="请输入用户名" />

    <s-input icon="user" disabled placeholder="请输入用户名" />

    <s-input icon="lock" v-model:value="someString" placeholder="请输入密码" />
    <p>{{someString}}</p>

    <s-input icon="lock" error value="error" />

    <s-input type="textarea" resize />
  </div>
</template>

<script lang="ts">
import { sInput } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sInput
  },
  setup() {
    const someString = ref('someString')

    return { someString }
  }
}
</script>

<style lang="scss" scoped>
.s-input {
  margin: 10px 0;
}
</style>
