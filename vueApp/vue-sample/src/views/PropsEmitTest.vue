<template>
  <div>
    PropsEmitTest
    <div>{{ setupBooks }}</div>
    <div>{{ dataBooks }}</div>
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },
};
</script>

<style></style>
