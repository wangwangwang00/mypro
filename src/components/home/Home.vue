<template>
  <div class="box">
    <div class="content">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item class="mint-swipe-item" v-for="(item, index) of bannerlist" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 搜索 -->
      <div class="search">
        <form>
          <b class="iconfont icon-sousuo1"></b>
          <input type="text">
        </form>
      </div>
      <!-- 四大块主要内容 -->
      <div class="tab">
        <ul class="tabs">
          <router-link tag="li" to="/kanCompany">看公司</router-link>
          <router-link tag="li" to="/connect">人脉</router-link>
          <router-link tag="li" to="/interview">面试</router-link>
          <router-link tag="li" to="/askAnswer">问答</router-link>
        </ul>
      </div>
      <!-- 推荐 -->
      <router-link tag="div" to="/companyDetail" class="recommend">
        <div class="recommend_tit">
          <h3 class="tit1">推荐</h3>
          <h5 class="tit_change">换一批</h5>
        </div>
        <div class="recommend_content">
          <div class="left">
            <h4>广州永生文化传播有限公司</h4>
            <p><span>广州</span> · <span>影视</span> / <span>媒体</span></p>
            <p>点评<span>13</span>面经<span>11</span>问答<span>10</span></p>
            <i>在<span>影视</span> / <span>媒体</span>行业排名<span>361</span></i>
          </div>
          <div class="right">
            <img src="https://ps.ssl.qhimg.com/sdmt/196_135_100/t01a7ebd226c1978a88.jpg" alt="">
          </div>
        </div>
      </router-link>
      <router-link tag="div" to="/companyDetail" class="recommend">
        <div class="recommend_tit">
          <h3 class="tit1">推荐</h3>
          <h5 class="tit_change">换一批</h5>
        </div>
        <div class="recommend_content">
          <div class="left">
            <h4>安阳市贞元有限责任公司</h4>
            <p><span>安阳</span> · <span>房地产开发</span><span></span></p>
            <p>点评<span>11</span>面经<span>9</span>问答<span>12</span></p>
            <i>在<span>房地产开发</span><span></span>行业排名<span>927</span></i>
          </div>
          <div class="right">
            <img src="https://ps.ssl.qhimg.com/sdmt/181_135_100/t015505f33ada28d609.jpg" alt="">
          </div>
        </div>
      </router-link>
      <!-- 排行榜 -->
      <div class="ranking_List">
        <h3>排行榜</h3>
        <ul class="ranking">
          <router-link tag="li" to="/rankingList">
            <img src="https://p.ssl.qhimg.com/dr/200_200_/t01d7a6978485ed0d84.jpg" alt="">
            <p>员工心中最靠谱的公司</p>
            <p><span><i>13221</i>查看</span><span><i>54</i>家公司</span></p>
          </router-link>
          <router-link tag="li" to="/rankingList">
            <img src="https://ps.ssl.qhimg.com/sdmt/197_135_100/t01d277239220fc8944.jpg" alt="">
            <p>市场口碑最好的公司</p>
            <p><span><i>9621</i>查看</span><span><i>36</i>家公司</span></p>
          </router-link>
          <router-link tag="li" to="/rankingList">
            <img src="https://p.ssl.qhimg.com/dmsmfl/120_75_/t01d63951694cf4c20d.webp?size=600x400&phash=8861461549002113379" alt="">
            <p>同行排名前100的公司</p>
            <p><span><i>16425</i>查看</span><span><i>100</i>家公司</span></p>
          </router-link>
          <router-link tag="li" to="/rankingList">
            <img src="https://p.ssl.qhimg.com/sdm/242_150_/t0178c37417dceb1b0e.jpg" alt="">
            <p>企业文化最好的公司</p>
            <p><span><i>8524</i>查看</span><span><i>78</i>家公司</span></p>
          </router-link>
        </ul>
        <p class="rankings">
          <span>查看全部排行榜</span>
          <router-link tag="span" to="/rankingList" class="iconfont icon-arrow-right-copy-copy-copy"></router-link>
        </p>
      </div>
      <!-- 企业专题 -->
      <div class="enterpriseTopics">
        <h3 class="enterpriseTopicsTit">
          <span>企业专题</span>
        </h3>
        <ul class="enterpriseTopicsContent">
          <router-link tag="li" to="/findGoodCompany">
            <div class="etLeft">
              <div class="enterpriseTopicsContentTit">双十一还没到，这些电商公司已经燥起来！</div>
              <p><span><i>14824</i>查看</span><span><i>15</i>公司</span></p>
            </div>
            <div class="etRight">
              <img src="https://ps.ssl.qhimg.com/sdmt/193_135_100/t01b91c0a60badcede2.jpg" alt="">
            </div>
          </router-link>
          <router-link tag="li" to="/findGoodCompany">
            <div class="etLeft">
              <div class="enterpriseTopicsContentTit">网咖双蛋专场，让我做一回你的圣诞老人，我们“双蛋”见！</div>
              <p><span><i>14824</i>查看</span><span><i>15</i>公司</span></p>
            </div>
            <div class="etRight">
              <img src="https://ps.ssl.qhimg.com/sdmt/171_135_100/t01eccdddc64568277f.jpg" alt="">
            </div>
          </router-link>
          <router-link tag="li" to="/findGoodCompany">
            <div class="etLeft">
              <div class="enterpriseTopicsContentTit">给我一分钟，我会给你一个世界！</div>
              <p><span><i>14824</i>查看</span><span><i>15</i>公司</span></p>
            </div>
            <div class="etRight">
              <img src="https://p.ssl.qhimg.com/t018baab2b3d6b6b721.jpg" alt="">
            </div>
          </router-link>
          <router-link tag="li" to="/findGoodCompany">
            <div class="etLeft">
              <div class="enterpriseTopicsContentTit">我们不能帮您赚钱，但能帮你省钱！</div>
              <p><span><i>14824</i>查看</span><span><i>15</i>公司</span></p>
            </div>
            <div class="etRight">
              <img src="https://ps.ssl.qhimg.com/sdmt/201_135_100/t01d9da8d0db95cfa78.jpg" alt="">
            </div>
          </router-link>
        </ul>
        <p class="rankings">
          <span>查看更多专题</span>
          <router-link tag="span" to="/findGoodCompany" class="iconfont icon-arrow-right-copy-copy-copy"></router-link>
        </p>
      </div>
      <!-- <Prolist :prolist = 'prolist'></Prolist> -->
    </div>
  </div>
