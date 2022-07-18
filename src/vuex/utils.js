// 该函数遍历对象中的函数，并返回函数名(key)的执行方法(func)
// 比如： key: double  func: (state) => state.count * 2
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => {
    fn(key, obj[key]) // key func
  })
}
