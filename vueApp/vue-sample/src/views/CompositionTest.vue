<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref:{{ nameRef }}</p>
    <p>reactive:{{ book.title }}</p>
    <p>reactive:{{ book.author[0] }}</p>
    <p>reactiveToRefs:{{ titleRef }}</p>
    <p>reactiveToRefs:{{ authorRef[1] }}</p>
    <button @click="btnClick">クリック</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    let name = "水谷";
    const age = 32;
    const nameRef = ref("野茂");

    const book = reactive({
      title: "タイトル",
      author: ["大谷", "伊藤"],
    });

    const booktoRefs = reactive({
      titleRef: "タイトル2",
      authorRef: ["倉橋", "香川"],
    });

    const btnClick = (e) => {
      console.log(book.title);
      console.log(e);
    };

    console.log("setup");
    // console.logで出力するとundefinedになる(thisは使えない)
    console.log(this);
    console.log(nameRef);

    return {
      // name:nameではなくnameだけの省略形も可。
      name,
      age,
      nameRef,
      book,
      ...toRefs(booktoRefs),
      btnClick,
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
