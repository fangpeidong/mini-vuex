import { computed } from 'vue'
import { forEachValue } from './utils'

export function setupGetters(store, getters) {
  store.getters = {}

  forEachValue(getters, (key, func) => {
    Object.defineProperty(store.getters, key, {
      get() {
        return computed(() => func(store.state))
      }
    })
  })
}
