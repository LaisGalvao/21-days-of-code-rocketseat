<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Oops! Página não encontrada 🤔" />
    <img src="./assets/dory-removebg-preview.png" alt="Dory" id="dory" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background-image: url(./assets/underwater.jpg);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img#dory {
  animation-name: nadando;
  animation-duration: 10s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  position: relative;
  left: -1200px;
  overflow: hidden;
}

@keyframes nadando {
  0% {
    display: none;
  }
  25% {
    display: block !important;
    left: -52220px;
  }
  50% {
    display: block !important;
    left: 170px;
  }
  75% {
    display: block !important;
    left: 400px;
  }
  90%{
    left: 500px;
    overflow: hidden;
  }
  100% {
    display: none;
  }
}
</style>
