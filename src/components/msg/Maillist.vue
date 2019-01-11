<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back"><span class="iconfont iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">通讯录</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <mt-index-list :show-indicator="true">
        <mt-index-section index="#">
          <mt-cell title="远安"></mt-cell>
          <mt-cell title="明慧"></mt-cell>
        </mt-index-section>
        <mt-index-section v-for = "(item, iddx) of list" :key="iddx" :index="item.letter">
          <mt-cell v-for="(itm, idx) of item.names" :key="idx" :title="itm.name" @click.native = "getCity(itm)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui'
Vue.use(IndexList, IndexSection)
export default {
  data () {
    return {
      list: [
        {
          letter: 'C',
          names: [
            {
              name: '蔡徐坤'
            },
            {
              name: '蔡梦蝶'
            },
            {
              name: '蔡国庆'
            }
          ]
        },
        {
          letter: 'D',
          names: [
            {
              name: '订阅信息'
            }
          ]
        },
        {
          letter: 'N',
          names: [
            {
              name: '牛珂'
            },
            {
              name: '牛俊峰'
            },
            {
              name: '牛一天'
            }
          ]
        },
        {
          letter: 'Q',
          names: [
            {
              name: '前途小助手'
            },
            {
              name: '求职招聘小助手'
            }
          ]
        },
        {
          letter: 'W',
          names: [
            {
              name: '我的群聊'
            }
          ]
        },
        {
          letter: 'X',
          names: [
            {
              name: '肖亚杰'
            },
            {
              name: '肖晓'
            },
            {
              name: '肖战'
            }
          ]
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/msg'
      })
    },
    getCity (item) {
      console.log(item)
      sessionStorage.setItem('city', item.name)
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '@/lib/reset.scss';
 .content{
   padding:0 0.1rem;
 }
.icon-tongxunlu {
  font-size: 0.22rem;
}
.icon-zhucetianjiahaoyou {
  font-size: 0.22rem;
}
.mint-cell{
  color:#333;
  .tou{
    float: left;
  }
}
.mint-indexlist {
  height: 100%;
  .mint-indexlist-content {
    height: 100%!important;
  }
}
</style>
