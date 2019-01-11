<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="Maillist"><span class="iconfont icon-tongxunlu"></span></div>
      <div class="middle">消息</div>
      <div class="right" @click="popup"><span class="iconfont icon-zhucetianjiahaoyou"></span></div>
      <mt-popup v-model="popupVisible" position="right" popupVisible=false;>
        <div class="people">
          <div class="triangle"></div>
          <div class="groupchat"><i class="iconfont icon-icon--"></i>发起群聊</div>
          <div class="addfriends"><i class="iconfont icon-tianjiahaoyou"></i>添加朋友</div>
          <div class="scan"><i class="iconfont icon-saoyisao1"></i>扫一扫&nbsp;&nbsp;</div>
        </div>
      </mt-popup>
    </header>
    <div class="content">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索">
      </div>
      <div class="msg">
        <div class="msg_img"><img src="https://ps.ssl.qhimg.com/t01b58f0053fec08744.jpg"/></div>
        <router-link to="/todolist" tag="div">
          <div class="msgg">
            <span>待处理事项</span>
            <span>3个待请求事项</span>
            <p><img src="https://ps.ssl.qhimg.com/t014c9367d441f0d1f1.jpg"><img src="https://ps.ssl.qhimg.com/t01974f7eb7851bbcf8.jpg"><img src="https://ps.ssl.qhimg.com/t013bb853031f586a81.jpg"></p>
          </div>
        </router-link>
      </div>
      <div class="msg_list">
          <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t0143c0b69288a26098.jpg"/></p>
          <router-link tag="div" to="/futureassistant">
            <div class="msg_list_content">
              <em>前途小助手</em>
              <i>官方</i>
              <h5>xxx你好，来到看准的第二天，我门特意...</h5>
            </div>
          </router-link>
      </div>
      <div class="msg_list">
          <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t01798ff003b4d04222.jpg"/></p>
          <div class="msg_list_content">
            <em>求职招聘小助手</em><i>官方</i>
            <h5>【消息卡片】</h5>
          </div>
      </div>
      <div class="msg_list">
          <p class="msgIng"><img src="https://ps.ssl.qhimg.com/t01ffec676cb08b7aa1.jpg"/></p>
          <div class="msg_list_content">
            <em>订阅消息</em>
            <i>官方</i>
            <h5>x老鸟发布动态了</h5>
          </div>
      </div>
      <div class="addFriends">添加好友</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'mint-ui'
Vue.use(Popup)
export default {
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    Maillist () {
      this.$router.push({
        path: '/maillist'
      })
    },
    next () {
      this.$router.go(1)
    },
    popup () {
      this.popupVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '@/lib/reset.scss';
.icon-tongxunlu {
  font-size: 0.22rem;
}
.icon-zhucetianjiahaoyou {
  font-size: 0.22rem;
}
.mint-popup-right {
  top: 1.2rem;
  right: 0;
  bottom: auto;
  left: auto;
  -webkit-transform: translate3d(0, -50%, 0);
          transform: translate3d(0, -50%, 0);
}
.mint-popup{
  .people{
    line-height: 0.4rem;
    position:relative;
    width:1.5rem;
    height:1.41rem;
    border:1px solid #ccc;
    .iconfont{
      padding-right:0.1rem;
      font-size:0.25rem;
    }
    .triangle{
      position: absolute;
      top:-0.3rem;
      right:0.15rem;
      border-style:solid;
      width:0;
      height:0;
      border-width:0.15rem;
      border-color:transparent transparent #fff transparent;
    }
    .groupchat, .addfriends, .scan{
      border-bottom:1px solid #ccc;
    }
  }
}
  .content{
    .search{
      width:80%;
      height:0.25rem;
      border:1px solid #999;
      border-radius:0.1rem;
      margin:0.1rem auto;
      padding-left:0.15rem;
      .icon-sousuo{
        color:rgb(56, 55, 55);
      }
      input{
        border:none;
        color:rgb(56, 55, 55);
        width:90%;
        padding-left:0.05rem;
      }
    }
    .msg{
      padding:0 0.2rem;
      height:1.4rem;
      background:rgb(250, 246, 246);
      display: flex;
      justify-content: flex-start;
      .msg_img{
        display:block;
        width:0.5rem;
        height:0.5rem;
        border-radius:50%;
        float:left;
        background:#fff;
        margin-top:0.3rem;
        margin-right:0.2rem;
        img{
          width:0.5rem;
          height:0.5rem;
          border-radius:50%;
        }
      }
      .msgg{
        float:left;
        padding-top:0.2rem;
        span{
          display:block;
          line-height:0.3rem;
          &:nth-child(1){
            color:rgb(53, 52, 52);
          }
          &:nth-child(2){
            color:rgb(129, 126, 126);
          }
        }
        p{
          margin-top:0.15rem;
          img{
            width:0.3rem;
            height:0.3rem;
            margin-right:0.1rem;
          }
        }
      }
    }
    .msg_list{
      margin:0.1rem 0.2rem;
      height:0.7rem;
      padding:0.1rem 0;
      border-bottom:1px solid #ccc;
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
        height:100%;
        float:left;
        em{
          display:inline-block;
          font-size:0.14rem;
        }
        i{
          color:#ccc;
          border: 1px solid #ccc;
          border-radius:0.2rem;
          width:0.46rem;
          margin-left: 0.05rem;
          font-size:0.14rem;
          display: inline-block;
          text-align: center;
          line-height: 0.2rem;
        }
        h5{
          font-weight:100;
          line-height:0.3rem;
        }
      }
    }
    .addFriends{
      width:70%;
      height:0.4rem;
      text-align: center;
      line-height: 0.4rem;
      background:#C7C7C7;
      margin:0.3rem auto;
      margin-top:0.5rem;
      color:rgb(56, 54, 54);
      border-radius: 0.2rem;
      letter-spacing: 0.03rem;
      font-size:0.16rem;
    }
  }

</style>
