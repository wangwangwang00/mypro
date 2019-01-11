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
      <router-link tag="li" to="/kanCompanyScale">规模<span class="iconfont icon-jiantou-copy-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyColligate">综合排序<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
    </ul>
    <div class="content">
      <mt-radio align="right" :options="options"></mt-radio>
      <div class="KanCompanyScaleContent">
        <p>重置</p>
        <p>确定</p>
      </div>
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
      options: ['不限', '0-20人', '20-99人', '100-499人', '500-999人', '1000-9999人', '10000以上']
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
    &:nth-of-type(5) {
      color: #8C8C8C;
    }
  }
}
</style>
<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  /* .mint-radiolist {
    color: #969696;
    width: 100%;
    label {
      margin: 0;
      font-size: 0.15rem;
    }
    .mint-cell {
      .mint-cell-wrapper {
        padding: 0;
        font-size: 0.16rem;
      }
    }
  } */
  .KanCompanyScaleContent {
    background: #B3B0B0;
    width: 100%;
    height: 0.6rem;
    p {
      float: left;
      width: 50%;
      text-align: center;
      line-height: 0.6rem;
      &:nth-child(1) {
        background: #F4F3F3;
      }
    }
  }
}
/* .mint-radio-core {
  cursor: pointer;
}
.mint-cell-wrapper {
  padding: 0;
  font-size: 0.16rem;
} */
</style>
