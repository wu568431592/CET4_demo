<template>
    <div id="ReviseDegin">
        <face></face>
        <div class="main margin-sm padding-md">
            <h3>复习的规则：</h3>
            <div class="padding-sm"></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores beatae, consequuntur cum cumque dolorum.</h3>
          <div class="padding-sm"></div>
          <ul>
            <li>1.Lorem ipsum dolor sit amet</li>
            <li>2.Lorem ipsum dolor sit amet</li>
            <li>3.Lorem ipsum dolor sit amet</li>
          </ul>
          <div class="padding-sm"></div>
          <p>您需要足够的经验才能启动计划</p>
          <div class="padding-sm"></div>
          <div class="padding-md">
            <input type="checkbox" name='isShow' id="isShow" v-model="readReviseRule"><label for="isShow">以后不再提醒</label>
          </div>
        </div>
        <div class="padding-lg"></div>
        <diy-button @click.native ="go([$router,'Revise'])" val="开始吧" color="orange" class="diy-btn"></diy-button>
    </div>
</template>

<script>
  import face from '../components/face.vue'
  import diyButton from '../components/diy-button.vue'
  import {mapState,mapMutations} from 'vuex'
    export default {
      name:'ReviseDegin',
      components:{face,diyButton},
      data(){
          return{
              readReviseRule:false
          }
      },
      methods:{
        ...mapMutations([
            'go'
        ])
      },
      watch:{
        readReviseRule:function(newval){
          var formdata = new FormData();
          if(newval == true){
            formdata.append('readReviseRule',1);
            this.$http.post('http://'+this.$store.state.serverIP+'/json/updateUser.php',formdata).then(function(response){
              if(response.data == 0){
                  this.$router.push({path:'/error'});
              }
            },function(error){
                  this.$router.push({path:'/error'});
            })
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #ReviseDegin{
    height:100%;
    .main{
      background:#eee;
      ul li{
        font-size: 120%;
      }
      input{
        outline:none;
      }
    }
  }

</style>
