<template>
  <div id="demo">{{ timeCount }}</div>
</template>

<script>
export default {
  props: {
    timeCount: {
      required: true,
    },
  },
};
</script>

<style>
</style>