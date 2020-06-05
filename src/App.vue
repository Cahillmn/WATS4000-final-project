<template>
  <div id="app">
    <img alt="GOT Logo" src="./assets/Logo.png">
  <h1>Game of Thrones Character Search</h1>
  <router-view/>
    
    <Characters msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Characters from './views/Characters.vue'

 export default {
  name: 'App',
  components: {
    Characters
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
