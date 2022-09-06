<template>
  <!--  <div class="grid">
    <div class="grid_buttons">
      <div v-for="(btn, index) in buttons" :key="index">
        <button @click="clicked(btn.text)" class="btn" :id="btn.id">
          {{ btn.text }}
        </button>
      </div>
    </div>
  </div> -->
  <div>
    <table id="calcu">
      <tr>
        <td colspan="3"><input type="text" id="result" /></td>
        <!-- clr() function will call clr to clear all value -->
        <td>
          <input
            type="button"
            value="c"
            onclick="clr()"
            style="background-color: purple"
          />
        </td>
      </tr>
      <tr>
        <!-- create button and assign value to each button -->
        <!-- dis("1") will call function dis to display value -->
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="1"
            onclick="dis('1')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="2"
            onclick="dis('2')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="3"
            onclick="dis('3')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            type="button"
            value="/"
            onclick="dis('/')"
            onkeydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="4"
            onclick="dis('4')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="5"
            onclick="dis('5')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="6"
            onclick="dis('6')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            type="button"
            value="*"
            onclick="dis('*')"
            onkeydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="7"
            onclick="dis('7')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="8"
            onclick="dis('8')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="9"
            onclick="dis('9')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            type="button"
            value="-"
            onclick="dis('-')"
            onkeydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            class="btn-numbers"
            type="button"
            value="0"
            onclick="dis('0')"
            onkeydown="myFunction(event)"
          />
        </td>
        <td>
          <input
            type="button"
            value="."
            onclick="dis('.')"
            onkeydown="myFunction(event)"
          />
        </td>
        <!-- solve function call function solve to evaluate value -->
        <td><input type="button" value="=" onclick="solve()" /></td>

        <td>
          <input
            type="button"
            value="+"
            onclick="dis('+')"
            onkeydown="myFunction(event)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          id: 0,
          text: "0",
        },
        {
          id: 1,
          text: "1",
        },
        {
          id: 2,
          text: "2",
        },
      ],
    };
  },
  mounted() {
    console.log(this.buttons.map((i) => i.id));
  },
  methods: {
    clicked(number) {
      console.log(number);
    },
  },
};
</script>

<style>
/* .grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
}

.grid_buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 300px;
  max-width: 300px;
  overflow: hidden;
  margin: auto;
  flex-wrap: wrap;
}

.btn {
  width: 80px;
  height: 80px;
} */
table {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}

input[type="button"] {
  width: 100%;
  padding: 20px 40px;
  background-color: green;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}

input[type="text"] {
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  border: 2px solid black;
}

.btn-numbers{
  background-color: #2c3e50 !important;
}
</style>
<!-- https://www.geeksforgeeks.org/html-calculator/ -->