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
    <p>computed:{{ totalPrice }}</p>
    <div>watch:<input v-model="search" /></div>
    <div>watchEffect:<input v-model="searchEffect" /></div>
  </div>
</template>

<script>
import {
  computed,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  onMounted,
} from "vue";
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

    const item = reactive({
      price: 100,
      number: 1,
    });

    const totalPrice = computed(() => {
      return item.price * item.number;
    });

    const search = ref("");
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`);
      console.log(`new: ${newValue}`);
      console.log(`prev: ${prevValue}`);
    });

    const searchEffect = ref("");
    watchEffect(() => {
      console.log(`watchEffect:${searchEffect.value}`);
    });

    onMounted(() => {
      console.log("onMounted");
    });

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
      item,
      totalPrice,
      search,
      searchEffect,
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