</template>

<script>
import Prolist from '@/components/Prolist'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      prolist: [],
      bannerlist: [
        // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=841900140,460523840&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2617644562,3774889722&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2882656210,620018548&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4283752023,2455504605&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=577195185,1391384620&fm=27&gp=0.jpg'
      ]
    }
  },
  components: {
    Prolist
  },
  created () {
    // fetch('/daxun/douban').then(res => res.json())
    //   .then(data => {
    //     // console.log(data)
    //     this.prolist = data
    //   })
    // fetch('/daxun/banner').then(res => res.json())
    //   .then(data => {
    //     // console.log(data)
    //     var arr = []
    //     data.map(item => {
    //       arr.push('https://www.daxunxun.com' + item)
    //     })
    //     // console.log(arr)
    //     this.bannerlist = arr
    //   })
    // fetch('http://10.8.162.38:8080/scalesList').then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.mint-swipe {
  width: 100%;
  height: 1.96rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.search {
  width: 100%;
  height: 0.3rem;
  margin: 0.20rem 0 0.24rem 0;
  padding: 0 0.3rem;
  form {
    background-color: rgba(244, 244, 244, 1);
    border-radius: 0.42rem;
    line-height: 0.3rem;
    height: 0.3rem;
    width: 100%;
    input {
      width: 2.6rem;
      height: 0.2rem;
      padding-top: 0.05rem;
      border: 0;
      background:rgba(244, 244, 244, 1);
      text-indent: 0.03rem;
      color: #757575;
    }
    .icon-sousuo1 {
      padding-left: 0.15rem;
    }
  }
}
.tab {
  width: 100%;
  height: 0.6rem;
  margin-bottom: 0.2rem;
  .tabs {
    width: 100%;
    height: 0.6rem;
    @include flexbox();
    @include justify-content(space-around);
    li {
      float: left;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      @include flexbox();
      @include justify-content();
      @include align-items();
      color: #fff;
      font-size: 0.14rem;
      &:first-child {
        background: linear-Gradient(to top, #38C5FB, #76D7FC);
        /* opacity: .8; */
      }
      &:nth-child(2) {
        background: linear-Gradient(to top, #FF6367, #FF9396);
        /* opacity: .8; */
      }
      &:nth-child(3) {
        background: linear-Gradient(to top, #FFAD10, #FFC861);
        /* opacity: .8; */
      }
      &:last-child {
        background: linear-Gradient(to top, #42C9A7, #81DAC4);
        /* opacity: .8; */
      }
    }
  }
}
.recommend {
  @include rect(100%, 1.9rem);
  @include background-color(#FBFBFB);
  overflow: hidden;
  margin-bottom: 0.1rem;
  .recommend_tit {
    @include rect(100%, 0.3rem);
    @include flexbox();
    margin-top: 0.16rem;
    margin-bottom: 0.2rem;
    @include justify-content(space-between);
    .tit1 {
      @include rect(0.4rem, 0.3rem);
      line-height: 0.3rem;
      font-size: 0.2rem;
      margin-left: 0.22rem;
      color: #5E5E5E;
    }
    .tit_change {
      font-size: 0.12rem;
      margin-right: 0.22rem;
      color: #828282;
      margin-top: 0.1rem;
    }
  }
  .recommend_content {
    @include rect(100%, 1.24rem);
    @include flexbox();
    @include justify-content(space-between);
    .left {
      @include rect(2.2rem, 1.24rem);
      padding-left: 0.24rem;
      h4 {
        font-size: 0.16rem;
        color: #828282;
        margin-bottom: 0.12rem;
        font-weight: normal;
      }
      p{
        font-size: 0.12rem;
        color: #828282;
        line-height: 0.18rem;
        margin-bottom: 0.09rem;
        &:nth-of-type(2){
          span {
            margin-right: 0.15rem;
          }
        }
      }
      i {
        border: 1px solid rgba(187, 187, 187, 1);
        height: 0.2rem;
        font-size: 0.12rem;
        color: #828282;
        padding: 0.02rem;
      }
    }
    .right {
      @include rect(1.1rem, 0.89rem);
      margin-right: 0.22rem;
      margin-top: 0.05rem;
      img {
        @include rect(1.1rem, 0.89rem);
      }
    }
  }
}
.ranking_List {
  @include rect(100%, auto);
  @include background-color(#FBFBFB);
  margin-bottom: 0.1rem;
  overflow: hidden;
  h3 {
    width: 0.6rem;
    height: 0.3rem;
    color: rgba(94, 94, 94, 1);
    font-size: 0.2rem;
    font-family: SourceHanSansSC-regular;
    margin:0.16rem 0 0.14rem 0.22rem;
  }
  .ranking {
    @include rect(100%, 3.42rem);
    margin-bottom: 0.32rem;
    li {
      float: left;
      @include rect(1.5rem, 1.71rem);
      margin-left: 0.24rem;
      margin-right: 0.02rem;
      img {
        @include rect(1.5rem, 1.05rem);
        background: #ccc;
        display: block;
      }
      p{
        &:nth-of-type(1) {
          @include rect(1.1rem, 0.23rem);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          margin-left: 0.2rem;
          color: #5E5E5E;
          font-size: 0.14rem;
          margin-top: 0.05rem;
        }
        &:nth-of-type(2) {
          @include rect(1.5rem, 0.18rem);
          padding: 0 0.1rem;
          font-size: 0.12rem;
          color: #ACAAAA;
          @include flexbox();
          @include justify-content(space-between);
        }
      }
    }
  }
}
.rankings {
  @include rect(100%, 0.2rem);
  @include flexbox();
  @include justify-content(space-between);
  padding: 0 0.25rem;
  margin-top: 0.32rem;
  color: #686767;
  font-size: 0.14rem;
  margin-bottom: 0.16rem;
}
.enterpriseTopics {
  @include rect(100%, auto);
  @include background-color(#FBFBFB);
  padding: 0 0.22rem 0.1rem 0.22rem;
  margin-bottom: 0.1rem;
  .enterpriseTopicsTit{
    @include rect(100%, 0.5rem);
    font-size: 0.2rem;
    color: #5e5e5e;
    span {
      margin-top: 0.16rem;
      display: inline-block;
    }
  }
  .rankings {
    margin-top: 0.21rem;
    margin-bottom: 0rem;
    padding: 0;
  }
  .enterpriseTopicsContent {
    li {
      @include flexbox();
      @include justify-content(space-between);
      border-bottom: 1px solid #bbb;
      padding: 0.15rem 0;
      .etLeft {
        .enterpriseTopicsContentTit {
          @include rect(1.69rem, 0.41rem);
          font-size: 0.13rem;
          color: #8C8C8C;
          line-height: 0.22rem;
        }
        p {
          color: #ACAAAA;
          font-size: 0.12rem;
          span {
            margin-right: 0.16rem;
            margin-top: 0.38rem;
            display: inline-block;
          }
        }
      }
      .etRight {
        @include rect(1.34rem, 0.93rem);
        background: #ccc;
        img {
          @include rect(1.34rem, 0.93rem);
        }
      }
    }
  }
}
</style>
