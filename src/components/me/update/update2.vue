<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">选择身份</div>
      <div class="right" @click="backdata">保存</div>
    </header>
    <div class="content1">
      <ul>
        <li @click="work1">
          <span class="header1"><img src="./../../../assets/logo.png"/></span>
          <p class="leibie">大学生</p>
        </li>
        <li @click="work2">
          <span class="header1"><img src="./../../../assets/pro.png"/></span>
          <p class="leibie">职业人</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import QS from 'qs'
export default {
  data () {
    return {
      currentstatus: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    work1 () {
      sessionStorage.setItem('work', 1)
    },
    work2 () {
      sessionStorage.setItem('work', 2)
    },
    backdata () {
      this.$router.go(-1)
      let data1 = {
        id: 1,
        currentstatus: sessionStorage.getItem('work')
      }
      axios({
        method: 'post',
        url: 'http://10.8.162.38:8080/modifyInfo',
        data: QS.stringify(data1)
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    padding:0 0.1rem;
  }
.content1{
  li{
    width:100%;
    margin-top:0.4rem;
    .header1{
      width:1rem;
      height:1rem;
      display:block;
      margin:0.2rem auto;
    }
    .leibie{
      width:100%;
      text-align:center;
      height:0.5rem;
      font-size:0.2rem;
      line-height:0.4rem;
    }

  }
  .header1{
    img{
      width:1rem;
      height:1rem;
      border-radius:50%;
      background-color:#0C84F4;
    }
  }
}
</style>
