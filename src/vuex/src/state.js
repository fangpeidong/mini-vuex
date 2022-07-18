import { reactive } from 'vue'

export function setupState(store, state) {
  store.state = reactive(state)
}
