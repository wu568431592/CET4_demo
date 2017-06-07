<template>
    <div id="diy-button">
        <button class="text-size-md" id="btn" v-bind:class="colorName">{{val}}</button>
    </div>
</template>

<script>
    export default {
        name:'diy-button',
        props:['val','color','position'],
        computed:{
            colorName:function(){
                if(this.color =='orange'){
                    return this.colorName ='orange'
                }else if(this.color=='green'){
                    return  this.color = 'green'
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/css/variables.less';
  #diy-button{
  width:100%;
  line-height:80px;
  text-align:center;
  background-image:url(../assets/images/opacity.png);
    button{
      margin: 0 auto;
      outline: none;
      color:@white;
      border:none;
      letter-spacing:2px;
      padding:10px 100px;
      border-radius:@border-radius;
    }
  }
  .orange{
    background-color:@orange;
  }
  .green{
    background-color:@green;
  }</style>
