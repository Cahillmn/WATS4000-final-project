<template>
<div>
  <div class="messages">
      <message-container v-bind:messages="messages"></message-container>
    </div>
    <div class="characters-search">
      <form v-on:submit.prevent="findCharacters">
       <!--<p>
        <label for="gender">Gender: 
            <select id="gender" v-model="gender">
              <option value="">Select Gender.</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </p> -->
        <p>
            <label>
              Enter name
              <input type="text" v-model="name" placeholder="full name" />
            </label>
          </p>
       
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
    </div>
    <div class="result-list-container">
      
     <!-- <ul class="result-list">
        <transition-group name="slideRight" tag="div" appear>
        <li v-for="(result,index) in results" :key="index">
          {{ name }}&nbsp;
         <button v-on:click="removeWord(word)" class="remove-word">x</button> 
        </li>
        </transition-group>
      </ul> -->
    </div>
    <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <h2 v-if="results && results.length > 0">{{ results.length }} Characters Found</h2>
      <ul v-if="results && results.length > 0" class="results">
        <transition-group name="fade" tag="div" appear>
        
        <li v-for="(result,index) in results" class="item" :key="index">
          <h2 class="result-characters">{{ result.name }}</h2>
          <p class="result-characters"><label>url: </label>{{ result.url }}</p>
          <p>
          <router-link
            v-bind:to="{ name: 'CharacterDetails', params: { url: result.url } }"
          >Learn more</router-link>
        </p> 
        </li>
        </transition-group>
      </ul>
      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Characters Found</h2>
        <p>Please adjust your search.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/*import { API } from "@/common/api";*/
require('vue2-animate/dist/vue2-animate.min.css');
import CubeSpinner from '@/components/CubeSpinner';
import MessageContainer from '@/components/MessageContainer';
export default {
  name: 'Characters',
  components: {
    spinner: CubeSpinner,
    'message-container': MessageContainer
  
  },
  data () {
    return {
      results: null,
      wordList: [],
      messages: [],
      url: '',
      name: '',
      gender: '',
      culture: '',
      born: '',
      died: '',
      titles: [],
      allegiances: [],
      playedBy: [],
      showSpinner: false
    }
  },
  methods: {
    /*findCharacters: function() {
      this.showSpinner = true;
      this.results = null;
      axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50', {
        params: {
          gender: this.gender,
        }
      })
      .then( response => {
        this.showSpinner = false;
        this.results = response.data;
      })
      .catch( error => {
        this.showSpinner = false;
        this.messages.push({
          type: 'error',
          text: error.message
        });*/
        
        findCharacters: function() {
      this.showSpinner = true;
      this.results = null;
      axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50', {
        params: {
          name: this.name,
        }
      })
      .then( response => {
        this.showSpinner = false;
        this.results = response.data;
      })
      .catch( error => {
        this.showSpinner = false;
        this.messages.push({
          type: 'error',
          text: error.message
        });
      })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: left;
}
.word-search {
  font-size: 1.2rem;
  white-space: nowrap;
  display: inline-block;
  width: 70%;
  float: left;
}
.word-list-container {
  display: inline-block;
  width: 25%;
  background: #e8e8e8;
  padding: 0.5rem;
}
.results-container {
  clear: both;
  
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 0;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
}
ul.results,
ul.word-list {
  list-style-type: none;
  padding: 0;
}
.word-list li {
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid #333;
}
.results li {
  text-align: left;
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 500px;
  min-height: 250px;
  color: gold;
  font-weight: 300;
  font-size: 1.2rem;
  background: black;
  
  
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>