// 配置路由的五个步骤
// 1.下载路由
// 2.导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入Login组件
import Login from '../views/login/index.vue'
// 引入首页home组件
import Home from '../views/home/index.vue'
// 引入welcome组件
import Welcome from '../views/welcome/index.vue'
// 引入404组件
import NotFound from '../views/404/index.vue'
// 3.注册路由
Vue.use(VueRouter)
// 4.配置路由规则,初始化路由对象
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '', component: Welcome },
        { name: '404', path: '*', component: NotFound }
      ]
    }
  ]
})
// 5.导出路由给其他组件
export default router
