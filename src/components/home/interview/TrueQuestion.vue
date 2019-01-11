<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/interview" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">{{ tit }}</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <ul class="TrueQuestionContent">
          <router-link tag="li" to="/articleDetails" v-for="(item, index) of list" :key="index">
          <P>{{ item.question }}</P>
          <P>
            <span>{{ item.q1 }}</span>
            <span>{{ item.q2 }}</span>
            <span>{{ item.q3 }}</span>
          </P>
          <div class="trueQuestionContents">
            <div class="trueQuestionContentsLeft">
              <img :src="item.img" alt="">
            </div>
            <div class="trueQuestionContentsRight">
              {{ item.content }}
            </div>
          </div>
        </router-link>
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
          question: '最能概括你自己的三个词是什么？',
          q1: '腾讯',
          q2: '18年秋招',
          q3: 'hr面',
          img: 'https://ps.ssl.qhimg.com/t01b58f0053fec08744.jpg',
          content: '其实能够想到的词有很多，随着自己的成长能够概括自己的词也变多了。但是有一点一直不变就是一直以来必别人踏实努力...'
        },
        {
          question: '你希望与什么样的上级共享？',
          q1: '升龙',
          q2: '18年春招',
          q3: 'hr面',
          img: 'https://ps.ssl.qhimg.com/t013a57b560b4383747.jpg',
          content: '您好！之所以能成为领导，肯定有过人之处，是有能力的人。我刚加盟公司，工作经验上欠缺，期望我的上级能多多指导和帮组，让我更快的融入到新的工作中去。既然是上下级关系，那么在工作中就应该无条件的服从上级安排。我会努力学习上级的优点，积极配合上级的工作。'
        },
        {
          question: '你怎么看待学历和能力之间的关系？',
          q1: '通达',
          q2: '18年秋招',
          q3: 'hr面',
          img: 'https://ps.ssl.qhimg.com/t01a75b86100eee0843.jpg',
          content: '学历我想只要是大学专科的学历，就表明觉得我具备了根本的学习能力。剩下的，你是学士也好，还是博士也好，对于这一点的讨论，不是看你学了多少知识，而是看你在这个领域上发挥了什么，也就是所说的能力问题。'
        },
        {
          question: '为什么我们要在众多面试者中选择你？',
          q1: '借鸡下蛋',
          q2: '18年3月',
          q3: 'hr面',
          img: 'https://ps.ssl.qhimg.com/t01ff6eb9ce9c779915.jpg',
          content: '把你的优势说出来,比如说我从事多年这个行业的工作,经验就是优势,如果你有比较高的专业学历也可以说,这个也是优势, 在或者你有多年的类似项目经验,这些你都可以说出来。'
        },
        {
          question: '你觉得应该如何和组员更好的合作？',
          q1: '影月眉',
          q2: '18年10月',
          q3: 'hr面',
          img: 'https://ps.ssl.qhimg.com/t01aa85f03b1149c80c.jpg',
          content: '像这种问题属于开放性质的，没有标准答案，他主要就是考察你是否了解自己的角色定位，回答问题时表达是否清楚明确，另外就是看看你做事的思路怎样，是不是匹配目前的岗位要求。这样你就根据自己的情况来就行，一般情况下从解剖自己开始。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.TrueQuestionContent {
  width: 100%;
  background: #f8f8f8;
  padding: 0 0.1rem;
  li {
    width: 100%;
    background: #fff;
    margin-bottom: 0.1rem;
    padding: 0.2rem;
    overflow: hidden;
    border-radius: 0.1rem;
    p {
      font-size: 0.14rem;
      color: #979797;
      margin-top: 0.1rem;
      &:nth-of-type(2) {
        font-size: 0.12rem;
        margin-top: 0;
        margin-top: 0.06rem;
        span {
          background: #f4f4f4;
          padding: 0.02rem 0.08rem;
          border-radius: 0.1rem;
          text-align: center;
          margin-right: 0.1rem;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    .trueQuestionContents {
      display: flex;
      margin-top: 0.16rem;
      .trueQuestionContentsLeft {
        width: 0.5rem;
        height: 0.5rem;
        background: #ccc;
        border-radius: 100%;
        margin-right: 0.07rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
        }
      }
      .trueQuestionContentsRight {
        width: 2.3rem;
        font-size: 0.1rem;
        color: #979797;
      }
    }
  }
}
</style>
