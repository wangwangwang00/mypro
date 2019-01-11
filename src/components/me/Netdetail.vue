<template>
  <div class="box">
    <header class="header">
      <div class="left">
        <router-link to="/me" tag="span">
          <span class="iconfont icon-jiantou21"></span>
        </router-link>
      </div>
      <div class="middle">首都网警</div>
      <div class="right"></div>
    </header>
    <div class="police"><i class="iconfont icon-hezuowoshou"></i></div>
    <div class="content">
      <h3>{{ tit }}</h3>
      <span><i class="iconfont icon-hezuowoshou"></i>首都网警</span>
      <span>{{ tim }}</span>
      <p>邪教组织特别喜欢伪装成宗教迷惑群众，比如邪教组
          织“全能神”，常披着神圣的外衣诱惑群众，进而达
          到不可高冷的目的。以下六招帮你快速识别邪教组织
          “全能神”↓↓↓＠中国反邪教
      </p>
      <h5>案例一</h5>
      <ul class="imgs">
        <li><img src=""></li>
        <li>我们是北京市公安局朝阳分局网络安全保卫大队在互
            联网上的执法账号，我们的任务是依据相关法律法规
            在互联网虚拟社会“巡逻”，及时制止违法犯罪信息
            在网上传播。根据《治安管理处罚法》、《计算机信
            息网络国际联网安全保护管理方法》，利用互联网制
            作、复制、传播不实信息，散步谣言等扰乱社会秩序
            的，都属于违法行为。
            </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tit: sessionStorage.getItem('title'),
      tim: sessionStorage.getItem('time')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  body{
  }
  .header{
    .icon-jiantou21{
      color:#fff;
      font-size:0.2rem;
    }
    .middle{
      color:#fff;
    }
  }
  .net_list{
    width:100%;
    li{
      padding:0.2rem 0.2rem;
      line-height:0.2rem;
      display:flex;
      justify-content:space-between;
      border-bottom:1px solid #ccc;
    }
  }
  .police{
    height:0.4rem;
    background: #ccc;
    text-align: center;
    line-height:0.4rem;
    .icon-hezuowoshou{
      font-size: 0.24rem;
    }
  }
  .content{
    height:auto;
    padding: 0 0.2rem;
    h3{
      padding:0.1rem 0;
      letter-spacing: 0.02rem;
    }
    span{
      padding-right:0.2rem;
      i{
        padding-right:0.05rem;
      }
    }
    p{
      padding:0.1rem 0;
      text-indent:0.2rem;
      letter-spacing: 0.02rem;
      text-align: justify;
    }
    h5{
      text-align:center;
    }
    .imgs{
      height:3rem;
      li{
        height:100%;
        background:#ccc;
        margin-top:0.2rem;
        &:nth-child(2){
          background:#fff;
          line-height: 0.2rem;
          text-indent:0.2rem;
          letter-spacing: 0.02rem;
          text-align: justify;
        }
      }
    }
  }
</style>
