import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Router1 from '@/components/router1'
import News from '@/components/news'
import Font from '@/components/font'
import F404 from '@/components/404'

import elementUI from '@/components/elementUI'
import eleLayout from '@/components/element/layout'
import eleForm from '@/components/element/form'
import eleTable from '@/components/element/table'


import mintUI from '@/components/mintUI'

Vue.use(Router)

export default new Router({
  routes: [
    // 会匹配所有路径
    {path: '*',component:F404},
    // 会匹配以 `/user-` 开头的任意路径
    {path: '/user-*'},
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {
      path: '/index',name: 'index',component:resolve=>(require(['@/components/index'],resolve)),
      children:[  
          {path: '/text',name: 'text',component: resolve=>(require(['@/components/tpl/text'],resolve))},
          {path: '/html',name: 'html',component: resolve=>(require(['@/components/tpl/html'],resolve))},
          {path: '/js',name: 'js',component: resolve=>(require(['@/components/tpl/js'],resolve))}, 
          {path: '/filter',name: 'filter',component: resolve=>(require(['@/components/tpl/filter'],resolve))}, 
          {path: '/directives',name: 'directives',component: resolve=>(require(['@/components/tpl/directives'],resolve))}, 
          {path: '/param',name: 'param',component: resolve=>(require(['@/components/tpl/param'],resolve))},
          {path: '/modifiers',name: 'modifiers',component: resolve=>(require(['@/components/tpl/modifiers'],resolve))},
          {path: '/class',name: 'class',component: resolve=>(require(['@/components/tpl/class'],resolve))}, 
      ]
    },

    {path: '/router1',name: 'router1',component: Router1,
        children: [
          {path: 'Home',name: 'Home',component: Home},
          {path: 'news',name: 'news',component: News}
        ]
    },
    {path: '/basics',name: 'basics',component: resolve=>(require(['@/components/basics'],resolve))},
    {path: '/vis',name: 'vis',component: resolve=>(require(['@/components/vis'],resolve))},
    {path: '/vis2',name: 'vis',component: resolve=>(require(['@/components/vis2'],resolve))},
    {path: '/elementUI',name: 'elementUI',component: elementUI,
      children:[
        {path:'layout',name:eleLayout,component:eleLayout},
        {path:'form',name:eleForm,component:eleForm},
        {path:'table',name:eleTable,component:eleTable}
      ]
    },
    {path: '/mintUI',name: 'mintUI',component: mintUI},
    {path: '/font',name: 'font', component: Font}
  ]
})
