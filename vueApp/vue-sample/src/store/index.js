import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 初期値
    count: 0,
    fruits: [
      { id: 1, name: "りんご", isVisible: true },
      { id: 2, name: "みかん", isVisible: false },
      { id: 3, name: "20世紀梨", isVisible: true },
    ],
  },
  getters: {
    // visibleFruits(state) {
    //   return state.fruits.filter((fruit) => fruit.isVisible);
    // },
    visibleFruits: (state) => state.fruits.filter((fruit) => fruit.isVisible),

    getFruitById: (state) => (id) => {
      return state.fruits.find((fruit) => fruit.id === id);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCount(state, payload) {
      // 第2引数はオブジェクト
      state.count += payload.value;
    },
  },
  actions: {
    // incrementAction(context) {
    //   context.commit("increment");
    // },
    incrementAction({ commit }) {
      commit("increment");
    },
    addCountAction({ commit }, payload) {
      commit("addCount", payload);
    },
  },
  modules: {},
});
