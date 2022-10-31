<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="checkProcessEnv">process.envを表示</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    checkProcessEnv() {
      console.log(process.env);
    },
  },
});
</script>
