const state = {
  loginFruitName: "",
};

const mutations = {
  setLoginFruit(state, fruit) {
    state.loginFruitName = fruit.name;
  },
};

const actions = {
  setLoginFruit({ commit }, fruit) {
    commit("setLoginFruit", fruit);
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
