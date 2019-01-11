<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/home" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">公司详情</div>
      <div class="right" @click="shares"><span class="iconfont icon-fenxiang2"></span></div>
      <mt-popup v-model="popupVisible" position="bottom"  popupVisible=false;>
        <div class="share">
          <img src="./../../../assets/qqqq.jpg">
          <img src="./../../../assets/weixinxin.jpg">
          <img src="./../../../assets/wei_bo.jpg">
        </div>
        <div class="close" @click="none">
          <span>取消</span>
        </div>
      </mt-popup>
    </header>
    <ul class="AskAnswerContent">
      <li v-for="(item, index) of list" :key="index" :class="{'active':ind === index}" @click="tab(index)"><a :href="item.ids">{{ item.tt }}</a></li>
    </ul>
    <div class="content">
      <div class="AskAnswerBodyDetail" id="detail">
        <div class="AskAnswerBodyDetailTit">
          <div class="AskAnswerBodyDetailTitTop">
            <div class="AskAnswerBodyDetailTitTopLeft">
              <P>安阳市贞元（集团）有限责任公司</P>
              <P>
                <span>安阳</span> ·
                <span>房地产开发</span> ·
                <span>1000-9999</span>人
              </P>
            </div>
            <div class="AskAnswerBodyDetailTitTopRight">
              <img src="./../../../assets/pro.png" alt="">
            </div>
          </div>
          <ul class="AskAnswerBodyDetailTitBottom">
            <li><span class="iconfont icon-xinheart118"></span>我想去</li>
            <li><span class="iconfont icon-iconset0454"></span>工作过</li>
          </ul>
        </div>
        <ul class="AskAnswerBodyDetailJudge">
          <li>
            <div class="AskAnswerBodyDetailJudgeLeft">
              100%
            </div>
            <div class="AskAnswerBodyDetailJudgeRight">
              <P>好评率</P>
              <P>员工的真实点评</P>
            </div>
          </li>
          <li>
            <P>排名NO.<span>970</span></P>
            <P>在房地产开发行业排名</P>
          </li>
        </ul>
        <div class="AskAnswerBodyDetailCorporation">
          <div class="AskAnswerBodyDetailCorporationLeft">
            <span>法人代表</span><span>王鹏飞</span>
          </div>
          <div class="AskAnswerBodyDetailCorporationRight">
            <span class="iconfont icon-touxiang"></span>
          </div>
        </div>
        <div class="AskAnswerBodyDetailIntroduction">
          <span>简介</span> 安阳市贞元（ 集团 ）有限责任公司（ 简称“贞元集团” ）生于恒河，长于安阳，数千年的中华传统文化蕴育的新时代的弄潮儿。贞元集团始建于1995年...
        </div>
        <div class="AskAnswerBodyDetailAddress">
          <span>地址</span><span>市殷都区中州路铁西商贸城南侧</span>
        </div>
        <ul class="AskAnswerBodyDetailHasTime">
          <li class="AskAnswerBodyDetailHasTime1">
            <span>成立时间</span><span>1995-02-22</span>
          </li>
          <li class="AskAnswerBodyDetailHasTime2">
            <span>注册资本</span><span>838万元人民币</span>
          </li>
          <li class="AskAnswerBodyDetailHasTime3">
            <span>融资</span><span>暂无</span>
          </li>
        </ul>
        <div class="AskAnswerBodyDetailMore">
          <span>详细信息</span><span class="iconfont icon-arrow-right-copy-copy-copy"></span>
        </div>
      </div>
      <ul class="AskAnswerBodyRecommend" id="recommend">
        <h3>推荐老鸟</h3>
        <li v-for="(item, index) of bird" :key="index">
          <div class="kanComContentLeft">
            <img src="./../../../assets/pic.png" alt="">
            <div class="kanComContentLeftRight">
              <p>{{ item.nick }}</p>
              <p><span>{{ item.name }}</span>/{{ item.position }}</p>
            </div>
          </div>
          <div class="kanComContentRight">
            <span class="iconfont icon-xiaoxi"></span>
          </div>
        </li>
      </ul>
      <div class="AskAnswerBodyJugde" id="judge">
        <div class="AskAnswerBodyJugdeTit">
          <span>员工点评</span><span><span class="iconfont icon-dianping"></span>写点评</span>
        </div>
        <ul class="AskAnswerBodyJugdetag">
          <li>强烈推荐 (<span> 6 </span>)</li>
          <li>推荐 (<span> 0 </span>)</li>
          <li>一般 (<span> 0 </span>)</li>
          <li>不推荐去 (<span> 0 </span>)</li>
          <li>千万别去 (<span> 0 </span>)</li>
        </ul>
        <ul class="AskAnswerBodyJugdes">
          <li v-for="(item, index) of judge" :key="index">
            <div class="AskAnswerBodyJugdesTop">
              <img src="./../../../assets/pic.png" alt="">
              <div class="AskAnswerBodyJugdesTopRight">
                <P>
                  <span>{{ item.j1 }}</span><span>{{ item.j2 }}分</span>
                </P>
                <P>
                  <span>{{ item.j3 }}</span>-
                  <span>{{ item.j4 }}</span>年-
                  <span>{{ item.j5 }}</span>
                </P>
              </div>
            </div>
            <div class="AskAnswerBodyJugdesBottom">
              {{ item.j6 }}
            </div>
          </li>
          <h3><span>查看全部点评 (<i>7</i>)</span><span class="iconfont icon-arrow-right-copy-copy-copy"></span></h3>
        </ul>
      </div>
      <div class="AskAnswerBodyask" id="ask">
        <div class="AskAnswerBodyaskTit">
          <span>公司问答</span><span><span class="iconfont icon-dianping"></span>提问</span>
        </div>
        <ul class="AskAnswerBodyasks">
          <li v-for="(item, index) of ask" :key="index">
            <div class="AskAnswerBodyaskLeft">
                {{ item.a1 }}
            </div>
            <div class="AskAnswerBodyaskRight">
              <span>{{ item.a2 }}</span>个问答
            </div>
          </li>
          <h3><span>查看全部问答 (<i>7</i>)</span><span class="iconfont icon-arrow-right-copy-copy-copy"></span></h3>
        </ul>
      </div>
      <div class="AskAnswerBodyInterview" id="interview">
        <div class="AskAnswerBodyInterviewTit">
          <span>面试经验</span><span><span class="iconfont icon-dianping"></span>写面经</span>
        </div>
        <ul class="AskAnswerBodyInterviews">
          <li>
            暂无公司面试，写一条面经
          </li>
          <p>为你推荐同行业公司的相关面试经历</p>
        </ul>
      </div>
    </div>
    <ul class="bottom">
      <li><span class="iconfont icon-dianping"></span>点评</li>|
      <li><span class="iconfont icon-tiwen1"></span>提问</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ind: 0,
      popupVisible: false,
      list: [
        {
          tt: '公司信息',
          ids: '#detail'
        },
        {
          tt: '老鸟',
          ids: '#recommend'
        },
        {
          tt: '点评',
          ids: '#judge'
        },
        {
          tt: '问答',
          ids: '#ask'
        },
        {
          tt: '面试',
          ids: '#interview'
        }
      ],
      bird: [
        {
          nick: '神仙',
          name: '南京群智房地产开发有限公司',
          position: 'CEO'
        },
        {
          nick: 'BOSS咨询我吧',
          name: '中移互联',
          position: '资深产品经理'
        },
        {
          nick: 'Amanda',
          name: '联想',
          position: 'HRBP'
        },
        {
          nick: 'Banjamin',
          name: '法国迪卡浓体育用品公司',
          position: '物流经理'
        }
      ],
      judge: [
        {
          j1: '匿名用户',
          j2: 5,
          j3: '员工',
          j4: 1,
          j5: '安阳',
          j6: '很满意。机会很多。'
        },
        {
          j1: '匿名用户',
          j2: 5,
          j3: '员工',
          j4: 1,
          j5: '安阳',
          j6: '很满意。机会很多。'
        },
        {
          j1: '匿名用户',
          j2: 5,
          j3: '员工',
          j4: 1,
          j5: '安阳',
          j6: '很满意。机会很多。'
        },
        {
          j1: '匿名用户',
          j2: 5,
          j3: '员工',
          j4: 1,
          j5: '安阳',
          j6: '很满意。机会很多。'
        }
      ],
      ask: [
        {
          a1: '安阳贞元集团融资最新消息！听说顶房子3980一平？',
          a2: 1
        },
        {
          a1: '安阳贞元集团集资金什么时候可以兑付',
          a2: 1
        },
        {
          a1: '河南安阳贞元集团集资老百姓的钱什么时候能给',
          a2: 1
        }
      ]
    }
  },
  methods: {
    shares () {
      this.popupVisible = true
    },
    none () {
      this.popupVisible = false
    },
    tab (index) {
      this.ind = index
    }
  }
}
</script>

