<template>
  <div class="red-b">
    <div class="border__blue">SCSSのテストです</div>
    テストです。
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      testData: "テストdataです",
    };
  },
};
</script>

<!--各コンポーネントで書く場合
<style lang=“scss”>
</style>
-->
<style scoped lang="scss">
.red-b {
  border: 1px red solid;
}

.border {
  &__blue {
    border: 1px blue solid;
  }
}
</style>
