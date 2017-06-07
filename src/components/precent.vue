<template>
    <div id="precent">
      <div class="tempText">{{precentText}}</div>
      <div id="main">
        <div id="da" v-show="da"></div>
        <div id="xiao" v-show="xiao"></div>
        <div id="hui"></div>
        <div id="circlestext">{{precentTextSay}}</div>
        <div id="circles">
          <div id="pre" class="bg-master-gradient"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'prencent',
        data(){
            return{
              da:true,
              xiao:true,
              precentTextSay:'已完成',
              precent:this.$store.state.precent
            }
        },
        computed:{
          precentText:function(){
                if(this.precent == 0){
                    this.precentTextSay = '点击这里开始'
                }
                return this.precent +'%'
            }
        },
        methods:{
            change(){
                if(this.precent <50){
                    //var xiao = parseInt(180-this.precent*1.8);
                    var xiao = parseInt(180+360*this.precent/100);
                    document.getElementById('xiao').style.transform = 'rotate('+xiao+'deg)';
                }else{
                    var da = parseInt((this.precent-50)*3.6);
                    document.getElementById('xiao').style.background = '#90d5b9';
                    document.getElementById('xiao').style.transform = 'rotate(-180deg)';
                    document.getElementById('da').style.transform = 'rotate('+da+'deg';
                }
            }
        },
        mounted:function(){
            this.change()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  *{
    box-sizing: content-box;
  }
  .bg-master-gradient{
    background: linear-gradient(270deg,@green 0%,@turquoise 100%);
  }
  .tempText{
    color:@white;
    position: absolute;
    z-index:80;
    width:100%;
    text-align: center;
    margin-top: 65px;
    font-size:150%;
  }
  #precent{
    width:100%;
  }
  #circlestext{
    position:absolute;
    z-index:20;
    color:#fff;
    margin:0 auto;
    line-height: 210px;
    width:180px;
    text-align:center;
  }
  #da{
    position:absolute;
    z-index: 4;
    width:180px;
    height:180px;
    transform: rotate(0deg);
    margin-top:-1px;
    clip:rect(0px,90px,180px,0px);
    border-radius: 180px;
    background: #f4f4f4;
  }
  #xiao{
    position:absolute;
    z-index: 5;
    width:180px;
    height:180px;
    transform: rotate(180deg);
    clip:rect(0px,90px,180px,0px);
    border-radius: 180px;
    background: #f4f4f4;
  }
  #circles{
    width:155px;
    height:155px;
    padding:10px;
    border-radius:155px;
    border:2px solid #90d5b9;
    background: #90d5b9;
  }
  #pre{
    width:150px;
    height:150px;
    border-radius:150px;
    line-height:150px;
    text-align:center;
    color:#fff;
    font-size: 150%;
    margin-top:3px;
    margin-left:2.5px;
    position: absolute;
    z-index:5;
  }
  #main{
    padding:0px 25%;
    text-align: center;
    margin:0 auto;
  }
</style>
