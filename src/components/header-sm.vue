<template>
  <div id="header-sm" class="padding-sm">
    <h3>{{bigTitle}}</h3>
    <div v-show="moreshow" id="showleft" @click="doshowleft">
        <img src="../assets/images/menu.png" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name:'header-sm',
    props:['bigTitle','show'],
    computed:{
      moreshow:function(){
            if(this.show == 'y'){
                return this.moreshow = true;
            }else{
                return this.moreshow = false;
            }
      }
    },
    methods:{
      doshowleft:function(){
        this.$store.state.showleft = !this.$store.state.showleft;
      }
    }
  }
</script>
<style scoped lang="less">
  @import '../assets/css/variables.less';
  #header-sm{
    height:65px;
    box-shadow: #ddd 0 3px;
    width:100%;
    background: linear-gradient(270deg,@green 0%,@turquoise 100%);
    color:@white;
    h3{
      margin-top: 7px;
      font-size:200%;
      float:left;
    }
    div{
      margin-top:10px;
      float:right;
    }
  }

</style>
