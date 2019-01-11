<template>
  <transition name="tab">
    <div class="container">
      <div class="box">
        <header class="header">
          <a class="backList" @click="back" href="javascript:;">返回</a>
          {{ title }}
        </header>
        <div class="content">
          <img :src="img" alt="">
          {{ id }}
        </div>
      </div>
      <footer class="footer">详情尾部</footer>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      title: '',
      img: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    const { id } = this.$route.params
    fetch(`/daxun/detail?id=${id}`).then(res => res.json())
      .then(data => {
        // console.log(data)
        this.title = data[0].title
        this.img = data[0].images.small
      })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.backList {
  float: left;
  margin-left: 0.1rem;
}
.footer {
  @include text-align();
  @include line-height(0.5rem);
}
</style>
