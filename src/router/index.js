import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import Creat from '../page/Creat.vue'
import CreatSelect from '../page/CreatSelect.vue'
import CreatFinish from '../page/CreatFinish.vue'
import CreatSuccess from '../page/CreatSuccess.vue'
import ReviseDegin from '../page/ReviseDegin.vue'
import error from '../page/error.vue'
import Revise from '../page/Revise.vue'
import plane from '../page/plane.vue'
import planshow from '../page/planshow.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/Creat',component:Creat},
    {path:'/CreatSelect',component:CreatSelect},
    {path:'/CreatFinish',component:CreatFinish},
    {path:'/CreatSuccess',component:CreatSuccess},
    {path:'/ReviseDegin',component:ReviseDegin},
    {path:'/error',component:error},
    {path:'/Revise',component:Revise},
    {path:'/plane',component:plane},
    {path:'/planshow',component:planshow},
    {path:'*',component:error}
  ]
})
