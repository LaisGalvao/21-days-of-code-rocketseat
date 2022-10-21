<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      class="is-flex is-flex-direction-column is-justify-content-center py-2"
    >
      <div id="demo"></div>
      <div class="is-flex is-flex-direction-row is-justify-content-center py-2">
        <StartComponent />
        <PauseComponent />
        <ResetComponent />
      </div>
    </div>
  </div>
</template>

<script>
import StartComponent from "./Contador/StartComponent.vue";
import PauseComponent from "./Contador/PauseComponent.vue";
import ResetComponent from "./Contador/ResetComponent.vue";
/* import ShowCountComponent from "./Contador/ShowCountComponent.vue"; */
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    StartComponent,
    PauseComponent,
    ResetComponent,
    /*  ShowCountComponent, */
  },
  mounted() {
    this.$nextTick().then(this.countDown);
  },
  methods: {
    countDown () {
      // Set the date we're counting down to
      var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    },
  },
};
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
