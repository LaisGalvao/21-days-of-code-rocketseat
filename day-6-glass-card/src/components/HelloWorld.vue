<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 id="message">{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 5%;
width: 50vw;
backdrop-filter: blur(2px) saturate(200%);
  -webkit-backdrop-filter: blur(2px) saturate(200%);
  background-color: rgba(17, 25, 40, 0.72);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: all 1s ease-in-out;
}

.hello:hover{
  backdrop-filter: blur(15px) saturate(200%);
    -webkit-backdrop-filter: blur(15px) saturate(200%);
    background-color: rgba(0, 0, 0, 0.54);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    transform: scale(.99);
    transition: all 1s ease-in-out;
}

@media screen and (max-width: 720px){
  .hello{ width: auto;}
}
</style>
