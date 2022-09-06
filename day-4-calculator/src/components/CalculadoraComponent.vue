<template>
  <div>
    <table id="calcu">
      <tr>
        <td colspan="3"><input type="text" id="result" /></td>
        <!-- clr() function will call clr to clear all value -->
        <td>
          <input id="c-btn" type="button" value="c" @click="clr()" />
        </td>
      </tr>
      <tr>
        <!-- create button and assign value to each button -->
        <!-- dis("1") will call function dis to display value -->
        <td v-for="(b, index) in colBtn1" :key="index">
          <input
            :class="'btn-numbers ' + b.className"
            :style="'background-color: ' + b.color + '!important'"
            type="button"
            :value="b.value"
            @click="dis(b.value)"
            @keydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td v-for="(b, index) in colBtn2" :key="index">
          <input
            :class="'btn-numbers ' + b.className"
            :style="'background-color: ' + b.color + '!important'"
            type="button"
            :value="b.value"
            @click="dis(b.value)"
            @keydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td v-for="(b, index) in colBtn3" :key="index">
          <input
            :class="'btn-numbers ' + b.className"
            :style="'background-color: ' + b.color + '!important'"
            type="button"
            :value="b.value"
            @click="dis(b.value)"
            @keydown="myFunction(event)"
          />
        </td>
      </tr>
      <tr>
        <td v-for="(b, index) in colBtn4" :key="index">
          <input
            :class="'btn-numbers ' + b.className"
            :style="'background-color: ' + b.color + '!important'"
            type="button"
            :value="b.value"
            @click="dis(b.value)"
            @keydown="myFunction(event)"
          />
        </td>
        <!-- solve function call function solve to evaluate value -->
        <td>
          <input id="equal-btn" type="button" value="=" @click="solve()" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { evaluate } from "mathjs";
export default {
  data() {
    return {
      colBtn1: [
        {
          value: "1",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "2",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "3",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          className: "btn-green",
          value: "/",
          color: "green",
        },
      ],
      colBtn2: [
        {
          value: "3",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "5",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "6",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          className: "btn-green",
          value: "*",
          color: "green",
        },
      ],
      colBtn3: [
        {
          value: "7",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "8",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: "9",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          className: "btn-green",
          value: "-",
          color: "green",
        },
      ],
      colBtn4: [
        {
          value: "0",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },
        {
          value: ".",
          color:
            "background: rgb(2,0,36); background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(44,62,80,1) 100%, rgba(0,212,255,1) 100%);",
        },

        { className: "btn-green", value: "+", color: "green" },
      ],
    };
  },
  created() {
    console.log(this.buttons.map((i) => i.id));
    var cal = document.getElementById("calcu");
    cal.onkeyup = function (event) {
      if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value;
        console.log(x);
        this.solve();
      }
    };
  },
  methods: {
    // Function that display value
    dis(val) {
      document.getElementById("result").value += val;
    },

    myFunction(event) {
      if (
        event.key == "0" ||
        event.key == "1" ||
        event.key == "2" ||
        event.key == "3" ||
        event.key == "4" ||
        event.key == "5" ||
        event.key == "6" ||
        event.key == "7" ||
        event.key == "8" ||
        event.key == "9" ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "/"
      )
        document.getElementById("result").value += event.key;
    },

    // Function that evaluates the digit and return result
    solve() {
      let x = document.getElementById("result").value;
      console.log(x);
      let y = evaluate(x);
      document.getElementById("result").value = y;
    },

    // Function that clear the display
    clr() {
      document.getElementById("result").value = "";
    },
  },
};
</script>

<style>
table {
  border: 2.5px groove rgb(22, 22, 22);
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

input[type="button"] {
  width: 100%;
  padding: 20px 40px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    17deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 63, 80, 1) 0%,
    rgba(0, 255, 106, 1) 100%
  );
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}

input[type="button"]:focus,
input[type="button"]:hover {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    40deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 62, 80, 1) 60%,
    rgba(0, 212, 255, 1) 100%
  ) !important;
}

input[type="button"].btn-green:hover,
input[type="button"].btn-green:focus {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    157deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 182, 76, 1) 100%
  ) !important;
}

input[type="text"] {
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  border: 2px solid black;
}

.btn-numbers {
  background-color: #2c3e50 !important;
}
#c-btn,
#equal-btn {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    157deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(134, 0, 182, 1) 100%
  ) !important;
}

#c-btn:hover,
#c-btn:focus,
#equal-btn:hover,
#equal-btn:focus {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    157deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(134, 0, 182, 1) 31%
  ) !important;
}
</style>