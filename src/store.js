import { createStore } from 'vuex';

const store = createStore({
  modules: {
  },
  state() {
    return {
      locale: 'ES'
    };
  },
  mutations: {
    setLocale(state, locale) { state.locale = locale }
  },
  actions: {
    setLocale(context, locale) {
      context.commit('setLocale', locale)
    }
  },
  getters: {
    getLocale(state) { return state.locale }
  }
});

export default store;