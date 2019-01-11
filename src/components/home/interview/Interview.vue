<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/home" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">面试准备</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="interview">
        <div class="interviewTit">涨知识</div>
        <ul class="interviewContent">
          <li v-for="(item, index) of question" :key="index">
            <div class="interviewContentLeft">
              {{ item.s }}
              <!-- <img :src="item.img" alt=""> -->
            </div>
            <div class="interviewContentMiddle">
              <p>{{ item.modulename }}</p>
              <p>{{ item.modulesynopsis }}</p>
            </div>
            <!-- <router-link tag="span" to="/resumeUpgrading" class="iconfont icon-arrow-right-copy-copy-copy" @click="getInterviewContent(item.q1)"></router-link> -->
            <span class="iconfont icon-arrow-right-copy-copy-copy" @click="getInterviewContent(item.modulename)"></span>
          </li>
        </ul>
      </div>
      <div class="interview">
        <div class="interviewTit">刷真题</div>
        <ul class="interviewContent">
          <li v-for="(itm, idx) of classify" :key="idx">
            <div class="interviewContentLeft">
              <!-- <img src="./../../../assets/pic.png" alt=""> -->
              {{ itm.s1 }}
            </div>
            <div class="interviewContentMiddle">
              <p>{{ itm.modulename }}</p>
            </div>
            <!-- <router-link tag="span" to="/trueQuestion" class="iconfont icon-arrow-right-copy-copy-copy"></router-link> -->
            <span class="iconfont icon-arrow-right-copy-copy-copy" @click="getInterviewContentClass(itm.modulename)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      question: [
        {
          modulename: '简历提升',
          modulesynopsis: '百投百中的简历秘笈',
          img: './../../../assets/pic.png',
          s: '简'
        },
        {
          modulename: '面试准备',
          modulesynopsis: '逢试必过的套路秘籍',
          img: '',
          s: '面'
        },
        {
          modulename: '职业成长',
          modulesynopsis: '产品运营快速入门指南',
          img: '',
          s: '职'
        },
        {
          modulename: '综合经验',
          modulesynopsis: '不可不知的求职内幕',
          img: '',
          s: '综'
        }
      ],
      // question: [
      // ],
      // classify: []
      classify: [
        {
          modulename: '通用类',
          img: '',
          s1: '通'
        },
        {
          modulename: '产品类',
          img: '',
          s1: '产'
        },
        {
          modulename: '运营类',
          img: '',
          s1: '运'
        },
        {
          modulename: '技术类',
          img: '',
          s1: '技'
        },
        {
          modulename: '设计类',
          img: '',
          s1: '设'
        },
        {
          modulename: '行测类',
          img: '',
          s1: '行'
        },
        {
          modulename: '职业评测',
          img: '',
          s1: '职'
        }
      ]
    }
  },
  methods: {
    getInterviewContent (tit) {
      // console.log(tit)
      sessionStorage.setItem('questionTit', tit)
      this.$router.push({
        path: '/resumeUpgrading'
      })
    },
    getInterviewContentClass (tit) {
      // console.log(tit)
      sessionStorage.setItem('questionTit', tit)
      this.$router.push({
        path: '/trueQuestion'
      })
    }
  },
  created () {
    // fetch('http://10.8.162.38:8080/selectAllPreparation').then(res => res.json())
    //   .then(data => {
    //     // console.log(data.data)
    //     var arr = []
    //     var arr1 = []
    //     data.data.map(item => {
    //       // console.log(item)
    //       if (item.moduletype === 1) {
    //         arr.push(item)
    //       }
    //       if (item.moduletype === 2) {
    //         arr1.push(item)
    //       }
    //     })
    //     // console.log(arr)
    //     // console.log(arr1)
    //     this.question = arr
    //     this.classify = arr1
    //   })
  }
}
</script>

<style lang="scss" scoped>
.content{
  .interview {
    width: 100%;
    .interviewTit {
      width: 100%;
      height: 0.36rem;
      padding-left: 0.2rem;
      line-height: 0.36rem;
      color: #777777;
      font-size: 0.18rem;
      background: #f8f8f8;
    }
    .interviewContent {
      width: 100%;
      li {
        width: 100%;
        padding: 0 0.18rem;
        height: 0.7rem;
        line-height: 0.7rem;
        border-bottom: 1px solid #BBBBBB;
        &:last-child {
          border-bottom: 0;
        }
        .interviewContentLeft {
          width: 0.5rem;
          height: 0.5rem;
          background: #0C84F4;
          border-radius: 50%;
          float: left;
          margin-top: 0.1rem;
          margin-right: 0.1rem;
          text-align: center;
          line-height: 0.5rem;
          color: #fff;
          font-size: 0.26rem;
          img {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
        }
        .interviewContentMiddle {
          float: left;
          height: 0.7rem;
          padding-top: 0.2rem;
          line-height: 0.7rem;
          p {
            font-size:0.14rem;
            line-height: 0.2rem;
            &:first-child {
              color:#666666;
              font-size:0.14rem;
            }
            &:last-child {
              font-size: 0.12rem;
              color: #A2A2A2;
            }
          }
        }
        span {
          float: right;
        }
      }
    }
  }
}

</style>
