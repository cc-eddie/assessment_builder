<template>
  <div>
    <input type="button" class="btn" v-on:click="onChecked" v-bind:id="assessment._id" value="Add / Remove"/>
    <p>{{this._key}}</p>
    <div v-html="markedQuestion"></div>
    <hr>
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
  props: ['assessment', 'checkedQuestions', '_key']
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
  .btn {
    visibility: hidden;
  }
}

</style>
