<template>
  <!-- layout -->
  <div class="column mobileBox">
    <div class="flex mobileTop"><r-global-heard :transparent.sync="transparent" /></div>
    <div class="flex mobileContent"><router-view /></div>
  </div>
</template>

<script>
import RGlobalHeard from 'components/mobileLayout/globalHeard/globalHeard'
export default {
  components: {
    RGlobalHeard
  },
  data () {
    return {
      transparent: false
    }
  },
  mounted () {
    // console.log(this.$route, this.$route.path === '/Home')
    if (this.$route.path.toUpperCase() === '/HOME') {
      this.transparent = true
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTS') {
      this.transparent = true
    }
    else {
      this.transparent = false
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      if (to.path.toUpperCase() === '/HOME') {
        this.transparent = true
      }
      else if (to.path.toUpperCase() === '/PRODUCTS') {
        this.transparent = true
      }
      else {
        this.transparent = false
      }
    }
  }
}
</script>
