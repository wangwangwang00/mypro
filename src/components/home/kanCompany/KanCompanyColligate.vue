<template>
  <div class="box">
    <header class="header">
      <div class="left"><router-link tag="span" to="/kanCompany" class="iconfont icon-xiangzuojiantou"></router-link></div>
      <div class="middle">看公司</div>
      <router-link tag="div" to="/kanCompanySearch" class="right"><span class="iconfont icon-sousuo"></span></router-link>
    </header>
    <ul class="sort">
      <router-link tag="li" to="/kanCompanyArea">地区<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyIndustry">行业<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyScale">规模<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyColligate">综合排序<span class="iconfont icon-jiantou-copy-copy-copy"></span></router-link>
    </ul>
    <div class="content">
      <ul>
        <li><span>综合排序</span></li>
        <li><span>公司评分由高到低</span></li>
        <li><span>信息数量由多到少</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Radio, Checklist } from 'mint-ui'
Vue.use(Radio.name, Radio, Checklist.name, Checklist)
export default {
  data () {
    return {
    }
  },
  methods: {
    // back () {
    //   this.$router.go(-1)
    //   // console.log()
    // }
  }
}
</script>

<style lang="scss" scoped>
.sort{
  width: 100%;
  height: 0.49rem;
  display: flex;
  line-height: 0.49rem;
  justify-content:center;
  border-bottom: 1px solid #bbb;
  li {
    height: 0.2rem;
    padding: 0 0.08rem;
    font-size: 0.15rem;
    color: #B7B7B7;
    span {
      padding:0 0 0 4px;
      display:inline-block;
      padding-top: 2px;
    }
    &:nth-of-type(7) {
      color: #8C8C8C;
    }
  }
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  ul {
    width: 100%;
    li {
      height: 0.6rem;
      line-height: 0.6rem;
      border-bottom: 1px solid #bbb;
      span {
        padding-left: 0.21rem;
        color: #AEAEAE;
        font-size: 0.15rem;
      }
    }
  }
}
</style>
