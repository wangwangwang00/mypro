<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <router-link to="/me" tag="span">
          <span class="iconfont icon-jiantou21"></span>
        </router-link>
      </div>
      <div class="middle">设置与帮助</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="list">
        <ul class="list1">
          <li>
            <span class="zi">设置与提醒</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
          <li>
            <span class="zi">自动接收红包</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
          <li>
            <span class="zi">设置打招呼语</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
        </ul>
        <ul class="list1">
          <li>
              <span class="zi">修改手机号</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <li>
              <span class="zi">修改密码</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <li>
              <span class="zi">绑定微信号</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
        </ul>
        <div class="logout" @click="logout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem, MessageBox } from 'mint-ui'
Vue.use(Navbar.name, Navbar, TabItem.name, TabItem, MessageBox)

export default {
  data () {
    return {
      title: '',
      confirmButtonText: '',
      cancelButtonText: ''
    }
  },
  methods: {
    logout () {
      MessageBox.confirm('您确认退出登录吗？', {
        title: '温馨提示',
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(action => {
        if (action === 'confirm') {
          this.$router.push({
            path: '/loginp'
          })
        }
      })
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
  .content{
    @include background-color(#ECECEC);
    .logout{
      background:#fff;
      height:0.5rem;
      line-height:0.5rem;
      text-align:center;
      color:#FD7578;
      letter-spacing:0.03rem;
      margin-top:0.1rem;
    }
  }
  .list{
    .list1{
      margin-top:0.10rem;
      li{
        @include background-color(#fff);
        padding-left:0.20rem;
        padding-right:0.20rem;
        height:0.50rem;
        border-bottom:1px solid #C7C7C7;
        @include text-color(#A7A4A4);
        .zi{
          display: block;
          width:1.20rem;
          height:0.30rem;
          line-height:0.50rem;
          float: left;
        }
        em{
          float:right;
          line-height:0.50rem;
        }
      }
    }
  }
</style>
