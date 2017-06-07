<template>
    <div id="creat">
      <header-lg bigTitle="CET-4" noteTitle="我爱背单词"></header-lg>
      <div class="text padding-sm">
        <p class="text-size-lg">Hi!</p>
        <p class="text-indent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid culpa dolorum ea eius est, eum hic nihil non numquam officiis possimus provident, quis sed sint sit voluptatem voluptatum.</p>
        <p class="text-indent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur consequuntur culpa dignissimos dolores eligendi, fugit illum quasi ut voluptatem! Cum dolore doloremque harum laborum nisi pariatur quis tenetur totam!</p>
        <p>&nbsp;</p>
        <p class="text-align-right">CET4</p>
      </div>
      <diy-button @click.native ="go([$router,'CreatSelect'])" val="创建计划" color="orange" class="diy-btn"></diy-button>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import headerLg from '../components/header-lg.vue'
  import diyButton from '../components/diy-button.vue'
    export default {
        name:'creat',
        methods:{
//          goCreatSelect:function(){
//            this.$router.push({path:'/CreatSelect'})
//          }
          ...mapMutations([
              "go"
          ])
        },
        components:{headerLg,diyButton}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  .text{
    font-size: 110%;
    padding-bottom: 70px;
  }
  p{
    margin-bottom:10px;
  }
  .diy-btn{
    position:fixed;
    bottom:0px;
    left:0;
  }
</style>
