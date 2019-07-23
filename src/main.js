import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 导入路由模块
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios,挂载到vue的原型上,挂载到原型上之后可以方便在任何地方调用
// import axios from 'axios'
import axios from '@/api/axios'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
