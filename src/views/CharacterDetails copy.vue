<template>


  <div>
    <div v-if="results" >
     <h2 class= Name> {{ this.results.name }}</h2>
     <p class= label>Gender: </p>
     <p> {{ this.results.gender}}</p>
     <p class= label>Born: </p>
     <p> {{ this.results.born }}</p>
     <p  class= label>Died: </p>
     <p> {{ this.results.died }}</p>

     <p class= label>Titles: </p>
     <ul v-if="results.titles">
       <li v-for="titles in results.titles" :key="titles">
         {{ titles }}
       </li>
      </ul>

    <p class= label>Played by: </p>
     <ul v-if="results.playedBy">
       <li v-for="actor in results.playedBy" :key="actor">
         {{ actor }}
       </li>
    </ul>

    
     
     
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
  name: 'Characters',
  components: {
   // spinner: CubeSpinner,
    //'House': House,
    /*'message-container': MessageContainer*/
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h2.Name {
  font-weight: Bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  
  padding: 10px;
}
.label {
  font-weight: bold;
}



</style>

