<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <span @click="back" class="iconfont icon-xiangzuojiantou"></span>
      </div>
      <div class="middle">排行榜</div>
      <div class="right"><span class="iconfont icon-fenxiang2"></span></div>
    </header>
    <div class="content">
      <div class="rankinglistTit">
        <p>十月公司排行榜</p>
        <p></p>
        <div class="rankinglistTitContent">
          十月份过去了，双十一还远吗？本月2018年校招告一段落，热门校招公司流量恢复常态，让我们来看看哪50家公司获得了更多的关注！
        </div>
      </div>
      <ul class="rankinglistContent">
        <li v-for="(item, index) of list" :key="index">
          <div class="kanComContentLeft">
            <img :src="item.img" alt="">
          </div>
          <div class="kanComContentRight">
            <p>{{ item.tit }}</p>
            <p><span>{{ item.type }}</span><span><span>{{ item.score }}</span>分</span></p>
            <p><span><span>{{ item.area }}</span>/<span>{{ item.scale }}</span>人以上</span><span>公司评</span></p>
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
      list: [
        {
          img: 'https://ps.ssl.qhimg.com/t01ef0c3a157d22acb3.jpg',
          tit: '字节跳动',
          type: '互联网',
          score: '95.6',
          area: '北京',
          scale: '1000'
        },
        {
          img: 'https://ps.ssl.qhimg.com/t010f99f56729242317.jpg',
          tit: '优品',
          type: '电商',
          score: '93.2',
          area: '河南',
          scale: '100-499'
        },
        {
          img: 'https://ps.ssl.qhimg.com/t01e93be9aa52b74623.jpg',
          tit: '名创',
          type: '电商',
          score: '92.5',
          area: '湖北',
          scale: '100-499'
        },
        {
          img: 'https://ps.ssl.qhimg.com/t01211c57ad963f370a.jpg',
          tit: '侠客行',
          type: '旅游',
          score: '94.8',
          area: '江苏',
          scale: '500-999'
        },
        {
          img: 'https://ps.ssl.qhimg.com/t014c9367d441f0d1f1.jpg',
          tit: '聚轩坊',
          type: '房地产',
          score: '95.1',
          area: '广东',
          scale: '500-999'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
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
  height: 2.1rem;
  background: #fff;
  padding-left: 0.2rem;
  padding-top: 0.44rem;
  /* margin-bottom: 0.1rem; */
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
    width: 2.91rem;
    line-height: 0.2rem;
  }
}
.rankinglistContent {
  width: 100%;
  padding: 0.1rem;
  li {
    width: 100%;
    height: 0.95rem;
    background: #fff;
    padding: 0.16rem 0.22rem 0 0.22rem;
    display: flex;
    justify-content: left;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    .kanComContentLeft {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.12rem;
      background: #ccc;
      margin-top: 0.04rem;
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
        &:nth-of-type(1) {
          font-size: 0.14rem;
          color: #9D9D9D;
        }
        &:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          font-size: 0.12rem;
          color: #AEAEAE;
        }
        &:nth-of-type(3) {
          display: flex;
          justify-content: space-between;
          font-size: 0.1rem;
          color: #B9B9B9;
        }
      }
    }
  }
}
</style>
