<template>
  <div class="container">
    <div class="box">
      <router-link to="/register" tag="span">
        <span class="res">注册</span>
      </router-link>
      <div class="logo"><img src="./../assets/pro2.png" ></div>
      <h3>QIAN TU</h3>
      <div class="content">
          <mt-field placeholder="请输入您的手机号" :state="usernameState" v-model="username"></mt-field>
          <mt-field placeholder="请输入您的密码" type="password" :state="passwordState" v-model="password"></mt-field>
          <mt-button :disabled="disabled"  :type="type" size="large" @click="login()">登录</mt-button>
          <router-link to="/login" tag="span">
            <span class="psdlogin">验证码登录</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Field, Button, Toast } from 'mint-ui'
Vue.use(Field, Button)
export default {
  data () {
    return {
      username: '',
      password: '',
      code: '',
      tip: '发送短信验证码',
      adminCode: '', // 后台发送过来的值
      timer: null,
      flag: 'yes' // 发送短信验证码是否可点  默认可点  不可点为no
    }
  },
  computed: {
    type () {
      if (this.usernameState === 'success' && this.passwordState === 'success') {
        console.log(11)
        // this.disabled = false
        return 'primary'
      } else {
        // this.disabled = true
        return 'default'
      }
    },
    disabled () {
      if (this.type === 'primary') {
        console.log(22)
        return false
      } else {
        return true
      }
    },
    usernameState () {
      if (this.username === '') {
        return ''
      }
      if (/^1[345678]\d{9}$/.test(this.username)) {
        return 'success'
      } else {
        return 'error'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      }
      // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      if (/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?><_. ]).*$/.test(this.password)) {
        return 'success'
      } else {
        return 'error'
      }
    }
  },
  methods: {
    login(){
      var _this = this;
      axios({
        method:'get',
         url:'http://10.8.155.33:8080/kanzhun/register.do',
       // url:'http://jx.xuzhixiang.top/ap/api/login.php',
        params:{
          username:_this.username,
          password:_this.password,
          
        }
      }).then(function(data){
        console.log(data.data)
      })
    },
    loginp () {
      fetch('/daxun/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          if (data === 1) {
            Toast({
              message: '登录成功',
              position: 'bottom',
              duration: 2000
            })
            this.$router.push({
              path: '/home'
            })
          } else if (data === 2) {
            Toast({
              message: '没有该用户',
              position: 'bottom',
              duration: 2000
            })
          } else if (data === 0) {
            Toast({
              message: '登录失败',
              position: 'bottom',
              duration: 2000
            })
          } else {
            Toast({
              message: 'mima错误',
              position: 'bottom',
              duration: 2000
            })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.res {
  position:fixed;
  right:20px;
  top:20px;
  color:#4086DB;
}
.logo{
  margin:100px auto 10px;
  width: 200px;
  height: 100px;
  background-color: #ccc;
  img{
    width: 200px;
    height: 100px;
  }
}
h3{
  margin:0 auto 30px;
  font-size: 20px;
  color:rgb(122, 115, 115);
}
.mint-button{
  margin-top:20px;
  .mint-button-text {
    color:#fff;
  }
}
.mint-field {
  border-bottom: 1px solid #ccc;
}
.psdlogin {
  padding:10px 0 0 10px;
  color:#4086DB;
  display: block;
}
.mint-field-core {
  background-color:#fff;
}
</style>
