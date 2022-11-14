<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    let name = "水谷";
    const age = 32;
    console.log("setup");
    // console.logで出力するとundefinedになる(thisは使えない)
    console.log(this);
    return {
      // name:nameではなくnameだけの省略形も可。
      name,
      age,
    };
  },
  data() {
    return {
      number: 1,
      sports: "サッカー",
    };
  },
  created() {
    console.log("created");
    console.log(this);
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style></style>
