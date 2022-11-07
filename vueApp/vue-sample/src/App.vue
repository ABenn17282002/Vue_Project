<template>
  <v-app>
    <HeaderView />
    <v-main>
      <v-container>
        <router-view
          :books="books"
          @add-book-list="addBook"
          @update-book-info="updateBookInfo"
        />
      </v-container>
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import HeaderView from "@/global/HeaderView.vue";
import FooterView from "@/global/FooterView.vue";
const STORAGE_KEY = "books";

export default {
  name: "App",

  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      books: [],
      newBook: null,
    };
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      console.log(e);
      // 実際に何かしたことを入力する
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readData: "",
        memo: "",
      });
      // this.newBook = "";
      this.saveBooks();
      // 最後に追加したidを取得
      console.log(this.books.slice(-1)[0].id);
      this.goToEditPage(this.books.slice(-1)[0].id);
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    updateBookInfo(e) {
      const updateInfo = {
        id: e.id,
        readData: e.readData,
        memo: e.memo,
        title: this.books[e.id].title,
        image: this.books[e.id].image,
        description: this.books[e.id].description,
      };

      this.books.splice(e.id, 1, updateInfo);
      this.saveBooks();
      this.$router.push("/");
    },
    goToEditPage(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
};
</script>
