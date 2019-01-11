<template>
  <div class="box">
    <div class="content">
      <div class="headers">
        <ul>
          <li>
            <!-- <img :src="list.headportrait"/> -->
            <img src="https://ps.ssl.qhimg.com/t012aaa61b026c6fb20.jpg"/>
          </li>
          <li>
            <!-- <span>{{ list.nickname }}</span><span>积分</span><br> -->
            <span>大王</span><span>积分</span><br>
            <span><i class="iconfont icon-icontouxiang1"></i>签到</span><span>积分+3</span>
          </li>
          <li>
            <router-link to="/autocomplete1" tag="span">完善资料</router-link>
            <span class="iconfont icon-arrow-right-copy-copy-copy"></span>
          </li>
        </ul>
      </div>
      <div class="autocomplete">
        <div class="wanshan">
          <p>完善更多资料，解锁更多特权</p>
          <span class="add">
            添加工作履历，教育经历，感兴趣的行业，职业等
          </span>
        </div>
        <router-link to="/autocomplete1" tag="span">
          <span class="go_completion">立即完善</span>
        </router-link>
      </div>
      <div class="list">
        <ul class="list1">
          <li>
            <i class="iconfont icon-gongnengdingyi"></i>
            <span class="zi">我的钱包</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
          <li>
            <i class="iconfont icon-gongnengdingyi"></i>
            <span class="zi">我的求助、认领</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
          <li>
            <i class="iconfont icon-gongnengdingyi"></i>
            <span class="zi">我的开聊/备聊</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
          <li>
            <i class="iconfont icon-gongnengdingyi"></i>
            <span class="zi">成为认证老鸟</span>
            <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
          </li>
        </ul>
        <ul class="list1">
            <li>
              <i class="iconfont icon-gongnengdingyi"></i>
              <router-link to="/attention" tag="span"><span class="zi">我的关注/收藏</span></router-link>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <li>
              <i class="iconfont icon-gongnengdingyi"></i>
              <span class="zi">我的问答</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <li>
              <i class="iconfont icon-gongnengdingyi"></i>
              <span class="zi">我发布的内容</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <li>
              <i class="iconfont icon-gongnengdingyi"></i>
              <span class="zi">我的老东家</span>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
          </ul>
          <ul class="list1">
            <li>
              <i class="iconfont icon-gongnengdingyi"></i>
              <router-link to="/setting" tag="span">
                <span class="zi">设置与帮助</span>
              </router-link>
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li>
            <router-link to="/netpolice" tag="span"><li>
              <i class="iconfont icon-gongnengdingyi"></i>
              
                <span class="zi">网警</span>
              
              <em class="iconfont icon-arrow-right-copy-copy-copy"></em>
            </li></router-link>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    fetch('http://10.8.162.38:8080/selectUserSomeById?id=1').then(res => res.json())
      .then(data => {
        console.log(data.data)
        this.list = data.data
        console.log(this.list)
        localStorage.setItem('userimg', this.list.headportrait)
        localStorage.setItem('username', this.list.nickname)
        sessionStorage.setItem('userimg', this.list.headportrait)
        sessionStorage.setItem('username', this.list.nickname)
      })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  .headers {
    width:100%;
    .icon-icontouxiang1{
      @include text-color(#ccc);
    }
    ul{
      @include flexbox();
      justify-content:space-around;
      li{
        &:nth-child(1) {
          @include rect(0.8rem, 0.8rem);
          @include background-color(#ccc);
          border-radius:50%;
          margin:0.4rem 0;
          img{
            @include rect(0.8rem, 0.8rem);
            border-radius:50%;
          }
        }
        &:nth-child(2) {
          padding-top:0.6rem;
          span{
            padding-right:0.05rem;
            display:inline-block;
            .icon-icontouxiang1{
              padding-right:0.05rem;
            }
          }
        }
        &:nth-child(3) {
          float:right;
          line-height: 1.60rem;
        }
      }
    }
  }
  .autocomplete{
    @include background-color(#ECECEC);
    width:100%;
    height:0.9rem;
    margin-bottom:5px;
    display:flex;
    justify-content: space-between;
    .wanshan{
      margin-left:20px;
      width:1.82rem;
      height:100%;
      float:left;
      p{
        margin-top:0.25rem;
        width:1.82rem;
        height:0.20rem;
        @include text-color(#888787);
        font-size: 0.14rem;
      }
      .add{
        width:1.60rem;
        height:0.43rem;
        @include text-color(#BBB9B9);
        font-size: 0.12rem;
      }
    }
    .go_completion{
      float:right;
      width:1.10rem;
      height:0.34rem;
      @include background-color(#0C84F4);
      @include text-color(#fff);
      text-align: center;
      line-height: 0.34rem;
      border-radius:0.20rem;
      margin-right:0.20rem;
      margin-top:0.33rem;
    }
  }
  .list{
    .list1{
      margin-bottom:0.10rem;
      li{
        @include background-color(#ECECEC);
        padding-left:0.20rem;
        padding-right:0.20rem;
        height:0.50rem;
        border-bottom:1px solid #C7C7C7;
        @include text-color(#A7A4A4);
        i{
          float: left;
          line-height:0.50rem;
          @include text-color(#A29F9F);
        }
        .zi{
          display: block;
          width:1.20rem;
          height:0.30rem;
          line-height:0.50rem;
          margin-left: 0.20rem;
          float: left;
        }
        em{
          float:right;
          line-height:0.50rem;
        }
      }
    }
  }
</style>
