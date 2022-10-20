<template>
  <div>
    <h1>本の一覧</h1>
    <ul>
      <li @click="showBookDetail(book.id)" v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      bookIndex: -1,
      books: [
        {
          id: 1,
          title: "鬼滅の刃12巻",
          content: "上限の鬼パワハラ会議～刀鍛冶の里上限襲来まで",
        },
        {
          id: 2,
          title: "鬼滅の刃13巻",
          content: "上弦の伍・玉壺、上弦の肆・半天狗との激闘",
        },
        {
          id: 3,
          title: "鬼滅の刃14巻",
          content: "時透無一郎の覚醒と恋柱「甘露寺蜜璃」の参戦！！",
        },
      ],
    };
  },
  methods: {
    showBookDetail(id) {
      this.bookIndex = id - 1;
      console.log(this.bookIndex);
      this.$router.push({
        name: "Book",
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        },
      });
    },
  },
};
</script>

<style></style>
