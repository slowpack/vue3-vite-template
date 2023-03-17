<script setup lang='ts'>
import { readViewsDir } from '@/utils/readViews';
import { useRouter } from 'vue-router';

const files = readViewsDir(import.meta.glob('@/views/**/index.vue'))
const router = useRouter()
const toTheMoon = (menuItem: string) => {
  router.push(menuItem)
}
</script>
<template>
  <nav>
    <menu v-for="item in files" @click="toTheMoon(item)">{{ item }}</menu>
  </nav>
</template>

  
<style>
nav {
  height: 100vh;
  width: 10vw;
  display: flex;
  display: inline-block;
  flex-direction: column;
}

menu {
  display: inline-block;
  height: 10vh;
  width: 10vw;
  background: #ebb3b3;
  text-align: center;
}
</style>