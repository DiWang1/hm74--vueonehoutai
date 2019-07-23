import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
  // headers: { Authorization: 'Bearer ' + JSON.stringify(window.sessionStorage.getItem('hm74--vueonehoutai')).token }
})

// axios请求拦截,防止页面崩溃const instance = axios.create({
// baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
// headers: { Authorization: 'Bearer ' + JSON.stringify(window.sessionStorage.getItem('hm74--vueonehoutai')).token }
// })为什么官方文档上是axios开头而这是instance呢,因为自定义了axios把他赋给了instance,所以是instance开头
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么     给头部加上验证信息和判断
  const user = window.sessionStorage.getItem('hm74--vueonehoutai')
  if (user) {
    // 如果获取的数据没有携带token那么说明他是第一次注册,需要加上token
    config.headers = { Authorization: 'Bearer ' + JSON.stringify(user).token }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// axios响应拦截器
// 响应拦截
instance.interceptors.response.use(response => response, error => {
  // 做一些事情
  if (error.response.status === 401) {
    // hash 哈希   是url后  #开始的字符串
    location.hash = '#/login'
  }
  return Promise.reject(error)
})
export default instance
