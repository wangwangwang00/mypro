<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <router-link to="/me" tag="span">
          <span class="iconfont icon-jiantou21"></span>
        </router-link>
      </div>
      <div class="middle">我的关注与收藏</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="header-nav">
        <ul>
          <li>公司</li>
          <li>问答</li>
          <li>点评</li>
          <li>面试</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
Vue.use(Navbar.name, Navbar, TabItem.name, TabItem)

export default {
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  .header{
    .icon-jiantou21{
      color:#fff;
      font-size:20px;
    }
    .middle{
      color:#fff;
    }
  }
  .header-nav{
    margin-top:3px;
    height:50px;
    width:100%;
    background:#fff;
    padding-left:20px;
    padding-right:20px;
    ul{
      @include flexbox();
      @include flex-direction();
      justify-content:space-between;
      line-height:50px;
    }
  }
</style>
