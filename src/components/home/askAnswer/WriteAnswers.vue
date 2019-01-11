<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/askAnswerChoice" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle"></div>
      <div @click="publics" class="right"><span>发布</span></div>
    </header>
    <div class="content">
      <div class="WriteAnswersBody">
        <h3>{{ tit }}</h3>
        <h4>感谢您的分享，您的分享将帮助很多人，至少十个字</h4>
        <textarea name="" id="" cols="30" rows="10" class="text" v-model="list[0].content"></textarea>
      </div>
      <div class="WriteAnswersBottom">
        <div class="addAskLeft" @click="getPic">
          <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
          <span class="iconfont icon-jiahao2"></span> 添加图片
        </div>
        <div class="addAskLeft">
          <input class="nonicks" type="checkbox"/> 匿名
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tit: sessionStorage.getItem('askAnswerChoicetit'),
      actions: [{
        name: '拍照',
        method: this.takephoto1
      }, {
        name: '相册选取',
        method: this.takephoto2
      }],
      sheetVisible: false,
      // content: document.querySelector('.text').value,
      list: [
        {
          content: '',
          name: localStorage.getItem('username'),
          pic: localStorage.getItem('userimg')
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
        path: '/askAnswerChoice'
      })
      if (JSON.parse(localStorage.getItem('list')) !== null) {
        if (document.querySelector('.nonicks').checked) {
          this.list[0].name = '匿名用户'
          localStorage.setItem('list', JSON.stringify(JSON.parse(localStorage.getItem('list')).concat(this.list)))
        } else {
          localStorage.setItem('list', JSON.stringify(JSON.parse(localStorage.getItem('list')).concat(this.list)))
        }
      } else {
        if (document.querySelector('.nonicks').checked) {
          this.list[0].name = '匿名用户'
          localStorage.setItem('list', JSON.stringify(this.list))
        } else {
          localStorage.setItem('list', JSON.stringify(this.list))
        }
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
      color: #979797;
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
