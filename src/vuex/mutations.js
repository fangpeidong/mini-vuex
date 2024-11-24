import { forEachValue } from './utils'

export function setupMutations(store, mutations) {
  store.mutations = {}

  forEachValue(mutations, (key, func) => {
    store.mutations[key] = payload => {
      func.call(store, store.state, payload)
    }
  })

  store.commit = (type, payload) => {
    store.mutations[type](payload)
  }
}
