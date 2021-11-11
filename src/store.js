import { createStore } from 'vuex';

const store = createStore({
  modules: {
  },
  state() {
    return {
      locale: 'ES',
      dialog: { icon: '', title: '', message: '' }
    };
  },
  mutations: {
    setDialog(state, dialog) { state.dialog = dialog },
    setLocale(state, locale) { state.locale = locale }
  },
  actions: {
    setDialog(context, dialog) { context.commit('setDialog', dialog) },
    setLocale(context, locale) {
      context.commit('setLocale', locale)
    }
  },
  getters: {
    getDialog(state) { return state.dialog },
    getLocale(state) { return state.locale }
  }
});

export default store;