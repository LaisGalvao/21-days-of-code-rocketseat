<template>
  <div>{{ timeCount }}</div>
</template>

<script>
export default {
  props: {
    timeCount: {
      type: Date,
      required: true,
      default: '00:00:00'
    },
  },
};
</script>

<style>
</style>