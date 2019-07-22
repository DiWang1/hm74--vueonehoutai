import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/',
  headers: { Authorization: 'Bearer ' + JSON.stringify(window.sessionStorage.getItem('hm74--vueonehoutai')).token }
})
export default instance
