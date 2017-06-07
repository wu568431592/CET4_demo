<template>
    <div id="index">
      <header-sm bigTitle="CET-4" show="y"></header-sm>
      <left-menu v-show="this.$store.state.showleft"></left-menu>
      <face></face>
      <div class="showmore" @click=""></div>
      <div class="padding-md"></div>
      <precent class="animated swing" @click.native="go([$router,'plane'])"></precent>
      <btns leftVal="继续计划" rightVal="复习加经验" class="btns" leftGo="Creat" rightGo="ReviseDegin"></btns>
    </div>
</template>

<script>
    import headerSm from '../components/header-sm.vue'
    import leftMenu from '../components/left-menu.vue'
    import face from '../components/face.vue'
    import precent from '../components/precent.vue'
    import btns from '../components/btns.vue'
    import {mapState,mapGetters,mapMutations} from 'vuex'
    export default {
        name:'index',
        data:function(){
            return{

            }
        },
        methods:{
            goCreat:function(){
                this.$router.push({path:'/Creat'})
            },
            ...mapMutations([
                'go'
            ])
        },
        components:{headerSm,leftMenu,face,precent,btns},
        mounted(){
            if(this.$parent.come !=0){
                var xmlhttp,state;
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4 && xmlhttp.status==200){
                    state = eval('('+xmlhttp.responseText+')')
                    //console.log('success')
                  }else{

                  }
                }
                xmlhttp.open('GET','http://'+this.$store.state.serverIP+'/json/users.php?date='+this.stime,true);
                //console.log(this.$store.state.serverIP)
                //xmlhttp.open('GET','http://192.168.72.82/json/users.php',false);
                xmlhttp.send();
                //console.log(state)
                this.$store.state.precent = state.precent;
            }
        },
        computed:{
          ...mapGetters([
              'stime'
          ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
  @import "../assets/css/variables.less";
  #index{
    width:100%;
  }
  .showmore{
      width:100%;
      height:50px;
      background: url(../assets/images/more.png) no-repeat center;
  }
  .btns{
    position: fixed;
    bottom:0px;
  }
</style>
