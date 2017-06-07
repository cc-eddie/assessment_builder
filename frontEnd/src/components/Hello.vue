<template>
  <div class="hello">
    <span> {{checkedQuestions}}</span>
    <button v-on:click="fetchAssessments"> Get Questions </button>
    <br/>
    <div v-for="(assessment, i) in assessments">
      <Question v-bind:assessment="assessment" @clicked="onClicked" :key="i" />
    </div>
  </div>
</template>

<script>
import fetch from 'node-fetch'
import Question from './Question'

export default {
  name: 'hello',
  data: function () {
    return {
      assessments: {},
      checkedQuestions: []
    }
  },
  methods: {
    fetchAssessments: function () {
      console.log('getting assessements')
      fetch('http://localhost:8000/all_assessments')
        .then(res => res.text())
        .then(body => this.$set(this, 'assessments', JSON.parse(body)))
    },
    onClicked: function (value) {
      if (this.checkedQuestions.indexOf(value) === -1) {
        this.checkedQuestions.push(value)
      } else {
        let removal = this.checkedQuestions.indexOf(value)
        this.checkedQuestions.splice(removal, 1)
      }
    }
  },
  mounted () {
    console.log('mounted', this)
  },
  components: {
    Question
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
