<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back"><span class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">防打扰设置</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="space"></div>
      <mt-radio title="哪些人申请好友提醒我" align="right" :options="options1">
      </mt-radio>
      <div class="space"></div>
      <mt-checklist title="不接受一下用户添加我为好友(多选)" align="right" :options="options" v-model="value">
      </mt-checklist>
    </div>
  </div>
</template>

<script>
import { Radio, Checklist, Cell } from 'mint-ui'
import Vue from 'vue'
Vue.use(Radio, Checklist, Cell)
export default {
  data () {
    return {
      options1: ['所有人', '我的人脉(同事/校友/同乡)', '我的好友点评过的人'],
      value: [],
      options: [
        {
          label: '非“文化传媒”行业的',
          value: 'A'
        },
        {
          label: '猎头',
          value: 'B'
        },
        {
          label: '销售理财,保险',
          value: 'C'
        },
        {
          label: '影响力低于10的',
          value: 'D'
        },
        {
          label: '未认证的用户',
          value: 'E'
        },
        {
          label: '不允许通过手机号搜索到我',
          value: 'F'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
 .content{
   padding:0 0.1rem;
   .space{
     height:0.1rem;
   }
   .mint-cell{
     box-sizing: border-box;
   }
 }
</style>
