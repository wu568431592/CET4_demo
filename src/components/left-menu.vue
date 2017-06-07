<template>
    <div id="left-menu">
        <div id="menu" class="padding-sm">
          <h3 class="text-align-center">CET-4</h3>
          <h4 class="text-align-center">我爱背单词</h4>
          <div class="padding-sm"></div>
          <countDown class="counts"></countDown>
        </div>
        <div id="zz" @click="closeleft"></div>
    </div>
</template>

<script>
    import countDown from './countDown.vue'
    export default {
        name:'left-menu',
        methods:{
            closeleft:function(){
                this.$store.state.showleft =false;
            }
        },
        components:{countDown}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #zz{
    z-index:99;
    width:100%;
    height:100%;
    position:fixed;
    top:0px;
    left:0px;
    background-color:@black;
    opacity:0.2;
  }
  #menu{
    z-index:100;
    width:70%;
    height:100%;
    position:fixed;
    top:0px;
    left:0px;
    background-color:@gray-dark;
    h3{
      margin-top:30px;
      color:@white;
      font-size: 300%;
    }
    h4{
      color:@white;
      font-size: 150%;
    }
    .counts{
      position: absolute;
      bottom:20px;
      left:30px;
    }
  }
</style>
