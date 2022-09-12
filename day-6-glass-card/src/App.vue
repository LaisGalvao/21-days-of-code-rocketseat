<template>
  <div id="app">
    <HelloWorld msg="passe o mouse ou toque em mim! 🖱👆🏽 (se estiver no celular, toque dentro e fora da caixa)" />
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
  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

body::-webkit-scrollbar {
  width: 9px;
}
body::-webkit-scrollbar-thumb {
  background-color: darkslategrey;
  border-radius: 20px;
  border: 1px solid transparent;
}
 body::-webkit-scrollbar-track {
  background: #00000047;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin: auto;
 }
</style>
