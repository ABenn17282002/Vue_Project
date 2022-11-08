import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 初期値
    count: 0,
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
