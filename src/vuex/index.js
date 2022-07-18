import { inject } from 'vue'
import { setupState } from './src/state'
import { setupGetters } from './src/getters'
import { setupMutations } from './src/mutations'
import { setupActions } from './src/actions'

const storeKey = 'store'
let storeInstall = null

class Store {
  constructor(options) {
    setupState(this, options.state)
    setupGetters(this, options.getters)
    setupMutations(this, options.mutations)
    setupActions(this, options.actions)
  }

  install(app, injectKey = storeKey) {
    app.provide(injectKey, this)
    app.config.globalProperties.$store = this // 兼容 this.$store.xxx
  }
}

export function createStore(options) {
  // 单例模式
  if (storeInstall) {
    return storeInstall
  }
  storeInstall = new Store(options)
  return storeInstall
}

export function useStore(injectKey = storeKey) {
  return inject(injectKey)
}
