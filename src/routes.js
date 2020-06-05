import Vue from 'vue'
import Router from 'vue-router'
import Character from '@/views/Characters'
import CharacterDetails from '@/views/CharacterDetails'
import House from '@/views/House'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'characters',
      component: Characters
    },
    {
      path: '/CharacterDetails/:url',
      name: 'character details',
      component: CharacterDetails
    },
    {
      path: '/House/:url',
      name: 'house',
      component: House
    }

  ]
})