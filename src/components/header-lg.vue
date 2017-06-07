<template>
  <div id="header-lg" class="padding-md">
      <h3>{{bigTitle}}</h3>
      <h4>{{noteTitle}}</h4>
  </div>
</template>
<script>
  export default{
      name:'header-lg',
      props:['bigTitle','noteTitle']
  }
</script>
<style scoped lang="less">
  @import '../assets/css/variables.less';
  #header-lg{
    height:200px;
    box-shadow: #ddd 0 3px;
    width:100%;
    background: linear-gradient(270deg,@green 0%,@turquoise 100%);
    color:@white;
    h3{
      margin-top: 30px;
      font-size:300%;
    }
    h4{
      font-size:120%;
      margin-top: 10px;
    }
  }

</style>
