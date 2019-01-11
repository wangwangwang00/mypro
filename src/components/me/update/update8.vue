<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">添加工作经历</div>
      <div class="right" @click="back">保存</div>
    </header>
    <div class="content">
      <ul>
        <li v-for="(item, index) of list" :key="index">
          <p>{{ item.attr }}</p>
          <input type="text" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          attr: '公司名称 ：'
        },
        {
          attr: '公司类别 ：'
        },
        {
          attr: '职业名称 ：'
        },
        {
          attr: '在职时间 ：'
        }
      ]
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
  .header{
    padding:0 0.1rem;
  }
  .content{
    ul{
      padding:0.1rem 0.2rem;
      li{
        display:flex;
        justify-content:flex-start;
        padding-top:0.2rem;
        p{
          text-align: justify;
          width:0.8rem;
        }
        input{
          border:none;
          padding-left:0.05rem;
          border:1px solid #ccc;
          margin-left:0.1rem;
        }
      }
    }
  }
</style>
