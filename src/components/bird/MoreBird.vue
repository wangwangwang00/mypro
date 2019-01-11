<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/bird" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">全部老鸟</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <ul>
        <li v-for="(item, index) of list" :key="index">
          <img :src="item.img" alt="">
          <div class="moreBirdRight">
            <P><span>{{ item.name }}</span><span>{{ item.job }}</span></P>
            <P>擅长：<span>{{ item.advantage }}</span></P>
            <P>￥<span>{{ item.price }}</span>帮助过<span>{{ item.person }}</span>人</P>
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
          img: 'https://ps.ssl.qhimg.com/t01100d776eb76150f6.jpg',
          name: '陈凯',
          job: '上海合伙人',
          advantage: '职场生存法则，职业方向选择',
          price: 120,
          person: 1208
        },
        {
          img: 'https://ps.ssl.qhimg.com/t011a9c733fb19cb398.jpg',
          name: '常虹全',
          job: '蚂蚁运营总监',
          advantage: '帮内推，面试指导，进阶指导',
          price: 90,
          person: 936
        },
        {
          img: 'https://ps.ssl.qhimg.com/t01e839a9ba9d60313f.jpg',
          name: '任岩峰',
          job: '职业规划家',
          advantage: '职业方向选择，职场困惑解答',
          price: 100,
          person: 1132
        },
        {
          img: 'https://ps.ssl.qhimg.com/t01fc4db5d95072edc5.jpg',
          name: '文豪',
          job: '苏营销策划经理',
          advantage: '职场生存法则，职业方向选择',
          price: 80,
          person: 836
        },
        {
          img: 'https://ps.ssl.qhimg.com/t011475e4070b5149ac.jpg',
          name: 'BOSS大王',
          job: '资深产品经理',
          advantage: '帮内推，面试指导，进阶指导',
          price: 50,
          person: 567
        },
        {
          img: 'https://ps.ssl.qhimg.com/t015a9a98a2c4387f22.jpg',
          name: 'Amanda',
          job: '设计总监',
          advantage: '职场生存法则，职业方向选择',
          price: 30,
          person: 428
        },
        {
          img: 'https://ps.ssl.qhimg.com/t018e92fd34e6a8d572.jpg',
          name: '神仙',
          job: '项目经理',
          advantage: '帮内推，面试指导，进阶指导',
          price: 30,
          person: 384
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header {
  .right {
    margin-right: 0.1rem;
  }
}
.content {
  ul {
    li {
      border-bottom: 1px solid #bbb;
      display: flex;
      padding: 0.2rem;
      font-size: 0.12rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
      .moreBirdRight {
        span {
          margin-right: 0.1rem;
        }
        p {
          &:first-child {
            color: #666;
            font-size: 0.14rem;
            span {
              &:last-child {
                color: #999;
                font-size: 0.12rem;
              }
            }
          }
          &:nth-child(2) {
            color: #666;
            margin-bottom: 0.02rem;
          }
          &:last-child {
            color: #999;
            span {
              &:last-child {
                color: #999;
                font-size: 0.12rem;
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
