<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/home" class="left"><span class="iconfont icon-xiangzuojiantou"></span></router-link>
      <div class="middle">看公司</div>
      <router-link tag="div" to="/kanCompanySearch" class="right"><span class="iconfont icon-sousuo"></span></router-link>
    </header>
    <ul class="sort">
      <router-link tag="li" to="/kanCompanyArea">地区<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyIndustry">行业<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyScale">规模<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
      <li>|</li>
      <router-link tag="li" to="/kanCompanyColligate">综合排序<span class="iconfont icon-jiantou-copy-copy"></span></router-link>
    </ul>
    <div class="content">
      <ul class="kanComContent">
        <li>
          <div class="kanComContentLeft">
            <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
          </div>
          <div class="kanComContentRight">
            <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
            <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
            <p><span>30</span>条信息</p>
          </div>
        </li>
        <li>
            <div class="kanComContentLeft">
              <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
            </div>
            <div class="kanComContentRight">
              <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
              <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
              <p><span>30</span>条信息</p>
            </div>
        </li>
        <li>
          <div class="kanComContentLeft">
            <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
          </div>
          <div class="kanComContentRight">
            <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
            <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
            <p><span>30</span>条信息</p>
          </div>
        </li>
        <li>
          <div class="kanComContentLeft">
            <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
          </div>
          <div class="kanComContentRight">
            <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
            <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
            <p><span>30</span>条信息</p>
          </div>
        </li>
        <li>
            <div class="kanComContentLeft">
              <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
            </div>
            <div class="kanComContentRight">
              <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
              <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
              <p><span>30</span>条信息</p>
            </div>
        </li>
        <li>
          <div class="kanComContentLeft">
            <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
          </div>
          <div class="kanComContentRight">
            <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
            <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
            <p><span>30</span>条信息</p>
          </div>
        </li>
        <li>
          <div class="kanComContentLeft">
            <img src="https://ps.ssl.qhimg.com/sdmt/177_135_100/t0149312a41fb4663f5.jpg" alt="">
          </div>
          <div class="kanComContentRight">
            <p><span>贞元集团</span><span>5.0分</span><span>+ 关注</span></p>
            <p><span>安阳</span>|<span>房地产开发</span>|<span>1000-9999人</span></p>
            <p><span>30</span>条信息</p>
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
    }
  },
  methods: {
    // back () {
    //   this.$router.go(-1)
    //   // console.log()
    // }
  }
}
</script>

<style lang="scss" scoped>
.sort{
  width: 100%;
  height: 0.49rem;
  display: flex;
  border-bottom: 1px solid #bbb;
  line-height: 0.49rem;
  justify-content:center;
  li {
    height: 0.2rem;
    padding: 0 0.08rem;
    font-size: 0.15rem;
    color: #B7B7B7;
    span {
      padding:0 0 0 4px;
      display:inline-block;
      padding-top: 2px;
    }
  }
}
.content {
  background: #FDFDFD;
  overflow: inherit;
  .kanComContent {
    padding: 0 0.2rem;
    width: 100%;
    height: 100%;
    overflow: auto;
    li {
      float: left;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 0.26rem;
      border-bottom: 1px solid #BBBBBb;
      .kanComContentLeft {
        width: 0.7rem;
        height: 0.5rem;
        background: #ccc;
        img {
          width: 0.7rem;
          height: 0.5rem;
        }
      }
      .kanComContentRight {
        width: 2.55rem;
        height: 0.79rem;
        p {
          width: 100%;
          display: block;
          color: #7B7B7B;
          &:nth-of-type(1) {
            width: 100%;
            color: #757575;
            height: 0.2rem;
            line-height: 0.2rem;
            margin-bottom: 0.08rem;
            span {
              height: 0.2rem;
              line-height: 0.2rem;
              float: left;
              border: 1px solid #BBBBBB;
              border-radius: 0.13rem;
              font-size: 0.12rem;
              padding: 0 0.05rem;
              &:nth-of-type(1) {
                border: 0;
                font-size: 0.14rem;
                padding: 0;
                margin-top: 2px;
              }
              &:nth-of-type(2) {
                margin-left: 0.11rem;
              }
              &:nth-of-type(3) {
                float: right;
              }
            }
          }
          &:nth-of-type(2) {
            height: 0.18rem;
            font-size: 0.12rem;
            margin-bottom: 4px;
            span {
              padding: 5px;
              &:nth-of-type(1) {
                padding-left: 0;
              }
            }
          }
          &:nth-of-type(3) {
            height: 0.18rem;
            font-size: 0.12rem;
          }
        }
      }
    }
  }
}
</style>
