<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/askAnswer" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">精选</div>
      <div class="right" @click="shares"><span class="iconfont icon-fenxiang2"></span></div>
      <mt-popup v-model="popupVisible" position="bottom"  popupVisible=false;>
        <div class="share">
          <img src="./../../../assets/qqqq.jpg">
          <img src="./../../../assets/weixinxin.jpg">
          <img src="./../../../assets/wei_bo.jpg">
        </div>
        <div class="close" @click="none">
          <span>取消</span>
        </div>
      </mt-popup>
    </header>
    <div class="content">
      <div class="askAnswerChoiceTit">
        <h3><i>精选</i></h3>
        <h3>{{ tit }}</h3>
        <h3>
          <span>{{ care }}</span>人关注 <span>{{ answer }}人回答 </span><span>{{ look }}人查看</span>
        </h3>
        <div class="addAsk">
          <div class="addAskLeft">
            <span class="iconfont icon-jiahao4"></span> 关注问题
          </div>
          <router-link tag="div" to="/writeAnswers" class="addAskLeft">
            <span class="iconfont icon-wenzhang"></span> 写答案
          </router-link>
        </div>
      </div>
      <ul class="judge">
        <li v-for="(item, index) of list" :key="index">
          <div class="judgetit">
            <img :src="item.pic" alt="">
            <span>{{ item.name }}</span>
          </div>
          <div class="judgeContent">
            <div class="judgeContents">
              {{ item.content }}
            </div>
            <img :src="item.img" alt="">
          </div>
          <div class="judgeBottom">
            <p><span class="iconfont icon-fenxiang"></span>分享</p>
            <p><span class="iconfont icon-icon--"></span>{{ item.judge }}</p>
            <p><span class="iconfont icon-shoucang"></span>{{ item.like }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tit: JSON.parse(sessionStorage.getItem('askAnswerMsg')).askAnswerChoicetit,
      look: JSON.parse(sessionStorage.getItem('askAnswerMsg')).askAnswerChoicelook,
      answer: JSON.parse(sessionStorage.getItem('askAnswerMsg')).askAnswerChoiceanswer,
      care: JSON.parse(sessionStorage.getItem('askAnswerMsg')).askAnswerChoiceCare,
      popupVisible: false,
      list: JSON.parse(localStorage.getItem('list'))
      // list: [
      //   {
      //     pic: 'https://ps.ssl.qhimg.com/t0157314ff5cbecf549.jpg',
      //     name: '越努力越幸运',
      //     content: '人生只有三天,昨天、今天、明天学着甩掉昨天的你,也让明天的你不会讨厌今天的自己',
      //     img: 'https://p.ssl.qhimg.com/dmfd/182_136_/t014a973e30104cdb23.jpg?size=640x678',
      //     judge: '162',
      //     like: '25'
      //   },
      //   {
      //     pic: 'https://ps.ssl.qhimg.com/t0157314ff5cbecf549.jpg',
      //     name: '越努力越幸运',
      //     content: '人生只有三天,昨天、今天、明天学着甩掉昨天的你,也让明天的你不会讨厌今天的自己',
      //     img: 'https://p.ssl.qhimg.com/dmfd/182_136_/t014a973e30104cdb23.jpg?size=640x678',
      //     judge: '162',
      //     like: '25'
      //   }
      // ]
    }
  },
  methods: {
    shares () {
      this.popupVisible = true
    },
    none () {
      this.popupVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.askAnswerChoiceTit {
  width: 100%;
  height: 1.7rem;
  h3 {
    width: 100%;
    height: 0.2rem;
    color: #737373;
    font-weight: normal;
    padding:0.1rem 0.2rem 0.2rem;
    font-size: 0.14rem;
    i {
      display: inline-block;
      background: #DFDFDF;
      border-radius: 0.14rem;
      font-size: 0.1rem;
      text-align: center;
      padding: 0.02rem 0.1rem 0;
    }
    span {
      font-size: 0.1rem;
    }
    &:nth-child(2) {
      margin-top: 0.07rem;
    }
  }
  .addAsk {
    width: 100%;
    height: 0.5rem;
    color: #737373;
    font-size: 0.14rem;
    border-top: 1px solid #D9D9D9;
    margin-top: 0.25rem;
    display: flex;
    line-height: 0.5rem;
    .addAskLeft {
      flex: 1;
      text-align: center;
      span {
        color: #BBBBBB;
        font-size: 0.18rem;
        font-weight: bold;
      }
    }
  }
}
.mint-popup,mint-popup-bottom{
  width:100%;
  height:120px;
  .share{
    width:100%;
    height:70px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    font-size:20px;
    border-bottom:1px solid #ccc;
    img{
      width: 50px;
      height:50px;
    }
  }
}
.judge {
  width: 100%;
  padding: 0 0.2rem;
  li {
    background:#F4F4F4;
    width: 100%;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    .judgetit {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #666;
      margin-bottom: 0.15rem;
      img {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
    }
    .judgeContent {
      width: 100%;
      color: #999;
      margin-bottom: 0.15rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #cecece;
      .judgeContents {
        margin-bottom: 0.1rem;
      }
    }
    .judgeBottom {
      display: flex;
      justify-content: space-between;
      span {
        color: #B9B9B9;
        font-weight: bold;
        padding: 0 0.08rem;
      }
      .icon-icon-- {
        font-size: 0.17rem;
      }
      .icon-shoucang {
        font-size: 0.17rem;
      }
    }
  }
}
</style>
