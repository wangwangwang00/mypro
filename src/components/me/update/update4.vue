<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">选择感兴趣的行业</div>
      <div class="right" @click="back">保存</div>
    </header>
    <div class="content">
      <div class="KanCompanyAreaLeft">
        <ul>
          <li v-for="(item, index) of industry" :key="index" @click="address1(item,index)" :class="{'active':ind === index}">{{ item.name }}</li>
        </ul>
      </div>
      <div class="KanCompanyAreaRight">
        <ul>
          <li v-for="(item, index) of industry1 " :key="index" @click="address1(item,index)" :class="{'active':ind === index}">{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="KanCompanyindustryContentBottom">
      <p>重置</p>
      <p>确定</p>
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
      ind: 0,
      industry: [{
        name: '热门'
      }, {
        name: '所有行业'
      }, {
        name: 'IT/互联网'
      }, {
        name: '电子/通信/硬件'
      }, {
        name: '金融'
      }, {
        name: '生活服务'
      }, {
        name: '汽车'
      }, {
        name: '交通/贸易/物流'
      }, {
        name: '专业服务'
      }, {
        name: '广告/传媒/文化'
      }, {
        name: '房地产建筑'
      }, {
        name: '机械/制造'
      }],
      industry1: [{
        name: '热门'
      }, {
        name: '所有行业'
      }, {
        name: 'IT/互联网'
      }, {
        name: '电子/通信/硬件'
      }, {
        name: '金融'
      }, {
        name: '生活服务'
      }, {
        name: '汽车'
      }, {
        name: '交通/贸易/物流'
      }, {
        name: '专业服务'
      }, {
        name: '广告/传媒/文化'
      }, {
        name: '房地产建筑'
      }, {
        name: '机械/制造'
      }]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
      // console.log()
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  padding:0 0.1rem;
}
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
    &:nth-of-type(3) {
      color: #8C8C8C;
    }
  }
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
    justify-content: space-between;
  .KanCompanyAreaLeft {
    width: 50%;
    height: 100%;
    ul {
      li {
        width: 100%;
        height: 0.52rem;
        text-align: center;
        line-height: 0.52rem;
        color: #8C8C8C;
        font-size: 0.15rem;
        background: #fff;
        cursor: pointer;
        /* &:first-child {
          background: 0;
        } */
      }
    }
  }
  .KanCompanyAreaRight {
    background: #E8E8E8;
    width: 50%;
    height: 100%;
    ul {
      background: #E8E8E8;
      li {
        width: 100%;
        height: 0.52rem;
        text-align: center;
        line-height: 0.52rem;
        color: #8C8C8C;
        font-size: 0.15rem;
        cursor: pointer;
        /* &:first-child {
          background: 0;
        } */
        &.active {
          background: 0;
        }
      }
    }
  }
}
.KanCompanyindustryContentBottom {
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
</style>
