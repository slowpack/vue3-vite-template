import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }]
})

const modules = import.meta.glob('@/views/**/index.vue')
let menu: {name: string}[] = []
// 循环添加路由
for (const item in modules) {
  //正则匹配文件路径
  const path = item.match(/\/src\/views(\S*)\/index.vue/)?.[1]
const name = path?.match(/[^/]+(?!.*\/)/)?.[0] ?? '默认值'
  menu.push({name})
  //then方法访问到的模块 添加入路由
  modules[item]().then((mod: any) => {
    const file = mod.default
    router.addRoute({
      path: '/' + name,
      name,
      component: file,
    })
  })
} 
console.log(router)
export default router
