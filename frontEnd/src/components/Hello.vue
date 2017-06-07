<template>
  <div class="hello">
    <button v-on:click="fetchAssessments"> DO STUFF</button>
    <br/>
    <div v-for="(assessment, i) in assessments" v-html="markItUp(assessment.question)">
      <input type="checkbox"/>
    </div>
  </div>
</template>

<script>
import fetch from 'node-fetch'
import marked from 'marked'

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
    },
    markItUp: function (md) {
      return marked(md)
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
