// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
require('!style-loader!css-loader!less-loader!./assets/css/main.less')
require('!style-loader!css-loader!less-loader!./assets/css/animate.css')

//Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el:'#app',
  router,
  store,
  data:{
    examTime:'2017-6-17',
    preExamDay:'90',
    come:0
  },
  template:`
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  `,
  beforeCreate:function(){
    //和服务器终端连接
    if(this.$store.state.serverIP == 0){
      router.push({path:'/error'})
    }
    //判断用户是否注册
    if(this.$store.state.newbi == 1){
      router.push({path:'/index'});
    }else{
      router.push({path:'/Creat'})
    }
  }
})
