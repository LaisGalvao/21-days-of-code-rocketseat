<template>
  <div id="app">
    <img id="logo-img" class="fadeIn" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Olá, mundo! Belezinha? 👋🏽👩‍💻🚀" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 15%;
}

body {
  color: white;
  background: url(./assets/bg.gif) center no-repeat;
  background-size: cover;
  /* height: 90vh; */
}

@media screen and (max-width: 1200px) {
  body {
    height: 150vh;
  }
  #app{
    margin-top: 50%;
  }
 /*  img#logo-img {
    width: 10em;
    margin-left: 45%;
  } */
}

img#logo-img {
  width: 10em;
}

.fadeIn {
  -moz-animation-name: FadeIn;
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 3s;
}

@keyframes FadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
