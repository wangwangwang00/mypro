<template>
  <div class="box">
    <div class="birdmessage">
      <div class="birdmessageTop">
          <div class="birdmessageTopLeft">
            <span>600</span><span>在线老鸟</span>
          </div>
          <div class="birdmessageTopMiddle">
            <span><img src="https://ps.ssl.qhimg.com/t012aaa61b026c6fb20.jpg" alt=""></span>
          </div>
          <div class="birdmessageTopRight">
            <span>6622</span><span>今日解决问题</span>
          </div>
      </div>
      <div class="birdmessageBottom">
        <span @click="toHelp">发布求助</span>
      </div>
    </div>
    <div class="content">
      <div class="birdCotent1">
        <div class="birdCotent1Tit">
          <h3 class="tit1">推荐老鸟</h3>
          <router-link class="tit_change" tag="h5" to="/moreBird">查看更多老鸟<span class="iconfont icon-arrow-right-copy-copy-copy"></span></router-link>
        </div>
        <h4>找一个老鸟，改变你的职场生涯</h4>
        <ul class="birdmessageRecommend">
          <li v-for="(item, index) of birdRecommend" :key="index">
            <b><img :src="item.bird0" alt=""></b>
            <span>{{ item.bird1 }}</span>
            <span>{{ item.bird2 }}</span>
            <span>{{ item.bird3 }}</span>
          </li>
        </ul>
        <ul class="birdmessagePosition">
          <li>
            <span>老鸟排行</span><span>最受欢迎</span>
            <img src="./../../assets/pro.png" alt="">
          </li>
          <li>
            <span>老鸟排行</span><span>最热心</span>
            <img src="./../../assets/pro.png" alt="">
          </li>
          <li>
            <span>老鸟排行</span><span>最新入驻</span>
            <img src="./../../assets/pro.png" alt="">
          </li>
        </ul>
      </div>
      <div class="birdCotent2">
        <div class="birdCotent2Tit">
          <h3 class="tit1">求助问题</h3>
          <h5 class="tit_change"><span>推荐</span><span>最新</span><span>公司相关</span></h5>
        </div>
        <h4>以下问题正在急切寻求帮助</h4>
      </div>
      <ul class="birdCotent3">
        <li v-for="(item, index) of help" :key="index">
          <div class="birdCotent3Top">
            <div class="birdCotent3TopLeft">
              <div class="birdCotent3TopImg">
                <img :src="item.img" alt="">
              </div>
              <span>{{ item.h1 }}</span>
            </div>
            <div class="birdCotent3TopRight">
              创建于<span>{{ item.h2 }}</span>
            </div>
          </div>
          <div class="birdCotent3Middle">
            <div class="birdCotent3MiddleContent">
              {{ item.h3 }}
            </div>
            <p><span>{{ item.h4 }}</span><span></span><span></span></p>
          </div>
          <div class="birdCotent3Bottom">
            <div class="birdCotent3BottomLeft">
              <span>{{ item.h5 }}</span>位老鸟认领
            </div>
            <div class="birdCotent3BottomRight">
              <span>认领</span>
            </div>
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
      birdRecommend: [
        {
          bird0: 'https://ps.ssl.qhimg.com/t01100d776eb76150f6.jpg',
          bird1: '陈凯',
          bird2: '上海威士敦',
          bird3: '合伙人'
        },
        {
          bird0: 'https://ps.ssl.qhimg.com/t011a9c733fb19cb398.jpg',
          bird1: '常虹全',
          bird2: '蚂蚁金服',
          bird3: '运营总监'
        },
        {
          bird0: 'https://ps.ssl.qhimg.com/t01e839a9ba9d60313f.jpg',
          bird1: '任岩峰',
          bird2: '看准网',
          bird3: '职业规划家'
        },
        {
          bird0: 'https://ps.ssl.qhimg.com/t01fc4db5d95072edc5.jpg',
          bird1: '文豪',
          bird2: '苏宁易购',
          bird3: '营销策划经理'
        }
      ],
      help: JSON.parse(localStorage.getItem('birdHelp'))
      // help: [
      //   {
      //     img: 'https://ps.ssl.qhimg.com/t015ada25ea647a91d8.jpg',
      //     h1: '阿鲁',
      //     h2: '1天前',
      //     h3: '错过了秋招，是不是春招就没有什么好的企业了？',
      //     h4: '#职业规划',
      //     h5: 25
      //   },
      //   {
      //     img: 'https://ps.ssl.qhimg.com/t011e2d476549d61c17.jpg',
      //     h1: '赵子豪',
      //     h2: '2天前',
      //     h3: '职场人士如何利用业余时间实现自我提升？',
      //     h4: '#职业规划',
      //     h5: 11
      //   },
      //   {
      //     img: 'https://ps.ssl.qhimg.com/t01bbf7bb58eb137f62.jpg',
      //     h1: '卢金秋',
      //     h2: '2天前',
      //     h3: '哪些情况意味着你该跳槽啦？',
      //     h4: '#职业规划',
      //     h5: 8
      //   },
      //   {
      //     img: 'https://ps.ssl.qhimg.com/t01ea1c82515c090f8e.jpg',
      //     h1: '田甜',
      //     h2: '3天前',
      //     h3: '未来五年职场上，什么人最抢手？',
      //     h4: '#职业规划',
      //     h5: 16
      //   }
      // ]
    }
  },
  methods: {
    toHelp () {
      this.$router.push({
        path: '/birdHelp'
      })
      localStorage.setItem('birdHelp', JSON.stringify(this.help))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content {
  background: #F8F8F8;
}
.birdmessage {
  width: 100%;
  background: #f4f4f4;
  padding: 0.18rem 0.5rem;
  border-bottom: 1px solid #f4f4f4;
  .birdmessageBottom {
    font-size: 0.14rem;
    color: #939393;
    text-align: center;
    span {
      display: inline-block;
      width: 0.92rem;
      height: 0.26rem;
      background: #D9D9D9;
      border-radius: 0.24rem;
      text-align: center;
      line-height: 0.26rem;
    }
  }
  .birdmessageTop {
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    color: #5E5E5E;
    font-size: 0.12rem;
    margin-bottom: 0.24rem;
    .birdmessageTopMiddle {
      width: 0.5rem;
      height: 0.5rem;
      background: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 0.5rem;
      margin-left: 0.16rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
      }
    }
    .birdmessageTopLeft {
      display: flex;
      flex-direction: column;
      span {
        &:first-child {
          padding-top: 0.15rem;
        }
      }
    }
    .birdmessageTopRight {
      display: flex;
      flex-direction: column;
      span {
        &:first-child {
          padding-top: 0.15rem;
        }
      }
    }
  }
}
.birdCotent1 {
  width: 100%;
  padding: 0.2rem 0;
  background: #fff;
  position: relative;
  margin-bottom: 0.18rem;
  .birdCotent1Tit {
    height: 0.24rem;
    line-height: 0.24rem;
    @include flexbox();
    margin-bottom: 0.1rem;
    padding: 0 0.2rem;
    @include justify-content(space-between);
    .tit1 {
      font-size: 0.16rem;
      font-weight: normal;
      height: 0.24rem;
      line-height: 0.24rem;
      color: #5E5E5E;
    }
    .tit_change {
      font-weight: normal;
      font-size: 0.14rem;
      color: #828282;
      height: 0.24rem;
      line-height: 0.24rem;
    }
  }
  h4 {
    font-size: 0.12rem;
    color: #5E5E5E;
    padding: 0 0.2rem;
    font-weight: normal;
    margin-bottom: 0.2rem;
  }
  .birdmessageRecommend {
    width: 100%;
    display: flex;
    padding: 0 0.1rem 0.2rem;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      b {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: #fff;
        text-align: center;
          line-height: 0.6rem;
        img {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 50%;
        }
      }
      span {
        font-size: 0.1rem;
        color: #A8A8A8;
        &:nth-of-type(1) {
          color: #5E5E5E;
          font-size: 0.14rem;
          margin-top: 0.15rem;
          margin-bottom: 0.06rem;
        }
      }
    }
  }
  .birdmessagePosition {
    position: absolute;
    width: 100%;
    padding: 0 0.18rem;
    display: flex;
    justify-content: space-between;
    li {
      width: 1rem;
      height: 1.2rem;
      background: #D7D7D7;
      border-radius: 0.06rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 0.47rem;
        height: 0.28rem;
      }
      span {
        color: #5E5E5E;
        font-size: 0.16rem;
        &:first-child {
          font-size: 0.1rem;
        }
        &:nth-child(2) {
          margin-bottom: 0.1rem;
        }
      }
    }
  }
}
.birdCotent2 {
  width: 100%;
  padding: 1.43rem 0 0;
  background: #fff;
  .birdCotent2Tit {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    h3 {
      color: #5e5e5e;
      font-size: 0.16rem;
      font-weight: normal;
    }
    h5 {
      font-size: 0.12rem;
      color: #797979;
      font-weight: normal;
      span {
        margin-right: 0.1rem;
        margin-top: 0.04rem;
        display: inline-block;
      }
    }
  }
  h4 {
    padding: 0 0.2rem 0.1rem;
    font-size: 0.12rem;
    color: #9B9B9B;
    font-weight: normal;
    margin-top: 0.1rem;
    border-bottom: 1px dotted #cecece;
  }
}
.birdCotent3 {
  width: 100%;
  background: #f8f8f8;
  li {
    width: 100%;
    background: #fff;
    overflow: hidden;
    margin-bottom: 0.1rem;
    padding: 0 0.2rem 0.04rem;
    .birdCotent3Top {
      display: flex;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0.2rem 0;
      justify-content: space-between;
      color: #9B9B9B;
      .birdCotent3TopLeft {
        display: flex;
        justify-content: flex-start;
        font-size: 0.14rem;
        .birdCotent3TopImg {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          text-align: center;
          line-height: 0.5rem;
          margin-right: 0.08rem;
          img {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
        }
      }
      .birdCotent3TopRight {
        font-size: 0.1rem;
      }
    }
    .birdCotent3Middle {
      width: 100%;
      background: #EAEAEA;
      border-radius: 0.1rem;
      padding: 0.15rem 0.12rem 0.15rem;
      font-size: 0.12rem;
      color: #9B9B9B;
      margin-bottom: 0.1rem;
      .birdCotent3MiddleContent {
        margin-bottom: 0.1rem;
      }
    }
    .birdCotent3Bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .birdCotent3BottomLeft {
        color: #979797;
        font-size: 0.1rem;
      }
      .birdCotent3BottomRight {
        color: #101010;
        font-size: 0.14rem;
        margin-bottom: 0.1rem;
        span {
          width: 0.65rem;
          background: #EAEAEA;
          border-radius: 0.34rem;
          display: inline-block;
          text-align: center;
          padding: 0.02rem 0 0;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
