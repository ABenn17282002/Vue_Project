<template>
  <div>
    VuexTest

    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const count = computed(() => {
      return store.state.count;
    });

    const increment = () => {
      store.commit("increment");
    };

    return { count, increment };
  },
};
</script>

<style></style>
