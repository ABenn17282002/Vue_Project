<template>
  <div>
    GrandChild(孫)

    <div>{{ userName }}</div>
  </div>
</template>

<script>
export default {
  data() {},
  inject: ["userName"],
};
</script>

<style></style>
