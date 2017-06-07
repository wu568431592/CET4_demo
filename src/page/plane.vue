<template>
    <div id="plane">
        <div id="bar" class="padding-md text-align-right">
          <span class="text-size-lg">{{now+1}}</span>/<span>{{allCount}}</span>
        </div>
        <div class="padding-sm"></div>
        <div class="padding-md text-size-big text-red">
          {{nform}}
        </div>
        <div class="padding-md">{{nipa}}</div>
        <div class="padding-md">{{nmeaning}}</div>
        <div class="padding-md footer">
          <div class="fl">学习模式</div>
          <div class="rl">
            <img src="../assets/images/sound.png" alt="">
          </div>
          <audio id="bgMusic" autoplay="true">
            <source :src="nsrc" type="audio/mp3">
          </audio>
        </div>

        <div id="autoplaydiv" v-show="autoplay" @click="beginStudy">
          <div class="text-size-lg text-align-center">
              学习模式
          </div>
          <div class="text-size-lg text-align-center">
            单词会自动播放
          </div>
          <div class="text-size-lg text-align-center">
            请用心记忆
          </div>
          <div class="text-size-lg text-align-center">
            go
          </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name:'plane',
        data(){
            return{
                nform:'china',
                nipa:'[a]',
                nmeaning:'n. 瓷器',
                nsrc:'',
                now:0,
                allCount:12,
                autoplay:true,
                forms:[],
                returnPlay:0
            }
        },
        beforeMount:function(){
            this.forms = [];
        },
        mounted:function(){
            var formsTemp = this.$store.getters.getForms;
            for (var i in formsTemp){
                  this.forms.push(formsTemp[i]);
            }
            this.allCount = this.forms.length;
        },
        methods:{
          beginStudy:function(){
              this.autoplay=false;
              this.playreturn();
          },
          playreturn:function(){
              this.nform = this.forms[this.now].form;
              this.nipa = this.forms[this.now].ipa;
              this.nmeaning = this.forms[this.now].meaning;
              if(this.forms.length<this.allCount){
                  this.allCount = this.forms.length
              }
              var audio = document.getElementById('bgMusic');
              audio.src='http://'+this.$store.state.serverIP+'/sound/'+this.nform+'.mp3';
              var timer=setInterval(()=>{
                  if(this.returnPlay < 3 && audio.ended == true){
                    audio.play();
                    this.returnPlay++
                  }else{
                    clearInterval(timer);
                  }
              },1000)
          },
          ...mapGetters([
            'getForms'
          ])
        },
        watch:{
            returnPlay:function(val,oldval){
                if(val == 3){
                    setTimeout(()=>{
                        if(this.now<this.allcount-1){
                            this.now++;
                            this.playreturn();
                            this.returnPlay = 0;
                        }else{
                            this.$router.push({path:'planShow'})
                        }
                    },2000)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #plane{
    width:100%;
    height:100%;
    .text-size-big{
      font-size:450%
    }
    .footer{
      width:100%;
      position:fixed;
      bottom:5px;
      .fl{
        line-height:70px;
      }
    }
  }
  #autoplaydiv{
    background: @gray-darker;
    width:100%;
    z-index:9;
    position:fixed;
    top:0px;
    color:#fff;
    height:100%;
    padding-top:150px;
    div{
      margin-bottom: 25px;
    }
  }
</style>
