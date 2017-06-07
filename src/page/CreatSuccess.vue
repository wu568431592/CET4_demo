<template>
    <div id="creat-success">
      <header-sm bigTitle="CET-4" show="y"></header-sm>
      <div class="padding-lg main">
        <div class="padding-lg"></div>
        <div class="padding-lg"></div>
        <div class="padding-lg"></div>
        <div class="text-size-lg">注册成功</div>
        <div class="text-size-md"><span class="text-red">+600</span>经验</div>
      </div>
      <diy-button @click.native ="goIndex" val="查看计划" color="orange" class="diy-btn"></diy-button>
    </div>
</template>

<script>
    import headerSm from '../components/header-sm.vue'
    import diyButton from '../components/diy-button.vue'
    export default {
        name:'creat-success',
        components:{headerSm,diyButton},
        methods:{
          goIndex:function(){
              this.$router.push({path:'/index'})
              //document.open('index.html','_self')
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/css/variables.less';
  .diy-btn{
    position: fixed;
    bottom:0px;
    left:0px;
  }
  .main{
    text-align: center;
  }
  .text-red{
    color:@red;
  }
</style>
