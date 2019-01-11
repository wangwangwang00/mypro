<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/home" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">问答</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item class="mint-swipe-item" v-for="(item, index) of bannerlist" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>

      <ul class="AskAnswerContent">
        <li v-for="(item, index) of list" :key="index" :class="{'active':ind === index}" @click="tab(index)">{{ item }}</li>
      </ul>
      <ul class="AskAnswerContent0 AskAnswerContent1">
        <li @click="questiondetail(itm.tit, itm.look, itm.answer, itm.care)" v-for="(itm, idx) of listContent" :key="idx">
          <p>{{ itm.tit }}</p>
          <div class="AskAnswerContent1Con">{{ itm.p1 }}</div>
          <div class="AskAnswerContent1Img">
            <img :src="itm.imgs" alt="">
          </div>
          <div class="AskAnswerContent1User">
            <div class="AskAnswerContent1UserLeft">
              <img :src="itm.pic" alt="">
              <span>{{ itm.username }}</span>
            </div>
            <div class="AskAnswerContent1UserRight">
              <span><span>{{ itm.look }}</span>查看</span>
              <span><span>{{ itm.answer }}</span>个回答</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="AskAnswerContent0 AskAnswerContent2">
        <li @click="questiondetail(itm.tit, itm.look, itm.answer, itm.care)" v-for="(itm, idx) of listContent2" :key="idx">
          <p>{{ itm.tit }}</p>
          <div class="AskAnswerContent1Con">{{ itm.p1 }}</div>
          <div class="AskAnswerContent1Img">
            <img :src="itm.imgs" alt="">
          </div>
          <div class="AskAnswerContent1User">
            <div class="AskAnswerContent1UserLeft">
              <img :src="itm.pic" alt="">
              <span>{{ itm.username }}</span>
            </div>
            <div class="AskAnswerContent1UserRight">
              <span><span>{{ itm.look }}</span>查看</span>
              <span><span>{{ itm.answer }}</span>个回答</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="AskAnswerContent0 AskAnswerContent3">
        <li @click="questiondetail(itm.tit, itm.look, itm.answer, itm.care)" v-for="(itm, idx) of listContent3" :key="idx">
          <p>{{ itm.tit }}</p>
          <div class="AskAnswerContent1Con">{{ itm.p1 }}</div>
          <div class="AskAnswerContent1Img">
            <img :src="itm.imgs" alt="">
          </div>
          <div class="AskAnswerContent1User">
            <div class="AskAnswerContent1UserLeft">
              <img :src="itm.pic" alt="">
              <span>{{ itm.username }}</span>
            </div>
            <div class="AskAnswerContent1UserRight">
              <span><span>{{ itm.look }}</span>查看</span>
              <span><span>{{ itm.answer }}</span>个回答</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="AskAnswerContent0 AskAnswerContent4">
        <li @click="questiondetail(itm.tit, itm.look, itm.answer, itm.care)" v-for="(itm, idx) of listContent4" :key="idx">
          <p>{{ itm.tit }}</p>
          <div class="AskAnswerContent1Con">{{ itm.p1 }}</div>
          <div class="AskAnswerContent1Img">
            <img :src="itm.imgs" alt="">
          </div>
          <div class="AskAnswerContent1User">
            <div class="AskAnswerContent1UserLeft">
              <img :src="itm.pic" alt="">
              <span>{{ itm.username }}</span>
            </div>
            <div class="AskAnswerContent1UserRight">
              <span><span>{{ itm.look }}</span>查看</span>
              <span><span>{{ itm.answer }}</span>个回答</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import Vue from 'vue'
