<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">修改昵称</div>
      <div class="right" @click="backdata">保存</div>
    </header>
    <div class="content">
      <input type="text" placeholder="请输入您的昵称" id="name" v-model="nickname">
      <span>0/6</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import QS from "qs";

export default {
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    backdata() {
      this.$router.go(-1);
      var name = document.getElementById("name");
      let data1 = {
        id: 1,
        nickname: name.value
      };
      
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 0.1rem;
}
input {
  width: 100%;
  height: 0.4rem;
  border: none;
  padding: 0 10px;
  margin-top: 20px;
}
span {
  float: right;
  padding-right: 20px;
}
</style>
