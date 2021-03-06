import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      names: ['Paul', 'Andy', 'Stuart'],
  },
  mutations: {
    addName(state, name) {
      state.names.push(name);
    }
  },
  actions: {
    slowAddName({ commit }, name) {
      window.setTimeout(() => {
        commit('addName', name);
      }, 3000);
    }
  }
})
