import { createStore } from '@/vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    double: state => state.count * 2
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  },
  actions: {
    asyncAddCount(store, payload) {
      store.commit('addCount', payload)
    }
  }
})
