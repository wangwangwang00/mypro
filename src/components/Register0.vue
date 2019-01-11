<template>
  <div class="container">
    <div class="box">
      <router-link to="/login" tag="span">
        <span class="log">登录</span>
      </router-link>
      <div class="logo"><img src="./../assets/pro2.png" ></div>
      <h3>QIAN TU</h3>
      <div class="content">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <!-- <router-link :to="{name:'loginp',query:{flag:1}}"><mt-button type="primary"  size="large">注册</mt-button></router-link> -->
        <mt-button type="primary"  size="large" @click="register()">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field } from 'mint-ui'
import axios from 'axios'
import QS from 'qs'
Vue.use(Field)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
     register(){
      var _this = this;
      axios({
        method:'get',
         url:'http://10.8.155.33:8080/kanzhun/register.do',
       // url:'http://jx.xuzhixiang.top/ap/api/reg.php',
        params:{
          phone:_this.username,
          password:_this.password,
          
        }
      }).then(function(data){
        console.log(data.data)
      })
    }, 
    login () {
      var username = document.getElementById('username')
      var password = document.getElementById('password')
      let data1 = {
        accounts: username.value,
        password: password.value
      }
      axios({
        methods: 'post',
        url: 'http://10.8.162.38:8080/uSave',
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
@import '@/lib/reset.scss';
.mint-field-other{
  color:#4086DB;
}
.log {
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

</style>
