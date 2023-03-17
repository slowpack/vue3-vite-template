<script setup lang="ts">
import Layout from '@/layout/index.vue'

</script>

<template>
  <div class="container">
    <Layout></Layout>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  overflow: hidden;
  flex-direction: row;
}
main{
  width: 90vw;
  height: 100vh;
}
</style>
