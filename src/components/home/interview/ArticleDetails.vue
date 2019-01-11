<template>
  <div class="box">
    <header class="header">
      <div @click="back" class="left"><span class="iconfont icon-xiangzuojiantou"></span></div>
      <div class="middle">文章详情</div>
      <div class="right"></div>
    </header>
    <div class="content">
      <div class="ArticleDetailsContentTit">
        <p>{{ content }}</p>
        <P><span>2018-10-25</span><span>3609</span></P>
      </div>
      <div class="ArticleDetailsContentImg">
        <img src="https://ps.ssl.qhimg.com/sdmt/171_135_100/t01e79c3876f2497b76.jpg" alt="">
      </div>
      <div class="ArticleDetailsContentBody">
        <p class="ArticleDetailsContentBodyTit">（1）奖学金</p>
        <p>国家奖学金 National Scholarship</p>
        <p>国家励志奖学金 National Encouragement scholarship</p>
        <p>三好学生标兵 Pacemaker to Merit Student</p>
        <p>三好学生 Merit Student</p>
        <p>学习优秀生 Model Student of Academic Records</p>
        <p>校一等奖：The First Prize Scholarship</p>
        <p>校二等奖：The Second Prize Scholarship</p>
        <p>校三等奖：The Third Prize Scholarship</p>
        <p>单项奖学金：Individual Scholarship</p>
        <p class="ArticleDetailsContentBodyTit">（2）荣誉称号</p>
        <p>突出才能奖 Model Student of Outstanding Capacity</p>
        <p>优秀工作者 Excellent staff</p>
        <p>优秀学生干部 Excellent Student Cadre</p>
        <p>优秀共青团员 Excellent League Member</p>
        <p>优秀毕业生 Outstanding Graduates</p>
        <p>优秀志愿者 Outstanding Volunteer</p>
        <p>先进班集体 Advanced Class</p>
        <p>优秀团干 Outstanding League Cadres</p>
        <p>学生协会优秀干部 Outstanding cadres of Student</p>
        <p class="ArticleDetailsContentBodyTit">（3）先进个人</p>
        <p>先进个人 Advanced Individual/Outstanding Student</p>
        <p>学生协会工作优秀个人 Outstanding Individual of Stu</p>
        <p>dent Association精神文明先进个人 Spiritual Advanc</p>
        <p>ed Individual社会工作先进个人 Advanced Individual</p>
        <p>of Social Work文体活动先进个人 Advanced Individu</p>
        <p>al of Cultural and sports activities</p>
        <p class="ArticleDetailsContentBodyTit">（4）奖项类</p>
        <p>道德风尚奖 Ethic Award</p>
        <p>精神文明奖 High Morality Prize</p>
        <p>最佳组织奖 Prize for The Best Organization</p>
        <p>突出贡献奖 Prize for The Outstanding Contribution</p>
        <p>工作创新奖 Prize for The Creative Working</p>
        <p>团队建设奖 Prize for The Team Contribution</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: sessionStorage.getItem('articleContent')
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.ArticleDetailsContentTit {
  width: 100%;
  height: 0.8rem;
  padding: 0.2rem;
  padding-bottom: 0;
  color: #9B9B9B;
  font-size: 0.14rem;
  P {
    line-height: 0.26rem;
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      font-size: 0.1rem;
    }
  }
}
.ArticleDetailsContentImg {
  width: 100%;
  height: 1.9rem;
  background: #fff;
  padding: 0 0.2rem;
  img {
    width: 100%;
    height: 1.9rem;
    border-radius: 0.05rem;
  }
}
.ArticleDetailsContentBody {
  padding-left: 0.2rem;
  padding-bottom: 0.3rem;
  p {
    font-size: 0.14rem;
    color: #A8A8A8;
    line-height: 0.24rem;
    &.ArticleDetailsContentBodyTit {
      margin-top: 0.2rem;
    }
  }
}
</style>
