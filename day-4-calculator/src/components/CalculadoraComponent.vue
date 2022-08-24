<template>
  <div class="grid_buttons" :v-for="btn in buttons">
    <button :v-model="btn.id">{{ btn.text }}</button>
  </div>
</template>

<script>
export default {
  computed: {
    buttons() {
      return [
        {
          id: 0,
          text: "aa",
        },
        {
          id: 1,
          text: "aa",
        },
        {
          id: 2,
          text: "aa",
        },
        {
          id: 3,
          text: "aa",
        },
        {
          id: 4,
          text: "aa",
        },
      ];
    },
  },mounted(){
    console.log(this.buttons.map(i => i.id));
  }
};
</script>

<style>
.grid_buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 300px;
  margin: auto;
}
</style>