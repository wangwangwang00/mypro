<template>
  <div class="box">
    <div class="content">
      <div class="top">
        <form>
          <input type="text" placeholder="搜索感兴趣的公司">
        </form>
        <router-link tag="span" to="/kanCompany">取消</router-link>
      </div>
      <ul class="classify">
        <li>公司</li>
        <li>面试</li>
        <li>工资</li>
      </ul>
      <div class="hot">
        <span>hot</span>
        <span>热门公司</span>
      </div>
      <div class="hotCompany">
        <ul class="hotCompany1">
          <li><a href="javascript:;">达内科技</a></li>
          <li><span>|</span><a href="javascript:;">百事可乐</a><span>|</span></li>
          <li><a href="javascript:;">携程旅游网</a></li>
        </ul>
        <ul class="hotCompany1">
          <li><a href="javascript:;">万科地产</a></li>
          <li><span>|</span><a href="javascript:;">LG电子</a><span>|</span></li>
          <li><a href="javascript:;">IBM</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content {
  background: #FDFDFD;
}
.top {
  margin-top: 0.1rem;
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  background: #FDFDFD;
  font-size: 0.12rem;
  span {
    color: #979595;
  }
  form {
    width: 3rem;
    margin-top: 8px;
    height: 0.26rem;
    background: #E8E8E8;
    border-radius: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    input {
      border: 0;
      height: 0.2rem;
      width: 2.7rem;
      font-size: 0.12rem;
      color: #979595;
      background: 0;
    }
  }
}
.classify {
  width: 100%;
  height: 0.45rem;
  padding-top: 0.18rem;
  background: #FDFDFD;
  display: flex;
  justify-content: space-around;
  color: #7D7C7C;
  font-size: 0.12rem;
}
.hot {
  width: 100%;
  height: 0.4rem;
  background: #EEECEC;
  padding: 0 0.2rem;
  display: flex;
  justify-content: flex-start;
  font-size: 0.12rem;
  color: #7D7C7C;
  line-height: 0.4rem;
  span {
    &:first-child {
      width: 0.3rem;
      height: 0.17rem;
      background: #B3B3B3;
      color: #101010;
      display: inline-block;
      margin-top: 0.12rem;
      text-align: center;
      line-height: 0.17rem;
      margin-right: 0.14rem;
    }
  }
}
.hotCompany {
  width: 100%;
  height: 1.2rem;
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
  font-size: 0.12rem;
  .hotCompany1 {
    width: 100%;
    line-height: 0.6rem;
    height: 0.6rem;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;
    li {
      float: left;
      width: 33%;
      text-align: center;
      span {
        color:#DFDDDD ;
      }
      a {
        width:100%;
        color:#7D7C7C;
      }
      &:nth-child(2) {
        display: flex;
        justify-content: space-between;
      }
    }
    &:last-child {
      border-bottom:0;
    }
  }
}
</style>
