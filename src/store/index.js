import { createStore } from 'vuex'

export default createStore({
  state: {
    events: [],
    user: 'Mariyan Damyanov'
  },
  mutations: {
    ADD_EVENT(state, value) {
      state.events.push(value)
    }
  },
  actions: {},
  modules: {}
})
