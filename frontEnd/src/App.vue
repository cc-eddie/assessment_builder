<template>
  <div id="app">
    <div id="centered">
      <img src="./assets/logo.png" alt="Vue"/>
    </div>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#centered {
  text-align: center;
}
@media print {
  #app {
    margin-top: 0;
  }
}
</style>
