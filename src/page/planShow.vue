<template>
    <div id="planShow">
        <face></face>
        <div class="padding-sm"></div>
        <div class="form-box">
          <ul id="">
            <li v-for="(word,index) in forms" v-bind:class="[formsli]" @click="changeshow($event)">
              <div class="title">{{index+1}}</div>
              <div class="text-size-big text-align-center form">{{word.form}}</div>
              <div class="padding-sm text-size-md text-align-left ipa">{{word.ipa}}</div>
              <div class="padding-sm text-size-md text-align-left meaning">{{word.meaning}}</div>
            </li>
          </ul>
        </div>
        <div class="padding-sm"></div>
        <countDown></countDown>
        <div class="padding-sm"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import face from '../components/face.vue'
    import countDown from '../components/countDown.vue'
    export default {
        name:'planShow',
        components:{face,countDown},
        data(){
            return{
                now:0,
                forms:[],
                formsli:'formsli'
            }
        },
        methods:{
          ...mapGetters([
            'getForms'
          ]),
          changeshow:function(event){
            var me = event.target.parentNode;
            if (me.getAttribute('class') == 'formsli showmore'){
                me.setAttribute('class','formsli');
                return;
            }
            var li = document.getElementsByClassName('formsli');
            for (var i = 0; i<li.length ;i++){
                console.log(1)
                li[i].setAttribute('class','formsli')
            };
            me.setAttribute('class','formsli showmore')
          }
        },
        mounted:function(){
            var formsTemp = this.$store.getters.getForms;
            for (var i in formsTemp){
                this.forms.push(formsTemp[i]);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/css/variables.less';
  #planShow{
    ul{
      li{
        position: relative;
        padding:15px;
        border:5px solid #eee;
        .text-size-big{
          font-size:300%;
          color:@green
        }
        .ipa{
          display: none;
        }
        .meaning{
          display: none;
        }
        .title{
          color:#fff;
          width:30px;
          height:30px;
          text-align: center;
          line-height: 30px;
          position: absolute;
          top:-5px;
          left:-5px;
          background: @green;
        }
      }
      li.showmore{
        background: @orange;
        .form{
          color:#fff;
        }
        .ipa{
          display: block;
          color:@white;
        }
        .meaning{
          display: block;
          color:@white;
        }
        .title{
          color:#fff;
          width:30px;
          height:30px;
          text-align: center;
          line-height: 30px;
          position: absolute;
          top:0px;
          left:0px;
          font-size:150%;
          background: @orange;
        }
      }
    }
  }
</style>
