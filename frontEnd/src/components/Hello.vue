<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="getAssessments">Get all assessments</button>
  </div>
</template>

<script>
import fetch from 'node-fetch'

let fetchAssessments = () => {
  fetch('http://localhost:8000/all_assessments')
    .then(res => res.text())
    .then(body => console.log(JSON.parse(body)))
}

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getAssessments: fetchAssessments
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
