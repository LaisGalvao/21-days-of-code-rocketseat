<template>
  <div class="hello fadeIn">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: #fff;
  width: max-content;
  padding: 2%;
  opacity: 0.8;
  margin: auto;
  border-radius: 5px;
}

.hello h1 {
  border-right: 0.15em solid #2c3e50;
  white-space: nowrap;
  overflow: hidden;
}

.hello h1 {
  width: auto;
  animation-delay: 6s;
  -webkit-animation: type 4s steps(40, end), blink-caret 0.75s step-end infinite;
  animation: type 4s steps(40, end), blink-caret 0.75s step-end infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

h1 {
  color: #2c3e50;
}

.fadeIn {
  -moz-animation-name: FadeIn;
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

@keyframes FadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #2c3e50;
  }
}
</style>
