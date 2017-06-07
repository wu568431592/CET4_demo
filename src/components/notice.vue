<template>
    <div id="notice">
      {{numText}}
    </div>
</template>

<script>
    export default {
        name:'notice',
        props:['num'],
        computed:{
            numText:function(){
                var tempNum = parseInt(this.num);
                if(tempNum >99){
                    return 99
                }else{
                    return tempNum
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/css/variables.less';
  #notice{
    background-color:#eb6319;
    color:@white;
    font-size: 40%;
    text-align:center;
    border-radius:50%;
    padding:5px;
    min-width:15px;
    min-heigth:15px;
  }
</style>
