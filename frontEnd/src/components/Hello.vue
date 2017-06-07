<template>
  <div class="hello">
    <button v-on:click="fetchAssessments"> DO STUFF</button>
    <br/>
    {{assessments}}
  </div>
</template>

<script>
import fetch from 'node-fetch'

export default {
  name: 'hello',
  data: function () {
    return {
      assessments: {}
    }
  },
  methods: {
    fetchAssessments: function () {
      console.log('getting assessements')
      fetch('http://localhost:8000/all_assessments')
        .then(res => res.text())
        .then(body => this.$set(this, 'assessments', JSON.parse(body)))
    }
  },
  mounted () {
    console.log('mounted', this)
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
