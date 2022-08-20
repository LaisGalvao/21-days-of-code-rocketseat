<template>
  <div class="hello">
    <h1 id="msg">{{ msg }}</h1>
    <div class="wrapper">
      <span id="sun">☀️</span>
      <label class="switch">
        <input type="checkbox" @change="toggleTheme()" />
        <span class="slider round"></span>
      </label>
      <span id="moon">🌙</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },

  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-mode");
      document.getElementById("msg").classList.toggle("dark-mode")
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dark-mode {
  background-color: #1e1e1e !important;
  color: #ddd !important;
}

span#sun {
  font-size: 2rem;
  position: relative;
  margin-right: 10%;
}

span#moon {
  font-size: 2rem;
  position: relative;
  margin-left: 10%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border-radius: 15px;
  -webkit-animation: glow 1.5s ease-in-out infinite alternate;
  -moz-animation: glow 1.5s ease-in-out infinite alternate;
  animation: glow 1.5s ease-in-out infinite alternate;
  background-color: transparent;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(204, 204, 204, 0.9);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #42b983;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42b983;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  /* padding: 1%; */
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px rgba(211, 211, 211, 0.705),
      0 0 20px rgba(211, 211, 211, 0.705), 0 0 30px rgba(211, 211, 211, 0.705),
      0 0 40px #42b983, 0 0 70px #42b983, 0 0 80px #42b983, 0 0 100px #42b983,
      0 0 150px #42b983;
  }
  to {
    box-shadow: 0 0 5px rgba(211, 211, 211, 0.705),
      0 0 10px rgba(211, 211, 211, 0.705), 0 0 15px rgba(211, 211, 211, 0.705),
      0 0 20px #42b983, 0 0 35px #42b983, 0 0 40px #42b983, 0 0 50px #42b983,
      0 0 75px #42b983;
  }
}

@keyframes glowHover {
  50% {
    opacity: 0;
  }
}

</style>
