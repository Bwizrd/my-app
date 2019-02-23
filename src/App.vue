<template>
  <div id="app">
   <p>is this working?</p>
   <Header />
   <Names />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Names from './components/Names.vue'
export default {
  name: 'app',
  components: {
    Header,
    Names,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
