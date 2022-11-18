<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
});

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div>
    <span>{{ props.title }}</span>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>
