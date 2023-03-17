<script setup lang="ts">
const flag: boolean = false;
</script>
<template>
  <div :class="[flag ? 'active' : 'other', 'h']">12323</div>
</template>
<style>
.active {
  color: red;
}
.other {
  color: blue;
}
.h {
  height: 300px;
  border: 1px solid #ccc;
}
</style>
<style lang='scss' scoped>
</style>