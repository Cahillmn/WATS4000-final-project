import Vue from 'vue'
import VueRouter from 'vue-router'
import WordSearch from '@/views/WordSearch'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'WordSearch',
    component: WordSearch
  }
]

const router = new VueRouter({
  routes
})

export default router
