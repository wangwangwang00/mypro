<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/bird" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle"></div>
      <div @click="publics" class="right"><span>发布</span></div>
    </header>
    <div class="content">
      <div class="WriteAnswersBody">
        <h3><img :src="help[0].img" alt=""><span>{{ help[0].h1 }}</span></h3>
        <!-- <h4>请详细描述你的职业困惑，问题背景以及希望得到的帮助，有老鸟认领后，付费即可与TA开聊</h4> -->
        <textarea placeholder="请详细描述你的职业困惑，问题背景以及希望得到的帮助，有老鸟认领后，付费即可与TA开聊" name="" id="" cols="30" rows="10" class="text" v-model="help[0].h3"></textarea>
      </div>
      <div class="WriteAnswersBottom">
        <div class="addAskLeft" @click="getPic">
          <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
          <span class="iconfont icon-jiahao2"></span> 添加图片
        </div>
        <div class="addAskLeft">
          <input class="nonick" type="checkbox"/> 匿名
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actions: [{
        name: '拍照',
        method: this.takephoto1
      }, {
        name: '相册选取',
        method: this.takephoto2
      }],
      sheetVisible: false,
      help: [
        {
          // h1: localStorage.getItem('username'),
          img: 'https://ps.ssl.qhimg.com/t012aaa61b026c6fb20.jpg',
          h1: '大王',
          h2: '刚刚',
          h3: '',
          h4: '#职业规划',
          h5: 0
        }
      ]
    }
  },
  methods: {
    getPic () {
      this.sheetVisible = !this.sheetVisible
    },
    publics () {
      this.$router.push({
        path: '/bird'
      })
      // var nonick = document.querySelector('.nonick')
      // console.log(nonick, document.querySelector('.nonick').checked)
      if (document.querySelector('.nonick').checked) {
        this.help[0].h1 = '匿名用户'
        localStorage.setItem('birdHelp', JSON.stringify(JSON.parse(localStorage.getItem('birdHelp')).concat(this.help)))
      } else {
        localStorage.setItem('birdHelp', JSON.stringify(JSON.parse(localStorage.getItem('birdHelp')).concat(this.help)))
      }
    }
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
  display: flex;
  flex-direction: column;
  .WriteAnswersBody {
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 0.2rem;
    h3 {
      color: #737373;
      font-size: 0.14rem;
      font-weight: normal;
      margin-bottom: 0.08rem;
      img {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
      span {
        color: #777;
      }
    }
    h4 {
      color: #C6C6C6;
      font-size: 0.1rem;
      font-weight: normal;
      margin-bottom: 0.2rem;
    }
    textarea {
      width: 100%;
      height: 4.5rem;
      border: 0;
      color: #999;
      font-size: 0.12rem;
      line-height: 0.2rem;
    }
  }
  .WriteAnswersBottom {
    height: 0.48rem;
    line-height: 0.48rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    border-top: 1px solid #BBBBBB;
  }
}
</style>
