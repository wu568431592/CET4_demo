<template>
    <div id="Revise">
      <div class="xp text-size-md">经验值{{this.$store.state.xp}}</div>
      <div class="addxp text-orange text-size-lg animated swing" v-show="xpshow">+1</div>
      <div class="padding-lg"></div>
      <div>
        <div class="text-size-lg">请输入听到的单词</div>
        <div class="padding-sm"></div>
        <input type="text" class="word" :placeholder="form" v-model="formWrite">
        <div class="sm" id="meaning">{{meaning}}</div>
        <div class="padding-lg text-align-center">
          <img src="../assets/images/sound.png" id="soundlogo" @click="play">
          <audio id="bgMusic" autoplay="true">
            <source :src="nsrc" type="audio/mp3">
          </audio>
        </div>
      </div>
      <div class="padding-lg"></div>
      <div class="padding-lg"></div>
      <diy-button val="下一题" color="green" @click.native="check"></diy-button>
    </div>
</template>

<script>
  import diyButton from '../components/diy-button.vue'
    export default {
        name:'Revise',
        components:{diyButton},
        data(){
            return{
                form:'',
                meaning:'',
                nsrc:'',
                formWrite:'',
                xpshow:false,
                times:5
            }
        },
        mounted:function(){
          this.getform()
        },
        methods:{
            getform:function(){
              var me = this;
              if (this.times > 0){
                var xml,state;
                xml = new XMLHttpRequest();
                xml.onreadystatechange = function(){
                  //console.log(xml.readyState);
                  if(xml.readyState == 4){
                    if(xml.status == 200){
                      state = eval('('+xml.responseText+')');
                    }else{
                      me.$router.push({path:'/error'})
                    }
                  }
                  //TODO　下面代码有问题
//                if( xml.readyState == 4 && xml.status == 200 ){
//                    console.log(xml.responseText);
//                    state = eval('('+xml.responseText+')');
//                }else{
//                    console.log('error');
//                    me.$router.push({path:'/error'})
//                }
                }
                xml.open('GET','http://'+this.$store.state.serverIP+'/json/revise.php',false);
                xml.send();
                this.form = state.form;
                this.meaning = state.meaning;
                this.nsrc = 'http://192.168.81.1/sound/'+state.form+'.mp3';
                this.times -- ;
              }else{
                me.$router.push({path:'/index'})
              }

            },
            play:function(){
              var audio = document.getElementById('bgMusic');
              audio.currentTime = 0;
              audio.play();
            },
            check:function(){
                if(this.form == this.formWrite){
                    this.xpshow =true;
                    this.getform();
                    this.$store.state.xp = parseInt(this.$store.state.xp)+1;
                    this.formWrite  = ''  ,
                    setInterval(()=>{
                        this.xpshow = false
                    },2000);
                }else{
                    console.log('答错了')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #Revise{
    padding:20px;
    .addxp{
      position:fixed;
      top:20px;
      right:20px;
    }
    .word{
      width:100%;
      height:35px;
      font-size:120%;
      border:0px;
      border-bottom :1px solid @gray-light;
      outline:none;
      text-indent:10px;
      color:@orange;
    }
    #soundlogo{
      width:30%;
    }
    #meaning{
      padding:10px;
      font-size: 150%;
    }
  }
</style>
