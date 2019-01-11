<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">上传头像</div>
      <div class="right" @click="backdata">保存</div>
    </header>
    <div class="content">
      <input type="text" placeholder="请选择图片地址" id="name"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import QS from 'qs'

export default {
  data () {
    return {
      headportrait: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    backdata () {
      this.$router.go(-1)
      var name = document.getElementById('name')
      let data1 = {
        id: 1,
        headportrait: name.value
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
  input{
    width:100%;
    height: 0.4rem;
    border:none;
    padding:0 10px;
    margin-top:20px;
  }
  span{
    float:right;
    padding-right: 20px;
  }
</style>
