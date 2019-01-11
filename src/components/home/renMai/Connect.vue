<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/home" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">机遇</div>
      <div class="right"><span class="iconfont icon-jiahao4"></span></div>
    </header>
    <div class="content">
      <ul class="connectContent">
        <li v-for="(item, index) of list" :key="index">
          <div class="connectLeft">
            <i><img src="./../../../assets/pic.svg" alt=""></i>
            <span>{{ item.classify }}</span>
          </div>
          <div class="connectRight">
            <span>{{ item.tag }}</span>
            <span class="iconfont icon-arrow-right-copy-copy-copy"></span>
          </div>
        </li>
      </ul>
      <div class="tab">
        <ul class="tabs">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/bird">老鸟</router-link>
          <router-link tag="li" to="/msg">消息</router-link>
          <router-link tag="li" to="/me">我的</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          classify: '我的好友',
          tag: ''
        },
        {
          classify: '人脉探索',
          tag: '8000+'
        },
        {
          classify: '求职招聘',
          tag: '高薪工作热招'
        },
        {
          classify: '极速找人',
          tag: '找工作，找投资'
        },
        {
          classify: '脉课堂',
          tag: '每天学习10分钟'
        },
        {
          classify: '职场进阶',
          tag: '直播精英分享'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.connectContent {
  li {
    width: 100%;
    height: 0.85rem;
    line-height: 0.85rem;
    background: #F9F9F9;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #828282;
    border-bottom: 1px solid #F0F0F0;
    font-size: 0.1rem;
    .connectLeft {
      i {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #fff;
        margin-top: 0.18rem;
        text-align: center;
        margin-right: 0.1rem;
        line-height: 0.5rem;
        img {
          width: 0.45rem;
          height: 0.45rem;
        }
      }
      span {
        font-size: 0.14rem;
      }
    }
    .connectRight {
      line-height: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        &:first-child {
          padding-right: 0.04rem;
        }
      }
    }
    &:nth-child(2) {
      margin-bottom: 0.1rem;
      border-bottom: 0;
    }
    &:last-child {
      border-bottom: 0;
    }
    &:first-child {
      margin-top: 0.1rem;
    }
  }
}
.tab {
  width: 100%;
  height: 0.45rem;
  margin-top: 0.31rem;
  .tabs {
    width: 100%;
    height: 0.45rem;
    @include flexbox();
    @include justify-content(space-around);
    li {
      float: left;
      width: 0.45rem;
      height: 0.45rem;
      background:#DDD;
      border-radius: 50%;
      @include flexbox();
      @include justify-content();
      @include align-items();
      color: #101010;
      font-size: 0.14rem;
    }
  }
}
</style>
