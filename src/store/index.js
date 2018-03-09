/**
 * Created by sks on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state;
var xmlhttp =new XMLHttpRequest();
xmlhttp.onreadystatechange =function(){
  if( xmlhttp.readyState==4 && xmlhttp.status==200 ){
      state = eval('('+xmlhttp.responseText+')');
  }else{
      state = {serverIP:0}
  }
}
xmlhttp.open('GET','http://172.17.160.186/json/users.php',false);
xmlhttp.send();
const getters ={
  stime:function(){
    var mydate = new Date();
    return mydate.getTime();
  },
  getForms:function(){
    var forms;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        forms = eval('(' + xmlhttp.responseText + ')');
      } else {
        forms = {}
      }
    }
    xmlhttp.open('GET', 'http://172.17.160.186/json/plan.php', false);
    xmlhttp.send();
    return forms
  }
}
const mutations ={
    go(state,s){
        s[0].push({path:'/'+s[1]});
    },
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
