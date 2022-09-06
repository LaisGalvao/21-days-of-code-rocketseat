<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CalculadoraComponent/>
  </div>
</template>

<script>
import CalculadoraComponent from './CalculadoraComponent.vue';
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    components: { CalculadoraComponent }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: antiquewhite;
}
</style>
