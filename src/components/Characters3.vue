<template>
  <div>
    <div v-for="(Character,index) in Characters" class="characters" :key="index">
      <b>{{ Characters.main }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters',
  data () {
    return {

    }
  },
  props: {
    Characters: {}
  }
}
</script>

<style scoped>
  .Characters {
    display: inline-block;
    width: 100px;
  }
</style>