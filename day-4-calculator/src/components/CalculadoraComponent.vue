<template>
  <div class="grid_buttons">
    <div v-for="(btn, index) in buttons" :key="index">
      <button class="btn" :id="btn.id">{{ btn.text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
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
          id: 9,
          text: "10",
        },
      ],
    };
  },
  mounted() {
    console.log(this.buttons.map((i) => i.id));
  },
};
</script>

<style>
.grid_buttons {
  display: flex;
  flex-direction: row-reverse;
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