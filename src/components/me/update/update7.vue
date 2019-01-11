<template>
  <div class="box">
    <header class="header">
      <div class="left" @click="back">取消</div>
      <div class="middle">教育经历</div>
      <div class="right" @click="back">保存</div>
    </header>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
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
</style>
