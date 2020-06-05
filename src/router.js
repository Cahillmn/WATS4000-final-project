import Vue from 'vue'
import Router from 'vue-router'
import CharacterDetails from '@/views/CharacterDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'character',
      component: CharacterDetails
    }
  ]
})