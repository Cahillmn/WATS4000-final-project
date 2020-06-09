<template>
 <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <h2 v-if="results && results.length > 0">{{ results.length }} Houses Found</h2>
      <ul v-if="results && results.length > 0" class="results">
        <transition-group name="fade" tag="div" appear>
        
        <li v-for="(result,index) in results" class="item" :key="index">
          <h2 class="result-houses">{{ result.name }}</h2>
          <p class="result-houses"><label>url: </label>{{ result.url }}</p>
          <p class= label>Region: </p>
          <p> {{ this.results.region}}</p>
          <p class= label>Coat of Arms: </p>
          <p> {{ this.results.coatOfArms }}</p>
          <p  class= label>Words: </p>
          <p> {{ this.results.words }}</p>
          </li>
        </transition-group>
      </ul>
      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Houses Found</h2>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
/*import Characters from '@/views/Characters';*/
require('vue2-animate/dist/vue2-animate.min.css');
//import CubeSpinner from '@/components/CubeSpinner';

/*import MessageContainer from '@/components/MessageContainer';*/
export default {
  name: 'House',
  components: {
   // spinner: CubeSpinner,
    //'CharacterDetails': House,
    /*'message-container': MessageContainer*/
  },
  data () {
    return {
      results: null,
      wordList: [],
      messages: [],
      url: '',
      name: '',
      region: '',
      coatOfArms: '',
      words: '',
      
    }
  },
  created () {
    axios.get (this.$route.params.url) 
       .then(response => {
      this.results = response.data
      console.log (response.data)
    })
    .catch(error => {
      this.errors.push(error)
    });
  },
  /*components: {
    'House': House,
    'error-list': ErrorList
  },*/
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

<style scoped>
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
</style>