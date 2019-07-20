import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0',
  headers: { 'X-Custom-Header': 'foobar' }
})
export default instance