<style lang="scss" scoped>
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
.AskAnswerContent {
  width: 100%;
  height: 0.5rem;
  display: flex;
  padding: 0 0.1rem;
  li {
    font-size: 0.14rem;
    flex: 1;
    text-align: center;
    line-height: 0.5rem;
    border-bottom: 1px solid #E6E6E6;
    a {
      color: #797979;
    }
    &.active {
      border-bottom: 2px solid #BBBBBB;
    }
  }
}
.bottom {
  width: 100%;
  height: 0.5rem;
  background: #BBBBBB;
  display: flex;
  line-height: 0.5rem;
  font-size: 0.14rem;
  color: #666262;
  li {
    width: 50%;
    text-align: center;
    span {
      color: #939393;
      font-size: 0.2rem;
      padding-right: 0.05rem;
      font-weight: bold;
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  .AskAnswerBodyDetail {
    padding: 0 0.18rem;
    display: flex;
    margin-bottom: 0.1rem;
    flex-direction: column;
    background: #FDFDFD;
    .AskAnswerBodyDetailTit {
      display: flex;
      flex-direction: column;
      padding-top: 0.1rem;
      .AskAnswerBodyDetailTitTop {
        display: flex;
        justify-content: space-between;
        .AskAnswerBodyDetailTitTopRight {
          width: 0.79rem;
          height: 0.64rem;
          margin-left: 0.2rem;
          img {
            width: 0.79rem;
            height: 0.64rem;
          }
        }
        .AskAnswerBodyDetailTitTopLeft {
          p {
            &:first-child {
              font-size: 0.2rem;
              color: #777777;
            }
            &:last-child {
              font-size: 0.12rem;
              color: #A6A6A6;
              margin-top: 0.1rem;
              margin-bottom: 0.14rem;
            }
          }
        }
      }
      .AskAnswerBodyDetailTitBottom {
        display: flex;
        justify-content: space-between;
        height: 0.4rem;
        width: 100%;
        text-align: center;
        line-height: 0.4rem;
        color: #797979;
        font-size: 0.14rem;
        li {
          width: 1.55rem;
          background: #ECECEC;
          span {
            font-size: 0.2rem;
            padding-right: 0.02rem;
          }
        }
      }
    }
    .AskAnswerBodyDetailJudge {
      width: 100%;
      padding: 0.2rem 0;
      border-bottom: 1px solid #dddddd;
      display: flex;
      li {
        height: 0.42rem;
        width: 50%;
        &:first-child {
          border-right: 1px solid #DDDBDB;
          display: flex;
          .AskAnswerBodyDetailJudgeLeft {
            width: 0.42rem;
            height: 0.42rem;
            color: #B5B5B5;
            font-size: 0.14rem;
            border: 1px solid #BBBBBB;
            border-radius: 50%;
            text-align: center;
            line-height: 0.42rem;
            margin-right: 0.04rem;
          }
          .AskAnswerBodyDetailJudgeRight {
            P {
              &:first-child {
                font-size: 0.14rem;
                color: #646464;
              }
              &:last-child {
                color: #B9B9B9;
                font-size: 0.08rem;
              }
            }
          }
        }
        &:last-child {
          padding-left: 0.2rem;
          P {
            &:first-child {
              font-size: 0.14rem;
              color: #646464;
            }
            &:last-child {
              color: #B9B9B9;
              font-size: 0.08rem;
            }
          }
        }
      }
    }
    .AskAnswerBodyDetailCorporation {
      display: flex;
      justify-content: space-between;
      padding: 0.17rem 0;
      .AskAnswerBodyDetailCorporationLeft {
        line-height: 0.3rem;
        span {
          &:first-child {
            font-size: 0.14rem;
            color: #646464;
            margin-right: 0.1rem;
          }
          &:nth-child(2) {
            color: #AAAAAA;
            font-size: 0.14rem;
          }
        }
      }
      .AskAnswerBodyDetailCorporationRight {
        span {
          color: #B5B5B5;
          font-size: 0.2rem;
        }
      }
    }
    .AskAnswerBodyDetailIntroduction {
      width: 100%;
      font-size: 0.14rem;
      color: #646464;
      border-top: 1px solid #D7D7D7;
      border-bottom: 1px solid #D7D7D7;
      padding: 0.15rem 0;
      span {
        color: #101010;
      }
    }
    .AskAnswerBodyDetailAddress {
      font-size: 0.14rem;
      width: 100%;
      padding: 0.15rem 0;
      span {
        color: #101010;
        margin-right: 0.1rem;
        &:last-child {
          color: #AAA9A9;
        }
      }
    }
    .AskAnswerBodyDetailHasTime {
      width: 100%;
      height: 0.6rem;
      border: 1px solid #EAEAEA;
      display: flex;
      justify-content: space-between;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 0.12rem;
        text-align: center;
        padding-top: 0.08rem;
        span {
          &:first-child {
            color: #313131;
          }
          &:last-child {
            color: #AAAAAA;
          }
        }
      }
    }
    .AskAnswerBodyDetailMore {
      display: flex;
      justify-content: space-between;
      color: #595959;
      font-size: 0.14rem;
      padding: 0.2rem 0;
    }
  }
  .AskAnswerBodyRecommend {
    width: 100%;
    background: #FDFDFD;
    padding: 0 0.18rem;
    margin-bottom: 0.1rem;
    padding-bottom: 0.2rem;
    li {
      width: 100%;
      height: 0.76rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #D7D7D7;
      .kanComContentLeft {
        display: flex;
        justify-content: flex-start;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          margin-right: 0.1rem;
        }
        .kanComContentLeftRight {
          padding-top: 0.04rem;
          p {
            color: #757575;
            &:first-child {
              font-size: 0.14rem;
            }
            &:last-child {
              font-size: 0.1rem;
            }
          }
        }
      }
      .kanComContentRight {
        .icon-xiaoxi {
          font-size: 0.24rem;
          color: #9D9B9B;
        }
      }
    }
    h3 {
      padding-top: 0.3rem;
      font-size: 0.16rem;
      color: #626262;
      font-weight: normal;
    }
  }
  .AskAnswerBodyJugde {
    width: 100%;
    background: #FDFDFD;
    padding: 0 0.18rem;
    margin-bottom: 0.1rem;
    .AskAnswerBodyJugdeTit {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      span {
        &:last-child {
          font-size: 0.12rem;
          color: #626262;
          background: #AEAEAE;
          padding: 0 0.1rem;
          border-radius: 0.3rem;
          &:first-child {
            padding: 0 0.05rem 0 0;
            font-weight: bold;
          }
        }
        &:first-child {
          font-size: 0.16rem;
          color: #626262;
        }
      }
    }
    .AskAnswerBodyJugdetag {
      padding-top: 0.1rem;
      li {
        float: left;
        background: #F0F0F0;
        color: #9b9b9b;
        margin-right: 0.2rem;
        padding: 0 0.1rem;
        margin-bottom: 0.1rem;
        border-radius: 0.3rem;
        padding-top: 0.01rem;
      }
    }
    .AskAnswerBodyJugdes {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        width: 100%;
        padding: 0.12rem 0;
        border-bottom: 1px solid #D7D7D7;
        display: flex;
        flex-direction: column;
        .AskAnswerBodyJugdesTop {
          display: flex;
          img {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            margin-right: 0.1rem;
          }
          .AskAnswerBodyJugdesTopRight {
            flex: 1;
            p {
              width: 100%;
              &:first-child {
                display: flex;
                justify-content: space-between;
                span {
                  &:last-child {
                    border: 1px solid #A8A8A8;
                    padding: 0 0.1rem;
                    border-radius: 0.3rem;
                    font-size: 0.12rem;
                    color: #AEAEAE;
                  }
                  &:last-child {
                    font-size: 0.14rem;
                    color: #626262;
                  }
                }
              }
              &:last-child {
                color: #AEACAC;
                font-size: 0.12rem;
              }
            }
          }
        }
        .AskAnswerBodyJugdesBottom {
          font-size: 0.14rem;
          color: #ACABAB;
          padding-top: 0.1rem;
        }
      }
    }
    h3 {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      color: #808080;
      padding: 0.1rem 0;
      font-weight: normal;
    }
  }
  .AskAnswerBodyask {
    width: 100%;
    background: #FDFDFD;
    padding: 0 0.18rem;
    margin-bottom: 0.1rem;
    .AskAnswerBodyaskTit {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      span {
        &:last-child {
          font-size: 0.12rem;
          color: #626262;
          background: #AEAEAE;
          padding: 0 0.1rem;
          border-radius: 0.3rem;
          &:first-child {
            padding: 0 0.05rem 0 0;
            font-weight: bold;
          }
        }
        &:first-child {
          font-size: 0.16rem;
          color: #626262;
        }
      }
    }
    .AskAnswerBodyasks {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #B0B0B0;
        font-size: 0.12rem;
        padding: 0.2rem 0;
        border-bottom: 1px solid #D7D7D7;
        .AskAnswerBodyaskLeft {
          width: 70%;
        }
        .AskAnswerBodyaskRight {
          width: 15%;
        }
      }
    }
    h3 {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      color: #808080;
      padding: 0.1rem 0;
      font-weight: normal;
    }
  }
  .AskAnswerBodyInterview {
    width: 100%;
    background: #FDFDFD;
    padding: 0 0.18rem 0.1rem;
    .AskAnswerBodyInterviewTit {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      span {
        &:last-child {
          font-size: 0.12rem;
          color: #626262;
          background: #AEAEAE;
          padding: 0 0.1rem;
          border-radius: 0.3rem;
          &:first-child {
            padding: 0 0.05rem 0 0;
            font-weight: bold;
          }
        }
        &:first-child {
          font-size: 0.16rem;
          color: #626262;
        }
      }
    }
    .AskAnswerBodyInterviews {
      width: 100%;
      li {
        width: 100%;
        font-size: 0.12rem;
        color: #C3C3C3;
        padding: 0.2rem 0;
        border-bottom: 1px solid #D7D7D7;
      }
      p {
        color: #808080;
        font-size: 0.12rem;
        padding-top: 0.1rem;
      }
    }
  }
}
</style>
