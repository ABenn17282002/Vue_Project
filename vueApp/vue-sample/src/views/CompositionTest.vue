<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let name = "水谷";
    const age = 32;
    const nameRef = ref("野茂");

    console.log("setup");
    // console.logで出力するとundefinedになる(thisは使えない)
    console.log(this);
    console.log(nameRef);

    return {
      // name:nameではなくnameだけの省略形も可。
      name,
      age,
      nameRef,
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
