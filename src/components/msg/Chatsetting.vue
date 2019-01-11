<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back"><span class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">聊天设置</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="chatsetting_space"></div>
      <div class="message_settingtop">
        <mt-cell title="置顶该消息">
          <mt-switch v-model="openValue1"></mt-switch>
        </mt-cell>
        <mt-cell title="新消息通知">
          <mt-switch v-model="openValue2"></mt-switch>
        </mt-cell>
      </div>
      <div class="chatsetting_space"></div>
      <div class="message_settingtop">
        <mt-cell title="置顶该消息">
          <mt-switch v-model="openValue3"></mt-switch>
        </mt-cell>
        <mt-cell title="举报">
          <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
        </mt-cell>
        <div class="icon" @click="maillist"><i class="iconfont icon-jiahao"></i>发起群聊</div>
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
      openValue1: '',
      openValue2: '',
      openValue3: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    maillist () {
      this.$router.push({
        path: '/maillist'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .chatsetting_space{
    height:0.1rem;
    background: #F2F2F2;
  }
  .icon-arrow-right-copy-copy-copy{
    font-size: 0.25rem;
  }
  .icon{
    text-align: center;
    font-size:0.14rem;
    height:0.48rem;
    background:#0C84F4;
    color:#fff;
    line-height:0.48rem;
    letter-spacing: 0.02rem;
  }
  .icon-jiahao{
    font-weight:0.16rem;
    padding-right:0.05rem;
  }
</style>
