import { createStore } from '@/vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    double: state => state.count * 2
  },
  mutations: {
    addCount(state, payload = 1) {
      state.count = state.count + payload
    }
  },
  actions: {
    asyncAddCount(store, payload = 1) {
      store.commit('addCount', payload)
    }
  }
})
