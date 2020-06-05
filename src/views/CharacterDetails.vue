<template>
  <div>
    
    <p>
      <router-link to="/">Home</router-link> 
      <router-link v-bind:to="{ name: 'House', params: { allegiances: $route.params.allegiances } }">View information about the house</router-link>
    </p>
    
  <div>
  <h2>Character Details<span v-if="characterDetails"> for {{ characterDetails.name }}</span></h2>
  <p>
      <router-link to="/">Home</router-link> |
     <!-- <router-link v-bind:to="{ name: 'Forecast', params: { cityId: $route.params.cityId } }">View 5-Day Forecast</router-link> -->
    </p>
    <div v-if="CharacterDetails && errors.length===0"> 
      <!-- Call child component to display House -->
      <House v-bind:CharacterDetails="results.allegiances"></House> 
    </div> 
    <!-- Call child component to display ErrorList when error exists -->
    <error-list v-bind:errorList="errors"></error-list>
  </div>
  <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <ul v-if="results && results.length > 0" class="results">
        <transition-group name="fade" tag="div" appear>
        <li v-for="(result,index) in results" class="item" :key="index">
          <h2 class="result-characters">{{ result.name }}</h2>
           <p class="result-characters"><label>url: </label>{{ result.url }}</p>
         <!-- <p><router-link v-bind:to="{ name: 'CharacterDetails', params: { name: $route.results.name } }">Learn more about the character</router-link> -->
          <p class="result-characters"><label>Gender: </label>{{ result.gender }}</p>
          <p class="result-characters"><label>Culture: </label>{{ result.culture }}</p>
          <p class="result-characters"><label>Born: </label>{{ result.born}}</p>
          <p class="results-characters"><label>Died: </label>{{ result.died}}</p>
          <ul class= 'title'>
            <p>Title: </p>
          <li v-for="title in result.titles" v-bind:class="title" :key="title">{{ title }}</li>
          </ul> 
          <!--<p class="result-characters"><label>Titles: </label>{{ result.titles }}</p> -->
          <ul class= 'allegiances'>
            <p>Allegiances: </p>
          <li v-for="allegiance in result.allegiances" v-bind:class="title" :key="allegiance">{{ allegiances }}</li>
          </ul> 
           <p class="result-characters"><label>Allegiances: </label>{{ result.allegiances }}</p>
          <ul class= 'allegiances'>
            <p>Played by: </p>
          <li v-for="playedBy in result.playedBy" v-bind:class="title" :key="playedBy">{{ playedBy }}</li>
          </ul> 
          <!-- <p class="result-characters"><label>Played by: </label>{{ result.playedBy }}</p> -->
          <p>
            <!-- <button v-on:click="addWord(item.word)" class="add-word">Add to WordList</button> -->
          </p>
        </li>
        </transition-group>
      </ul>
      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Characters Found</h2>
        <p>Please adjust your search.</p>
      </div>
    </div>
  
</template>

<script>
import axios from 'axios';
import Characters from '@/views/Characters';
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
    findCharacters: function() {
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
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
}
.weatherSummary {
  display: inline-block;
  width: 100px;
}
dl {
  padding: 5px;
  background: #e8e8e8;
}
dt {
  float: left;
  clear: left;
  width: 120px;
  text-align: right;
  font-weight: bold;
  color: blue;
}
dd {
  margin: 0 0 0 130px;
  padding: 0 0 0.5em 0;
}
dt::after {
  content: ":";
}
a {
  color: #42b983;
}
</style>


