import { forEachValue } from '../utils'

export function setupActions(store, actions) {
  store.actions = {}
  
  forEachValue(actions, (key, func) => {
    store.actions[key] = (payload) => {
      func.call(store, store, payload)
    }
  })

  store.dispatch = (type, payload) => {
    store.actions[type](payload)
  }
}