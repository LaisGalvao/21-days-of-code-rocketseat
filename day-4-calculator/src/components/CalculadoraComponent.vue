<template>
  <div class="grid">
    <div class="grid_buttons">
      <div v-for="(btn, index) in buttons_actions" :key="index">
        <button @click="clicked(btn.text)" class="btn" :id="btn.id">
          {{ btn.text }}
        </button>
      </div>
    </div>
    <div class="grid_buttons">
      <div v-for="(btn, index) in buttons" :key="index">
        <button @click="clicked(btn.text)" class="btn" :id="btn.id">
          {{ btn.text }}
        </button>
      </div>
    </div>
    <div class="grid_buttons_operator">
      <div v-for="(btn, index) in buttons_operations" :key="index">
        <button @click="clicked(btn.text)" class="btn" :id="btn.id">
          {{ btn.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          id: 6,
          text: "7",
        },
        {
          id: 7,
          text: "8",
        },
        {
          id: 8,
          text: "9",
        },
        {
          id: 3,
          text: "4",
        },
        {
          id: 4,
          text: "5",
        },
        {
          id: 5,
          text: "6",
        },
        {
          id: 0,
          text: "1",
        },
        {
          id: 1,
          text: "2",
        },
        {
          id: 2,
          text: "3",
        },
        {
          id: 9,
          text: "+/-",
        },
        {
          id: 10,
          text: "0",
        },
        {
          id: 11,
          text: ","
        }
      ],
      buttons_actions: [
        {
          id: 0,
          text: "%",
        },
        {
          id: 1,
          text: "CE",
        },
        {
          id: 2,
          text: "C",
        },
        {
          id: 3,
          text: "⅟x",
        },
        {
          id: 4,
          text: "x²",
        },
        {
          id: 5,
          text: "√ ",
        },
      ],
      buttons_operations: [
        {
          id: 0,
          text: "🧹",
        },
        {
          id: 1,
          text: "÷",
        },
        {
          id: 2,
          text: "×",
        },
        {
          id: 3,
          text: "-",
        },
        {
          id: 4,
          text: "+",
        },
        {
          id: 5,
          text: "=",
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
.grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
}

.grid_buttons_operator {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: stretch;
  margin-left: calc(100% - 75vw);
  margin-top: -34.5%;
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
}
</style>