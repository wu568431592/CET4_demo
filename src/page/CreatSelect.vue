<template>
  <div id="creatSelect">
    <div class="padding-md">
      <div class="text-size-lg">选择考试时间</div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note">
        CET考试时间定于每年6月和12月的第三个星期六
      </div>
      <div class="padding-sm"></div>
      <div class="text-size-md">2017年</div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note">
        选择其他的考试时间
      </div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note-green" @click="changeRadioMore">
        More
      </div>
      <div class="padding-sm"></div>
      <div class="radio-lg">
        <ul>
          <li class="radioLg active" id="data-2017-6-17" @click="dateSelect('data-2017-6-17')">
            <div class="context">
              6月17日
            </div>
          </li>
          <li class="radioLg noactive" id="data-2017-12-16" @click="dateSelect('data-2017-12-16')">
            <div class="context">
              12月16日
            </div>
          </li>
          <li v-show="radioLgMore" class="radioLg noactive" id="data-2018-6-16" @click="dateSelect('data-2018-6-16')">
            <div class="context">
              12月16日
            </div>
          </li>
          <li v-show="radioLgMore" class="radioLg noactive" id="data-2018-12-16" @click="dateSelect('data-2018-12-16')">
            <div class="context">
              12月16日
            </div>
          </li>
        </ul>
      </div>
      <div class="cf"></div>
      <div class="text-size-md">预留备考时间</div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note">
        设置考试前多少天完成考试计划
      </div>
      <div class="padding-sm"></div>
      <div class="radio-md">
        <ul>
          <li class="radioMd active" id="data-90" @click="timeSelect('data-90')">
            <div class="context">
              90天
            </div>
          </li>
          <li class="radioMd noactive" id="data-60" @click="timeSelect('data-60')">
            <div class="context">
              60天
            </div>
          </li>
          <li class="radioMd noactive" id="data-30" @click="timeSelect('data-30')">
            <div class="context">
              30天
            </div>
          </li>
        </ul>
      </div>
    </div>
    <diy-button @click.native="goCreatFinish" val="开始吧" color="orange"></diy-button>
  </div>
</template>

<script>
  import headerLg from '../components/header-lg.vue'
  import diyButton from '../components/diy-button.vue'
  export default {
    name:'creatSelect',
    data:function(){
        return{
          radioLgMore:false
        }
    },
    methods:{
      goCreatFinish:function(){
        this.$router.push({path:'/CreatFinish'})
      },
      dateSelect:function(data){
        var me = document.getElementsByClassName('radioLg');
        for(var i = 0;i<me.length;i++){
            me[i].setAttribute('class','radioLg noactive');
        }
        document.getElementById(data).setAttribute('class','radioLg active');
        this.$parent.examTime = data.replace(/data-/g,'');
      },
      timeSelect:function(data){
        var me = document.getElementsByClassName('radioMd');
        for(var i = 0;i<me.length;i++){
          me[i].setAttribute('class','radioMd noactive');
        }
        document.getElementById(data).setAttribute('class','radioMd active');
        this.$parent.preExamDay = data.replace(/data-/g,'');
      },
      changeRadioMore:function(){
          this.radioLgMore = !this.radioLgMore;
      }
    },
    components:{headerLg,diyButton}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #creatSelect{
    background-image: url(../assets/images/tartan.png);
  }
  .radio-lg{
    ul{
      overflow: hidden;
      li{
        float:left;
        width:100px;
        height:100px;
        line-height: 88px;
        text-align: center;
        padding:5px;
        margin:0 20px 20px 0;
      }
      .active{
        border:1px solid @green;
      div{
        background-color:@green;
        color:@white;
      }
      }
      .noactive{
        border:1px solid transparent;
      div{
        background-color:@gray-lighter;
        color:@black;
        border:1px solid @gray;
      }
      }
    }
  }
  .radio-md{
    ul{
      overflow: hidden;
      li{
        float:left;
        width:50px;
        height:50px;
        line-height: 38px;
        text-align: center;
        padding:5px;
        margin:0 20px 20px 0;
      }
      .active{
        border:1px solid @green;
        div{
          background-color:@green;
          color:@white;
        }
      }
      .noactive{
        border:1px solid transparent;
        div{
          background-color:@gray-lighter;
          color:@black;
          border:1px solid @gray;
        }
      }
    }
  }
</style>
