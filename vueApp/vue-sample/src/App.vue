<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    {{ $store.state.count }}
    <br />
    <ul>
      <li v-for="fruit in visibleFruits" :key="fruit.id">
        {{ fruit.id }} : {{ fruit.name }} :{{ fruit.isVisible }}
      </li>
    </ul>
    <br />
    {{ getFruitById.name }}
  </div>
</template>

<script>
export default {
  computed: {
    visibleFruits() {
      return this.$store.getters.visibleFruits;
    },
    getFruitById() {
      return this.$store.getters.getFruitById(2);
    },
  },
};
</script>
