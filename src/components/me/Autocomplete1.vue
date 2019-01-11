<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <router-link to="/me" tag="span">
          <span class="iconfont icon-jiantou21"></span>
        </router-link>
      </div>
      <div class="middle"></div>
      <div class="right iconfont icon-fenxiang2" @click="shares"></div>
      <mt-popup v-model="popupVisible" position="bottom"  popupVisible=false;>
        <div class="share">
          <img src="./../../assets/qqqq.jpg">
          <img src="./../../assets/weixinxin.jpg">
          <img src="./../../assets/wei_bo.jpg">
        </div>
        <div class="close" @click="none">
          <span>取消</span>
        </div>
      </mt-popup>
    </header>
    <div class="content">
      <ul class="content_top">
        <li class="one">
          <span>大王</span><br>
          <span>猪猪侠科技有限公司</span>
        </li>
        <li class="avatar"><img src="https://ps.ssl.qhimg.com/t012aaa61b026c6fb20.jpg"/></li>
      </ul>
      <ul class="honor">
        <li>
          <p>自我介绍</p>
          <span>{{ list.selfintroduction }}</span>
        </li>
        <li>
          <p>感兴趣的行业</p>
          <span>其他技能培训</span>
        </li>
        <li>
          <p>感兴趣的职业</p>
          <span>视觉设计</span>
        </li>
      </ul>
    </div>
    <router-link to="/autocomplete3" tag="footer"><footer class="footer">完善资料</footer></router-link>
  </div>
</template>

<script>
import { Popup } from 'mint-ui'
import Vue from 'vue'
Vue.use(Popup)
export default {
  data () {
    return {
      popupVisible: false,
      list: []
    }
  },
  methods: {
    shares () {
      this.popupVisible = true
    },
    none () {
      this.popupVisible = false
    }
  },
  created () {
    fetch('http://10.8.162.38:8080/selectUserSomeById?id=1').then(res => res.json())
      .then(data => {
        console.log(data.data)
        this.list = data.data
        console.log(this.list)
      })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  .header{
    .icon-jiantou21{
      color:#fff;
      font-size:0.2rem;
    }
    .middle{
      color:#fff;
    }
    .icon-fenxiang2{
      color:#fff;
    }
  }
  .content_top{
    width:100%;
    height:1.74rem;
    @include background-color(#0C84F4);
    @include flexbox();
    justify-content: space-between;
    .one{
      color:#fff;
      padding-top:0.6rem;
      padding-left:0.2rem;
      line-height:0.3rem;
    }
    .avatar{
      width:0.8rem;
      height:0.8rem;
      background:#fff;
      border-radius:50%;
      margin-right:0.2rem;
      margin-top:0.5rem;
      img{
        width:0.8rem;
        height:0.8rem;
        border-radius:50%;
      }
    }
  }
.mint-popup,mint-popup-bottom{
  width:100%;
  height:1.20rem;
  .share{
    width:100%;
    height:0.70rem;
    display:flex;
    justify-content: space-around;
    align-items:center;
    font-size:0.20rem;
    border-bottom:1px solid #ccc;
    img{
      width: 0.50rem;
      height:0.50rem;
    }
  }
}
.honor{
  width:100%;
  padding: 0 0.20rem;
  border-bottom: 0.01rem solid #ccc;
  li{
    padding:0.10rem 0;
    line-height:0.30rem;
    p{
      color:rgb(71, 69, 69);
    }
    span{
      color:rgb(175, 168, 168);
    }
  }
}
.container{
  .footer{
    @include background-color(#0C84F4);
    line-height:0.54rem;
    text-align:center;
    color:#fff;
    letter-spacing:0.03rem;
  }
}

</style>
