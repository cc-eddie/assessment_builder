<template>
  <div>
    <input type="button" v-on:click="onChecked" v-bind:id="assessment._id" value="Add Question"/>
    <div v-html="markedQuestion"></div>
    <textarea />
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'question',
  data: function () {
    return {
      markedQuestion: this.markItUp(this.assessment.question)
    }
  },
  methods: {
    markItUp: function (md) {
      return marked(md)
    },
    onChecked: function (evt) {
      this.$emit('clicked', evt.target.id)
    }
  },
  props: ['assessment', 'checkedQuestions']
}

</script>

<style scoped>
@media print {
  textarea {
    visibility: hidden;
  }
  input {
    visibility: hidden;
  }
}

</style>
