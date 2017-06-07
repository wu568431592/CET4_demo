<template>
    <div id="creat-finish">
      <header-lg bigTitle="CET-4" noteTitle="我爱背单词"></header-lg>
      <div class="padding-sm"></div>
      <div class="padding-md">
        <div class="text-size-lg">真实姓名</div>
        <div class="padding-sm"></div>
        <div><input type="text" class="inputs" v-model="name"></div>
        <div class="padding-sm"></div>
        <div class="text-size-lg">注册手机号</div>
        <div class="padding-sm"></div>
        <div><input type="tel" class="inputs" v-model="mobile" onkeyup="this.value=this.value.replace(/\D/g,'')"></div>
      </div>
      <div class="radio-sm padding-md">
        <ul>
          <li class="radioSm active" id="data-1" @click="sexSelect('data-1')">
            <div class="context">
              男
            </div>
          </li>
          <li class="radioSm noactive" id="data-0" @click="sexSelect('data-0')">
            <div class="context">
              女
            </div>
          </li>
        </ul>
      </div>
      <div class="padding-md"></div>
      <diy-button @click.native ="goCreatSuccess" val="完成注册" color="orange" class="diy-btn"></diy-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource);
  import headerLg from '../components/header-lg.vue'
  import diyButton from '../components/diy-button.vue'
    export default {
        name:'creat-finish',
        data:function(){
            return{
              mobile:'13333333333',
              name:'john',
              sex:'1'
          }
        },
        components:{headerLg,diyButton},
        methods:{
          goCreatSuccess:function(){
              if(this.name !='' && this.mobile !=''){
                  var formData = new FormData()
                  formData.append('name',this.name);
                  formData.append('mobile',this.mobile);
                  formData.append('sex',this.sex);
                  formData.append('examTime',this.$parent.examTime);
                  formData.append('preExamDay',this.$parent.preExamDay);
                  this.$http.post('http://'+this.$store.state.serverIP+'/json/post_register.php',formData).then(function(response){
                      if(response.data == 1){
                        this.$router.push({path:'/CreatSuccess'})
                      }
                  },function(aaa){
                      this.$router.push({path:'/error'})
                  })
              }
          },
          sexSelect:function(data){
            var me = document.getElementsByClassName('radioSm');
            for(var i = 0;i<me.length;i++){
              me[i].setAttribute('class','radioSm noactive');
            }
            document.getElementById(data).setAttribute('class','radioSm active');
            this.sex = data.replace(/data-/g,'');
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  .radio-sm{
    ul{
      overflow: hidden;
      li{
        float:left;
        width:50px;
        height:42px;
        line-height: 30px;
        text-align: center;
        padding:5px;
        margin:0 20px 20px 0;
      }
      .active{
        border:1px solid @green;
        div{
          background-color:@green;
          color:@white;
        }
      }
      .noactive{
        border:1px solid transparent;
        div{
          background-color:@gray-lighter;
          color:@black;
          border:1px solid @gray;
        }
      }
    }
  }
  .inputs{
    width:100%;
    font-size:100%;
    color:@gray-dark;
    height:30px;
    outline: none;
    text-indent:5px;
    border:1px solid @gray-light;
  }
</style>
