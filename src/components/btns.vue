<template>
    <div id="btns" class="padding-lg">
      <div class="btns-box">
        <!--<div class="left-btn" @click="toLeft">{{leftVal}}</div>-->
        <!--<div class="right-btn" @click="toRight">{{rightVal}}</div>-->
        <div class="left-btn" @click="go([$router,leftGo])">{{leftVal}}</div>
        <div class="right-btn" @click="go([$router,rightGo])">{{rightVal}}</div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapMutations} from 'vuex'
    export default {
        name:'btns',
        props:['leftVal','rightVal','leftGo','rightGo'],
        methods:{
            toLeft:function(){
                this.$router.push({path:'/'+this.leftGo})
            },
            toRight:function(){
                this.$router.push({path:'/'+this.rightGo})
            },
            ...mapMutations([
              'go'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #btns{
    width:100%;
    text-align: center;
    overflow:hidden;
    .btns-box{
      width:300px;
      margin:0 auto;
    }
    .left-btn{
      float:left;
      color:#fff;
      width:150px;
      height:40px;
      line-height:40px;
      border:none;
      background: @green;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    .right-btn{
      float:left;
      color:#fff;
      width:150px;
      border:none;
      height:40px;
      line-height:40px;
      background: @orange;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
</style>
