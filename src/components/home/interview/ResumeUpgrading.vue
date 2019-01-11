<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/interview" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">{{ tit }}</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <ul class="resumeUpgradingLeft">
        <li @click="getTit(item.content)" v-for="(item, index) of list" :key="index">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="resumeUpgradingContent">
            {{ item.content }}
          </div>
        </li>
      </ul>
      <ul class="resumeUpgradingLeft">
        <li @click="getTit(item.content)" v-for="(item, index) of list1" :key="index">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="resumeUpgradingContent">
            {{ item.content }}
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
      tit: sessionStorage.getItem('questionTit'),
      list: [
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/97_135_100/t01c5fe001b3d8c3e89.jpg',
          content: '简历丨写英文简历的你,会感激今天收藏的自己'
        },
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/87_135_100/t01572dc73df7874a69.jpg',
          content: '简历丨会员群聊精华流出超详细干货，教你搞定简历'
        },
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/85_135_100/t01367dc93cf36bb056.jpg',
          content: '简历丨一举拿下29份offer的简历'
        }
      ],
      list1: [
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/91_135_100/t01113c9adb6a119394.jpg',
          content: '简历丨简要而不简单让你的简历Hold住HR'
        },
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/90_135_100/t010cb68fdd3f17b147.jpg',
          content: '简历丨校招，冲出网申的24个要点'
        },
        {
          img: 'https://ps.ssl.qhimg.com/sdmt/89_135_100/t01247ab50dcafe9c95.jpg',
          content: '简历丨0实习经验？你一样能写出优秀的简历'
        }
      ]
    }
  },
  methods: {
    getTit (content) {
      sessionStorage.setItem('articleContent', content)
      this.$router.push({
        path: '/articleDetails'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.3rem 0 0.3rem;
  .resumeUpgradingLeft {
    width: 1.4rem;
    height: 100%;
    li {
      width: 100%;
      .img {
        width: 100%;
        height: 2rem;
        img {
          width: 100%;
          height: 2rem;
        }
      }
      .resumeUpgradingContent {
        width: 100%;
        color: #969696;
        font-size: 0.14rem;
        margin: 0.15rem 0;
        /* overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; */
        text-align: center;
      }
    }
  }
}
</style>
