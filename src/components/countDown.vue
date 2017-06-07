<template>
    <div id="countDown">
      <div class="countdown-box padding-sm">
        <div class="text-align-center">距离CET4考试还有</div>
        <div class="text-align-center text-size-lg count">
          {{nowcountdown}}DAY
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'countDown',
        data(){
            return{
              nowcountdown:124
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #countDown{

    .countdown-box{
      border:5px solid #eee;
      width:200px;
      margin:0 auto;
      background: linear-gradient(270deg,@green 0%,@turquoise 100%;);
      .count{
        color:@white;
      }
    }
  }
</style>
