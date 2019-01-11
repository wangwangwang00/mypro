<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">选择所在地区</div>
      <div class="right" @click="getArea">保存</div>
    </header>
    <div class="content">
      <div class="KanCompanyAreaLeft">
        <ul>
          <li v-for="(item, index) of city" :key="index" @click="address1(item,index)" :class="{'active':ind === index}">{{ item.name }}</li>
        </ul>
      </div>
      <div class="KanCompanyAreaRight">
        <span>定位请求</span>
        <p>{{ address }}</p>
        <span>热门城市</span>
        <ul>
          <li v-for="(itm, idx) of hotcity" :key="idx" @click="address1(itm)">{{ itm.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import QS from 'qs'
export default {
  data () {
    return {
      strregion: '',
      ind: 0,
      city1: '请选择',
      address: sessionStorage.getItem('city'),
      city: [{
        name: '热门'
      }, {
        name: '安徽'
      }, {
        name: '澳门'
      }, {
        name: '北京'
      }, {
        name: '重庆'
      }, {
        name: '福建'
      }, {
        name: '广西'
      }, {
        name: '贵州'
      }, {
        name: '甘肃'
      }, {
        name: '广东'
      }, {
        name: '河北'
      }, {
        name: '河南'
      }, {
        name: '上海'
      }],
      hotcity: [{
        name: '安徽'
      }, {
        name: '澳门'
      }, {
        name: '北京'
      }, {
        name: '重庆'
      }, {
        name: '福建'
      }, {
        name: '广西'
      }, {
        name: '贵州'
      }, {
        name: '甘肃'
      }, {
        name: '广东'
      }, {
        name: '河北'
      }, {
        name: '河南'
      }, {
        name: '上海'
      }]
    }
  },
  methods: {
    back () {
      if (sessionStorage.getItem('city1') === this.city1) {
        sessionStorage.setItem('city', '请选择')
        this.$router.push({
          path: '/autocomplete2'
        })
      } else {
        this.$router.push({
          path: '/autocomplete2'
        })
        const city2 = sessionStorage.getItem('city1')
        sessionStorage.setItem('city', city2)
      }
    },
    address1 (item, index) {
      sessionStorage.setItem('city', item.name)
      this.address = sessionStorage.getItem('city')
      // console.log(item, this)
      this.ind = index
    },
    getArea () {
      this.$router.push({
        path: '/autocomplete2'
      })
      // let data1 = {
      //   id: 1,
      //   strregion: sessionStorage.getItem('city')
      // }
      // axios({
      //   method: 'post',
      //   url: 'http://10.8.162.38:8080/modifyInfo',
      //   data: QS.stringify(data1)
      // })
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
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
    &:nth-of-type(1) {
      color: #8C8C8C;
    }
  }
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  background: #E8E8E8;
  .KanCompanyAreaLeft {
    flex: 1;
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
        &.active {
          background: 0;
        }
      }
    }
  }
  .KanCompanyAreaRight {
    width: 2.75rem;
    height: 100%;
    background: #E8E8E8;
    padding-left: 0.24rem;
    padding-top: 0.33rem;
    span {
      font-size: 0.12rem;
      color: #808080;
    }
    p {
      color: #848383;
      font-size: 0.14rem;
      width: 0.81rem;
      height: 0.3rem;
      background: #fff;
      border-radius: 0.4rem;
      text-align: center;
      line-height: 0.3rem;
      margin: 0.15rem 0 0.19rem 0.11rem;
    }
    ul {
      margin-top: 0.15rem;
      li {
        float: left;
        width: 0.81rem;
        height: 0.3rem;
        background: #fff;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.3rem;
        color: #848383;
        margin-left: 0.11rem;
        margin-right: 0.3rem;
        margin-bottom: 0.18rem;
        cursor: pointer;
      }
    }
  }
}
</style>
