<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back"><span class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">前途小助手</div>
      <div class="right" @click="next">设置</div>
    </header>
    <div class="content">
      <div class="chatrecord">
        <span class="chat_img"><img src="http://img4.imgtn.bdimg.com/it/u=4265690587,1130425711&fm=26&gp=0.jpg"/></span>
        <p><i class="trangle"></i>xxx小姐/先生，欢迎你~我是你的专属小助手，汇集看准14851248位职场精英的力量，助你实现自己的职业梦想。</p>
      </div>
      <div class="chat_time">14:15</div>
      <div class="chatrecord">
        <span class="chat_img"><img src="http://img4.imgtn.bdimg.com/it/u=4265690587,1130425711&fm=26&gp=0.jpg"/></span>
        <p><i class="trangle"></i>xxx小姐/先生，在看准成长绝不是一个人的战斗，每天与超过百万名位互联网行家共同成长，你才会变得更强大！</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Switch } from 'mint-ui'
import Vue from 'vue'
Vue.use(Switch)

export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    next () {
      this.$router.push({
        path: '/chatsetting'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .right{
    margin-right:0.1rem;
  }
  .chat_time{
    width:0.5rem;
    height:0.3rem;
    line-height:0.3rem;
    border-radius: 0.1rem;
    text-align: center;
    background:#ccc;
    margin:0.2rem auto 0.1rem;
  }
  .chatrecord{
    margin-top:0.2rem;
    padding:0 0.1rem;
    display:flex;
    justify-content: flex-start;
    p{
      position: relative;
      width:60%;
      text-align:justify;
      border:1px solid #ccc;
      padding:0.05rem;
      background:#ccc;
      i{
        display: block;
        position: absolute;
        width:0;
        height:0;
        top:0.1rem;
        left:-0.2rem;
        border-width:0.1rem;
        border-color:transparent #ccc transparent transparent;
        border-style:solid;
      }
    }
  }
  .chat_img{
    width: 0.5rem;
    height:0.5rem;
    border-radius:50%;
    background:#ccc;
    display: block;
    margin-right:0.2rem;
    img{
      width: 0.5rem;
      height:0.5rem;
      border-radius:50%;
    }
  }
</style>
