<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <router-link to="/me" tag="span">
          <span class="iconfont icon-jiantou21"></span>
        </router-link>
      </div>
      <div class="middle">网警</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <ul class="net_list">
        <li v-for="(item, index) of list" :key="index"  @click="goDetail(item.title, item.time)">
          <p>{{ item.title }}</p>
          <span>{{ item.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
Vue.use(Navbar.name, Navbar, TabItem.name, TabItem)

export default {
  data () {
    return {
      list: [
        {
          title: '六招教你识别邪教“全能神”',
          time: '2018年11月01日'
        },
        {
          title: '六招教你识别邪教“全能神”',
          time: '2018年11月01日'
        },
        {
          title: '六招教你识别邪教“全能神”',
          time: '2018年11月01日'
        },
        {
          title: '六招教你识别邪教“全能神”',
          time: '2018年11月01日'
        },
        {
          title: '回家看爸妈了吗？九图带你了解休...',
          time: '2018年11月01日'
        }
      ]
    }
  },
  methods: {
    goDetail (title, time) {
      this.$router.push({
        path: '/netdetail'
      })
      sessionStorage.setItem('title', title)
      sessionStorage.setItem('time', time)
    }
  }
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
  .net_list{
    width:100%;
    li{
      padding:0.2rem 0.2rem;
      line-height:0.2rem;
      display:flex;
      justify-content:space-between;
      border-bottom:1px solid #ccc;
    }
  }
</style>
