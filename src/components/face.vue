<template>
    <div id="face">
        <div class="fl faceimg">
          <img :src="this.$store.state.headimgurl" alt="">
        </div>
        <div class="fl showmain">
            <h3 id="showname">
              <span>{{showname}}<notice :num="$store.state.notice" v-show="noticeShow" class="notice"></notice></span>
            </h3>
            <h4>
              记忆力：<span class="text-orange">{{$store.state.memory}}</span>
              经验值：<span class="text-green">{{$store.state.xp}}</span>
            </h4>
        </div>
        <div class="cf"></div>
    </div>
</template>

<script>
  import notice from '../components/notice.vue'
    export default {
        name:'face',
        components:{notice},
        props:['openid'],
        computed:{
            noticeShow:function(){
                if(this.$store.state.notice == 0){
                    return false
                }else{
                    return true
                }
            },
            showname:function(){
                var showname= this.$store.state.name;
                if(showname.length > 15){
                    showname = showname.substring(0.8)+'...';

                }
                return showname
            }
        },
        mounted:function(){
            if(this.showname.length<5){
                document.getElementById('showname').style.fontSize = '200%'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #face{
    padding:20px;
    width:100%;
  }
  .faceimg{
    width:20%;
  }
  img{
    width:100%;
    border:6px solid #eae9e9;
  }
  .showmain{
    margin-top:10px;
    margin-left:20px;
    width:70%;
    h3{

      font-size:200%;
      width:100%;
      span{
        position: relative;
      }
    }
    h4{
      margin-top:5px;
      font-size:100%;
      span{
        margin-right:10px;
      }
    }

  }
  .notice{
    position: absolute;
    top:-5px;
    right:-15px;
  }
</style>
