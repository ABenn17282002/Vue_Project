import Vue from "vue";
import IndexView from "./IndexView.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(IndexView),
}).$mount("#app");
