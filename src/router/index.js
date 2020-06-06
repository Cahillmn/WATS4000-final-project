import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '@/views/Characters'
import CharacterDetails from '@/views/CharacterDetails'
import House from '@/views/House'
import CubeSpinner from '@/components/CubeSpinner'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters
  }
]
const router = new VueRouter({
  routes
})
export default router