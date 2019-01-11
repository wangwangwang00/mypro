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
      <router-link tag="li" to="/kanCompanyIndustry">行业<span class="iconfont icon-jiantou-copy-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyScale">规模<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyColligate">综合排序<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
    </ul>
    <div class="content">
      <div class="KanCompanyAreaLeft">
        <ul>
          <li v-for="(item, index) of industry" :key="index" @click="kanCompany(item,index)" :class="{'actives':inds === index}">{{ item.name }}</li>
        </ul>
      </div>
      <div class="KanCompanyAreaRight">
        <ul class="ul1">
          <li v-for="(item, index) of industry1 " :key="index">{{ item.name }}<input type="radio"/></li>
        </ul>
        <ul class="ul2" style="display:none;">
          <li v-for="(item, index) of industry2 " :key="index">{{ item.name }}<input type="radio"/></li>
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
      inds: 0,
      industry: [{
        name: '热门'
      }, {
        name: '所有行业'
      }],
      industry1: [{
        name: 'IT/互联网'
      }, {
        name: '电子/通信/硬件'
      }, {
        name: '金融'
      }, {
        name: '汽车'
      }, {
        name: '房地产建筑'
      }, {
        name: '机械/制造'
      }],
      industry2: [{
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
    // back () {
    //   this.$router.go(-1)
    //   // console.log()
    // }
    kanCompany (item, index) {
      // sessionStorage.setItem('city', item.name)
      // this.address = sessionStorage.getItem('city')
      // console.log(item, this)
      this.inds = index
      var ul1 = document.querySelector('.ul1')
      var ul2 = document.querySelector('.ul2')
      if (this.inds === 0) {
        ul2.style.display = 'none'
        ul1.style.display = 'block'
      } else {
        ul1.style.display = 'none'
        ul2.style.display = 'block'
      }
    }
  },
  created () {
    // fetch('http://10.8.162.38:8080/saveGrade').then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    fetch('http://10.8.162.38:8080/saveGrade', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({
      //   username: this.username,
      //   password: this.password
      // })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
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
        &.actives {
          background: #F4F3F3;
        }
      }
    }
  }
  .KanCompanyAreaRight {
    background: #F4F3F3;
    width: 50%;
    height: 100%;
    ul {
      background: #F4F3F3;
      li {
        width: 100%;
        height: 0.52rem;
        text-align: center;
        line-height: 0.52rem;
        color: #8C8C8C;
        font-size: 0.15rem;
        cursor: pointer;
        input {
          float: right;
          margin-right: 0.2rem;
          margin-top: 0.18rem;
        }
        &:hover {
          background: #E8E8E8;
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
