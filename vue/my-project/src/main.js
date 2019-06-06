import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)




// import  './mint-ui/index.js'
import Mock from '@/assets/js/mock/index'

import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false


//路由控制跳转
//beforeEach  全局前置
// router.beforeEach((to, from, next) => {
//     //NProgress.start();
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//     console.log('全局路由监听'+to.path);
//     // if (to.path == '/news') {
//     //   next({path:'/Home'});
//     // }else{
//     	next()
//     // }
//
//     // let user = JSON.parse(sessionStorage.getItem('user'));
//     // if (!user && to.path != '/login') {
//     //     next({ path: '/login' })
//     // } else{
//     //     next()
//     // }
// })

//全局后置
router.afterEach((to, from) => {
  console.log('to'+to);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