Vue.use(Navbar.name, Navbar, TabItem.name, TabItem, TabContainer.name, TabContainer, TabContainerItem.name, TabContainerItem)
export default {
  data () {
    return {
      ind: 0,
      bannerlist: [
        // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=841900140,460523840&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2617644562,3774889722&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2882656210,620018548&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4283752023,2455504605&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=577195185,1391384620&fm=27&gp=0.jpg'
      ],
      list: [
        '精选',
        '干货',
        '狗血',
        '唠嗑'
      ],
      listContent: [
        {
          tit: '面试中如何回答“为什么从上一家公司离职”？',
          p1: '首先我们要先了解面试官想要这道问题了解到什么：1.面试官试图从中了解你求职的动机，愿望以...',
          imgs: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=138311660,1833049594&fm=85&app=57&f=JPEG?w=121&h=75&s=2ECA7223E70658EA087CA0DA0100C0B6',
          pic: 'https://ps.ssl.qhimg.com/t0115dd5a1b89bd69a7.jpg',
          username: '恰似惊鸿',
          look: '1.2W',
          answer: 76,
          care: 32
        },
        {
          tit: '提离职被公司加薪挽留，怎么办？',
          p1: '首先我们要先了解面试官想要这道问题了解到什么：1.面试官试图从中了解你求职的动机，愿望以...',
          imgs: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4035506357,2563713796&fm=85&app=57&f=JPEG?w=121&h=75&s=9BA84B842466911388A0747B0300D018',
          pic: 'https://ps.ssl.qhimg.com/t0119be5d3af641160b.jpg',
          username: '小皮猴',
          look: '1.7W',
          answer: 45,
          care: 18
        },
        {
          tit: '90%的人不知道的面试小技巧',
          p1: '首先我们要先了解面试官想要这道问题了解到什么：1.面试官试图从中了解你求职的动机，愿望以...',
          imgs: 'https://img06.51jobcdn.com/im/2018/career/dingyue.jpg',
          pic: 'https://ps.ssl.qhimg.com/t015094ca1a2a5af780.jpg',
          username: '白月光',
          look: '2.1W',
          answer: 54,
          care: 39
        }
      ],
      listContent2: [
        {
          tit: '圣诞不孤单，一起来狂欢！',
          p1: '2018年就要结束了，大家在仔细思索如何找到一个高薪好工作的同时，有没有思考过，如何在2018年的最后一个月火速脱单呢？ 时光的沙漏缓缓流淌，流走的除了2018年的时光，还有...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20181206/513a5d14fa556be5d0059873ae6439e4be1bd4a3bd2a63f070bdbdada9aad826_s.png',
          pic: 'https://ps.ssl.qhimg.com/t014ba00e1f225e7ebb.jpg',
          username: '竹马成双',
          look: '0.32W',
          answer: 76,
          care: 24
        },
        {
          tit: '为什么从来没有人告诉我该这样跳槽？！',
          p1: '“在同一个公司待多久跳槽最适合”，这是个老生常谈的话题。但是究竟多久跳槽一次才合适，让自己有所成长又不至于太变化无常呢？跳槽频率意味着什么？无论是HR还是猎头，对应聘者非常看重的一点便是“忠诚度”，因...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180308/dc271d5c5c6c8bb114fb7012ad7360a547b88eb8c69913e29b22af09676d7acd_s.png',
          pic: 'https://ps.ssl.qhimg.com/t0131600b1fd612a93b.jpg',
          username: '向日葵',
          look: '1.2W',
          answer: 65,
          care: 89
        },
        {
          tit: '90%连一份简历都写不好，老板凭什么要你？',
          p1: '“在各种招聘网站投了一堆简历，却没有几个让去面试的，好不容易有面试的，聊几句就被打发走了！哎，哥，你说怎么我找个工作这么难呢？”赵乐拿起玻璃杯猛灌了一口燕京啤酒，淡蓝色的杯子在灯光下泛出幽幽的蓝光，手...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180308/0080e08735665885cac794842b6a883847b88eb8c69913e29b22af09676d7acd_s.png',
          pic: 'https://ps.ssl.qhimg.com/t01f825277f338e5055.png',
          username: '青梅',
          look: '2.3W',
          answer: 154,
          care: 98
        }
      ],
      listContent3: [
        {
          tit: '哪些情况意味着你该跳槽啦？',
          p1: '辛辛苦苦干了一年，老王满心欢喜地以为老板会发个丰厚的年终奖，却传来小道消息说今年年终奖是“飘柔大礼包”，老王气炸了，嚷嚷着要换工作。今天他不小心看到了新闻说深圳一土豪公司的年终奖是房子，拎包入住的房子...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180308/9bd0bf6bd150c74b713641a3ef9caea947b88eb8c69913e29b22af09676d7acd_s.png',
          pic: 'https://ps.ssl.qhimg.com/t01720e65a02a2edf16.jpg',
          username: '开心心',
          look: '0.32W',
          answer: 76,
          care: 24
        },
        {
          tit: 'BOSS直聘大牌狂欢节来啦！',
          p1: '自 3月5日起，BOSS直聘集结130家超级名企，掀起2018招聘行业最大规模狂欢！ BOSS直聘大牌狂欢节，11城联动，每日更新，千万牛人参与，盛大开启！ 3月5日品牌合集...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180226/b48be622fae5a8ef73076f0f2fb02173be1bd4a3bd2a63f070bdbdada9aad826_s.png',
          pic: 'https://ps.ssl.qhimg.com/t015d7c60a11e24b1d5.jpg',
          username: '明天你好',
          look: '1.8W',
          answer: 276,
          care: 143
        },
        {
          tit: '90%职场青年感情状态报告：1/4年轻人正在精神异地恋，不想结婚因为穷',
          p1: '本报告由BOSS直聘和网易有道词典联合发布，如需转载请移步BOSS直聘微信公号（ID：bosszhipin）申请转载。七夕将至，BOSS直聘和有道词典联合发起了一次认真的《2018中国职场青年感情状态...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180816/743c5fc58ad21bc482bea4e5a6dc9606c6407cb7c39ed9df81ce65de750288b8_s.png',
          pic: 'https://ps.ssl.qhimg.com/t01211c57ad963f370a.jpg',
          username: '小黄鸭',
          look: '2.6W',
          answer: 635,
          care: 158
        }
      ],
      listContent4: [
        {
          tit: '请收下格莱美®音乐节的这张免费门票',
          p1: '对于喜欢音乐的朋友来说，格莱美音乐节无疑是一年一度的盛典级狂欢。上周，格莱美®音乐节的重磅消息一经宣布，如同在中国爱乐人心中投下一枚重磅炸弹。本次音乐节，首批宣布的阵容包括Pharrell Willi...',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20180402/aba6d91c9dd4221303b67ebe7f1f4fbdeb23fe2641003ad07d93ebdd63300629_s.jpg',
          pic: 'https://ps.ssl.qhimg.com/t01b4ae6ba7f70d0142.jpg',
          username: '恰似惊鸿',
          look: '2.4W',
          answer: 413,
          care: 163
        },
        {
          tit: '《无问西东》正在热映，发行方影联传媒正在热招',
          p1: '由章子怡、黄晓明、王力宏、张震、陈楚生主演，李芳芳编剧、导演的电影《无问西东》于1月12日上映，影联传媒是发行方之一。“影片质量非常好。”影联传媒总经理讲武生热情推荐该片，一脸欣喜。影联传媒很看重这个...',
          imgs: 'https://ps.ssl.qhimg.com/sdmt/215_135_100/t01f906799c1d23d4c1.jpg',
          pic: 'https://ps.ssl.qhimg.com/t018cca597d9c12ce7c.jpg',
          username: '酱酱',
          look: '3.4W',
          answer: 753,
          care: 356
        },
        {
          tit: '90%你有freestyle吗？',
          p1: '你有freestyle吗？你想随时展示你的freestyle吗？你想在日常工作中keep real，忠于自我，保持初心吗？这里有个机会，要不要试一试？月薪14K-16K！高薪诚聘优秀的新媒体运营人！',
          imgs: 'https://img.bosszhipin.com/beijin/article/cover/20171109/f3a2aff2f900c27f3e444859e9f1d0b6be1bd4a3bd2a63f070bdbdada9aad826_s.jpg',
          pic: 'https://ps.ssl.qhimg.com/t017d4d5bf6dc25dab6.jpg',
          username: '一路向前',
          look: '3.1W',
          answer: 762,
          care: 376
        }
      ]
    }
  },
  components: {
  },
  created () {
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
  },
  methods: {
    tab (index) {
      this.ind = index
      var ul1 = document.querySelector('.AskAnswerContent1')
      var ul2 = document.querySelector('.AskAnswerContent2')
      var ul3 = document.querySelector('.AskAnswerContent3')
      var ul4 = document.querySelector('.AskAnswerContent4')
      if (this.ind === 0) {
        ul2.style.display = 'none'
        ul3.style.display = 'none'
        ul4.style.display = 'none'
        ul1.style.display = 'block'
      } else if (this.ind === 1) {
        ul2.style.display = 'block'
        ul3.style.display = 'none'
        ul4.style.display = 'none'
        ul1.style.display = 'none'
      } else if (this.ind === 2) {
        ul2.style.display = 'none'
        ul3.style.display = 'block'
        ul4.style.display = 'none'
        ul1.style.display = 'none'
      } else {
        ul2.style.display = 'none'
        ul3.style.display = 'none'
        ul4.style.display = 'block'
        ul1.style.display = 'none'
      }
    },
    questiondetail (tit, look, answer, care) {
      this.$router.push({
        path: '/askAnswerChoice'
      })
      var obj = {'askAnswerChoicetit': tit, 'askAnswerChoicelook': look, 'askAnswerChoiceanswer': answer, 'askAnswerChoiceCare': care}
      sessionStorage.setItem('askAnswerMsg', JSON.stringify(obj))
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  width: 100%;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.AskAnswerContent {
  width: 100%;
  height: 0.6rem;
  display: flex;
  background: #f4f4f4;
  li {
    color: #848484;
    font-size: 0.14rem;
    flex: 1;
    text-align: center;
    line-height: 0.6rem;
    border-bottom: 0.1rem solid #F4F4F4;
    &.active {
      border-bottom: 0.1rem solid #D9D9D9;
    }
  }
}
.AskAnswerContent0 {
  width: 100%;
  height: 100%;
  background: #F4F4F4;
  li {
    width: 100%;
    padding: 0.15rem 0.2rem;
    background: #fff;
    margin-bottom: 0.1rem;
    p {
      font-size: 0.14rem;
      color: #808080;
      margin-bottom: 0.08rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .AskAnswerContent1Con {
      width: 90%;
      color: #A6A6A6;
      font-size: 0.12rem;
      line-height: 0.2rem;
    }
    .AskAnswerContent1Img {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-top: 0.1rem;
      margin-bottom: 0.06rem;
      img {
        width: 60%;
        height: 1rem;
      }
    }
    .AskAnswerContent1User {
      width: 100%;
      height: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999999;
      font-size: 0.1rem;
      .AskAnswerContent1UserLeft {
        img {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 100%;
          margin-right: 0.06rem;
        }
      }
    }
  }
}
.AskAnswerContent2 {
  display: none;
}
.AskAnswerContent3 {
  display: none;
}
.AskAnswerContent4 {
  display: none;
}
</style>
