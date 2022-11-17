<template>
  <div>
    PropsEmitTest
    <div>{{ setupBooks }}</div>
    <div>{{ dataBooks }}</div>
    <button @click="emitTest">emitテスト</button>
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },

  // contextの代わりに{ emit }
  setup(props, { emit }) {
    console.log(props.setupBooks[0].title);
    console.log(props.dataBooks);

    const emitTest = () => {
      emit("custom-event", "子の値"); // contextなしで問題ない
    };

    return {
      emitTest,
    };
  },
};
</script>

<style></style>
