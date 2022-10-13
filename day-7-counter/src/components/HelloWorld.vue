<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ShowCountComponent/>
      <StartComponent/>
      <PauseComponent/>
      <ResetComponent />
    </div>
  </div>
</template>

<script>
import StartComponent from "./Contador/StartComponent.vue";
import PauseComponent from "./Contador/PauseComponent.vue";
import ResetComponent from "./Contador/ResetComponent.vue";
import ShowCountComponent from "./Contador/ShowCountComponent.vue";
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { StartComponent, PauseComponent, ResetComponent, ShowCountComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
