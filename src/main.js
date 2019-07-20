import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 导入路由模块
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
