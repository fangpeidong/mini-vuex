import { forEachValue } from '../utils'

export function setupMutations(store, mutations) {
  store.mutations = {}

  forEachValue(mutations, (key, func) => {
    // 监听方法 （把回调函数推入目标事件的监听函数队列里去）
    store.mutations[key] = payload => {
      func.call(store, store.state, payload)
    }
  })

  //订阅方法
  store.commit = (type, payload) => {
    // 逐个调用队列里的回调函数
    store.mutations[type](payload)
  }
}
