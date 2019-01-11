<template>
  <ul class="prolist">
    <li @click="goDetail(item.id)" class="proItem" v-for="item of prolist" :key="item.id">
      <div class="proimg">
        <img :src="item.images.small" alt="">
      </div>
      <div class="protit">
        {{ item.title }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['prolist'],
  methods: {
    goDetail (id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.prolist {
  @include rect(100%, auto);

  .proItem {
    @include rect(100%, 1rem);
    @include flexbox();
    @include border(0 0 1px 0, #ccc, solid);
    .proimg {
      @include rect(1rem, 1rem);
      img {
        @include rect(0.9rem, 0.9rem);
        @include margin(0.05rem 0.05rem 0.05rem 0.05rem);
      }
    }

    .protit {
      @include flex();
    }
  }
}
</style>
