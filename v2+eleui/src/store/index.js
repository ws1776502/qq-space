import Vue from "vue";
import Vuex from "vuex";
import ModuleUser from "./user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tokenInfo: {
      token: "1q",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { user: ModuleUser },
});
