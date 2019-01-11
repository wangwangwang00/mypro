<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back"><span class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">待处理事项</div>
      <div class="right" @click="next">设置</div>
    </header>
    <div class="content">
      <div class="todolist_title">待处理申请</div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t014c9367d441f0d1f1.jpg"/></p>
        <div class="msg_list_content">
          <em>好友请求:</em>
          <i>晴天</i>
        </div>
        <div class="sug"><span class="iconfont icon-cuowu1"></span><span class="iconfont icon-icon--yes"></span></div>
      </div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t01974f7eb7851bbcf8.jpg"/></p>
        <div class="msg_list_content">
          <em>好友请求:</em>
          <i>依然</i>
          <h5>家辉生鲜出纳/财务助理</h5>
        </div>
        <div class="sug"><span class="iconfont icon-cuowu1"></span><span class="iconfont icon-icon--yes"></span></div>
      </div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t013bb853031f586a81.jpg"/></p>
        <div class="msg_list_content">
          <em>好友请求:</em>
          <i>万里隔关山</i>
          <h5>对方请求加你为好友</h5>
        </div>
        <div class="sug"><span class="iconfont icon-cuowu1"></span><span class="iconfont icon-icon--yes"></span></div>
      </div>
      <div class="todolist_title">你可能认识的人</div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t01e5457e6e64f7d57d.jpg"/></p>
        <div class="msg_list_content">
          <i>蔡永康</i>
          <h5>凌凯通信技术有限公司/财务助理</h5>
        </div>
        <div class="addf"><span class="iconfont icon-jiahao4"></span><span class="iconfont">好友</span></div>
      </div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t014cf08457cf53e262.png"/></p>
        <div class="msg_list_content">
          <i>赵澜之</i>
          <h5>上海云端科技有限公司/人事部经理</h5>
        </div>
        <div class="addf"><span class="iconfont icon-jiahao4"></span><span class="iconfont">好友</span></div>
      </div>
      <div class="msg_list">
        <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t018f44c807f24bee2f.jpg"/></p>
        <div class="msg_list_content">
          <i>叶远安</i>
          <h5>或与番</h5>
        </div>
        <div class="addf"><span class="iconfont icon-jiahao4"></span><span class="iconfont">好友</span></div>
      </div>
      <div class="todolist_getmore">加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    next () {
      this.$router.push({
        path: '/antidisturbancedettings'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '@/lib/reset.scss';
 .box{
   letter-spacing: 0.01rem;
 }
 .right{
   margin-right:0.1rem;
 }
 .todolist_title{
   height: 0.3rem;
   width:100%;
   padding:0 0.2rem;
   line-height: 0.3rem;
   background:#ccc;
 }
 .todolist_getmore{
  height: 0.3rem;
  width:100%;
  padding:0 0.2rem;
  line-height: 0.3rem;
  background:#ccc;
  text-align: center
 }
 .msg_list{
      margin:0.1rem 0.2rem;
      /* height:0.7rem; */
      padding:0.1rem 0;
      border-bottom:1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .msgIng{
        float:left;
        width:0.5rem;
        height:0.5rem;
        border-radius:50%;
        margin-right:0.2rem;
        img{
          width:0.5rem;
          height:0.5rem;
          border-radius:50%;
        }
      }
      .msg_list_content{
        flex:1;
        height:100%;
        float:left;
        em{
          display:inline-block;
          font-size:0.14rem;
        }
        h5{
          font-weight:100;
          line-height:0.3rem;
        }
      }
      .sug{
        float: right;
        .icon-cuowu1{
          color:red;
          font-size: 0.25rem;
          padding-left:0.15rem;
        }
        .icon-icon--yes{
          padding-left:0.15rem;
          font-size: 0.25rem;
          color:green;
        }
      }
      .addf{
        border:1px solid #ccc;
        padding:0.05rem;
        border-radius: 0.1rem;
        font-weight:600;
        color:#ccc;
        margin-left:0.1rem;
        .icon-jiahao4{
          padding-right:0.03rem;
          font-weight:600;
        }
      }
    }
</style>
