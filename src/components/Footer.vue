<template>
  <footer class="footer">
    <ul>
      <router-link tag="li" :to="item.path" v-for = " (item, index) of list " :key = "index">
        <span :class="item.icon"></span>
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        name: '首页',
        icon: 'iconfont icon-ai-home',
        path: '/home'
      }, {
        name: '老鸟',
        icon: 'iconfont icon-gongsi',
        path: '/bird'
      }, {
        name: '消息',
        icon: 'iconfont icon-icon_msg',
        path: '/msg'
      }, {
        name: '我的',
        icon: 'iconfont icon-touxiang1',
        path: '/me'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.footer {
  ul {
    @include rect(100%, 100%);
    @include justify-content(space-around);
    @include flexbox();
    @include line-height(100%);
    @include align-items(center);
    li {
      span {
        @include rect(0.3rem, 0.3rem);
        display: inline-block;
        text-align: center;
        line-height: 0.3rem;
        &.iconfont {
          font-size: 0.24rem;
        }
      }
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      &.router-link-exact-active.router-link-active{
        color: #0C84F4;
      }
    }
  }
}
</style>
