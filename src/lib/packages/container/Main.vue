<template>
  <div class="s-main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sMain'
}
</script>
<style scoped lang="scss">
.s-main {
  flex-grow: 1;
}
</style>