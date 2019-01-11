<template>
  <div class="box">
    <header class="header">
      <div class="left"><span @click="back" class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">发现好公司</div>
      <div class="right" @click="shares"><span class="iconfont icon-fenxiang2"></span></div>
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
      <div class="rankinglistTit">
        <p>最具有潜力的新零售公司</p>
        <p></p>
        <div class="rankinglistTitContent">
          新零售公司已经火了整整一年现在还有哪些公司突出重围
        </div>
      </div>
      <ul class="rankinglistContent">
        <li v-for="(item, index) of listFind" :key="index">
          <div class="kanComContentTop">
            <div class="kanComContentLeft">
              <img :src="item.img" alt="">
            </div>
            <div class="kanComContentRight">
              <p>{{ item.tit }}</p>
              <p><span>{{ item.type }}</span> | <span>{{ item.address }}</span> | <span>{{ item.scale }}</span>人</p>
            </div>
          </div>
          <div class="kanComContentBottom">
            {{ item.content }}
          </div>
        </li>
        <!-- <li>
          <div class="kanComContentTop">
            <div class="kanComContentLeft">
              <img src="" alt="">
            </div>
            <div class="kanComContentRight">
              <p>每日优鲜2.5</p>
              <p><span>电子商务</span> | <span>北京</span> | <span>100-499</span>人</p>
            </div>
          </div>
          <div class="kanComContentBottom">
              “忙起来没空喝水 我说说在便利购一年的感受吧，由于处于创业阶段，公司战略方向不会面临大型调整，为了抢时间出成绩融资，节奏会很快，加班已经成为也内标准，我都历经两次百日会战了，95%都在半夜！”
          </div>
        </li>
        <li>
          <div class="kanComContentTop">
            <div class="kanComContentLeft">
              <img src="" alt="">
            </div>
            <div class="kanComContentRight">
              <p>每日优鲜2.5</p>
              <p><span>电子商务</span> | <span>北京</span> | <span>100-499</span>人</p>
            </div>
          </div>
          <div class="kanComContentBottom">
              “忙起来没空喝水 我说说在便利购一年的感受吧，由于处于创业阶段，公司战略方向不会面临大型调整，为了抢时间出成绩融资，节奏会很快，加班已经成为也内标准，我都历经两次百日会战了，95%都在半夜！”
          </div>
        </li>
        <li>
          <div class="kanComContentTop">
            <div class="kanComContentLeft">
              <img src="" alt="">
            </div>
            <div class="kanComContentRight">
              <p>每日优鲜2.5</p>
              <p><span>电子商务</span> | <span>北京</span> | <span>100-499</span>人</p>
            </div>
          </div>
          <div class="kanComContentBottom">
              “忙起来没空喝水 我说说在便利购一年的感受吧，由于处于创业阶段，公司战略方向不会面临大型调整，为了抢时间出成绩融资，节奏会很快，加班已经成为也内标准，我都历经两次百日会战了，95%都在半夜！”
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible: false,
      listFind: [
        {
          tit: '侠客行',
          type: '旅游',
          address: '江苏',
          scale: '100-1999',
          content: '导游工作是和人打交道的行业，要想和人打好交道，就必须了解各种人的性格，什么性格用什么办法对待。不过我认为，最重要的一点还是自己要先学会做人。对待客人要像对带待亲人那样关心，不但要关心而且还要周到，只关心不周到是没有用的。',
          img: 'https://p.ssl.qhimg.com/dmsmfl/120_75_/t01b659107238794558.webp?size=150x100&phash=7104017016239009641'
        },
        {
          tit: '每日优鲜2.5',
          type: '电子商务',
          address: '北京',
          scale: '100-499',
          content: '“忙起来没空喝水 我说说在便利购一年的感受吧，由于处于创业阶段，公司战略方向不会面临大型调整，为了抢时间出成绩融资，节奏会很快，加班已经成为也内标准，我都历经两次百日会战了，95%都在半夜！”',
          img: 'https://ps.ssl.qhimg.com/t0125c56bb5edef89f7.jpg'
        },
        {
          tit: '禾能量公司',
          type: '能源',
          address: '南京',
          scale: '500-999',
          content: '我哥在华天，有次去他家玩，晚上加班到10点回来问他平时都这么迟吗，他说这算早的，晚的都要2点。我的天。另外还有各种出差。什么瑞士三个月，期间过年不回家，东菀出差回来没两天又去别地。我的天。好累，好可怕！',
          img: 'https://p.ssl.qhmsg.com/dmsmfl/120_115_/t0152dd00a5ca345d8f.webp?size=1038x1038'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
      // console.log()
    },
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
.content {
  background: #F4F4F4;
}
.rankinglistTit {
  width: 100%;
  background: #fff;
  padding: 0.46rem 0.2rem 0.3rem;
  margin-bottom: 0.1rem;
  p {
    &:nth-of-type(1) {
      font-size: 0.16rem;
      color: #7D7D7D;
      line-height: 1;
    }
    &:nth-of-type(2) {
      width: 0.46rem;
      height: 1px;
      background: #BBBBBB;
      margin: 0.2rem 0;
    }
  }
  .rankinglistTitContent {
    color: #A2A2A2;
    font-size: 0.12rem;
    width: 1.86rem;
    line-height: 0.2rem;
  }
}
.rankinglistContent {
  width: 100%;
  li {
    width: 100%;
    background: #fff;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
    .kanComContentTop {
      display: flex;
      justify-content: left;
      margin-bottom: 0.25rem;
      .kanComContentLeft {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.12rem;
        background: #ccc;
        margin-right: 0.14rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 0.12rem;
        }
      }
      .kanComContentRight {
        flex: 1;
        p {
          width: 100%;
          color: #8E8E8E;
          &:nth-of-type(1) {
            font-size: 0.14rem;
            margin-bottom: 0.08rem;
          }
          &:nth-of-type(2) {
            font-size: 0.1rem;
          }
        }
      }
    }
    .kanComContentBottom {
      color: #8E8E8E;
      font-size: 0.1rem;
      line-height: 0.2rem;
      width: 100%;
    }
    &:last-child {
      margin-bottom: 0;
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
</style>
