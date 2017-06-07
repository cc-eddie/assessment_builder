<template>
  <div class="hello">
    <div class="header">
      <button v-on:click="fetchAssessments"> Get Questions </button>
      <br/>
      <span> {{questionNames.length}}</span>
      <br/>
      <button v-on:click="makeAssessment"> Make Assessment </button>
    </div>
    <div v-for="(assessment, i) in assessments">
      <Question v-bind:assessment="assessment" @clicked="onClicked" v-bind:_key="i" :key="i" />
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
      questionNames: [],
      checkedQuestions: [],
      questionsForPrint: {}
    }
  },
  methods: {
    fetchAssessments: function () {
      fetch('http://localhost:8000/all_assessments')
        .then(res => res.text())
        .then(body => this.$set(this, 'assessments', JSON.parse(body)))
    },
    onClicked: function (value) {
      if (this.questionNames.indexOf(value) === -1) {
        this.questionNames.push(value)
        let question = this.assessments.find((a) => {
          return a._id === value
        })
        this.checkedQuestions.push(question)
      } else {
        let removal = this.questionNames.indexOf(value)
        this.checkedQuestions.splice(removal, 1)
        this.questionNames.splice(removal, 1)
      }
    },
    makeAssessment: function () {
      this.$set(this, 'assessments', this.checkedQuestions)
    }
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

@media print {
  .header {
    display: none;
  }
}
</style>
