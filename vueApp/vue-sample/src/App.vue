<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ScriptSetupTestVue />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ScriptSetupTestVue from "./components/ScriptSetupTest.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ScriptSetupTestVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
