<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style>
</style>
