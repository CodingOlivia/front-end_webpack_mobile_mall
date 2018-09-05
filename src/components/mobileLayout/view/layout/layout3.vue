<template>
  <!-- layout3 -->
<!--   <div class="column mobileBox yo-scroll"
    :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
    @touchstart="touchStart"
    @touchmove.prevent="touchMove"
    @touchend="touchEnd" -->
<!--   <div class="column mobileBox yo-scroll"
    :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
  >
    <div class="flex mobileTop"><r-global-heard :transparent.sync="transparent" v-show="show" /><r-product-menu v-show="!show" /></div>
    <section class="inner">
      <header class="pull-refresh" :style="{height: `${styleTop}px`}"></header>
      <div class="flex mobileContent" ref="main"><router-view /></div>
      <footer class="load-more" :style="{height: `${styleBottom}px`}"></footer>
    </section>
    <div class="flex mobileBottom" ref="bottom"><r-product-pay /></div>
  </div> -->
  <div class="column mobileBox">
    <div class="flex mobileTop">
      <r-global-heard :transparent.sync="transparent" v-show="show" />
      <r-product-menu v-show="!show" />
    </div>
    <div class="flex mobileContent" ref="main"><router-view /></div>
    <div class="flex mobileBottom" ref="bottom"><r-product-pay /></div>
  </div>
</template>

<script>
import RGlobalHeard from 'components/mobileLayout/globalHeard/globalHeard'
import RProductMenu from 'components/mobileLayout/products/productMenu/productMenu'
import RProductPay from 'components/mobileLayout/products/productPay/productPay'
export default {
  components: {
    RGlobalHeard,
    RProductMenu,
    RProductPay
  },
  data () {
    return {
      prevRouter: '',
      bottom: false,
      show: true,
      transparent: true,
      offset: 100,
      enableInfinite: true,
      enableRefresh: true,
      onRefresh: false,
      onInfinite: false,
      top: 0,
      styleTop: 0,
      styleBottom: 0,
      state: 0,
      startY: 0,
      moveY: 0,
      startScroll: 0,
      endScroll: 0,
      bottomScroll: 0,
      touching: false,
      infiniteLoading: false
    }
  },
  mounted () {
    this.bottomScroll = this.$el.clientHeight
    if (this.$route.path.toUpperCase() === '/HOME') {
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTS') {
      this.$el.querySelector('.globaHeard').style.backgroundColor = `rgba(255, 255, 255, 0)`
      this.transparent = true
    }
    else {
    }
    if (this.$route.path.toUpperCase() === '/PRODUCTS') {
      this.show = true
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTS') {
      this.show = true
    }
    else {
      this.show = false
    }
    this.socket.$on('product-header', function (val) {
      this.show = val
    }.bind(this))
  },
  methods: {
    // 全局头部
    listenerScroll: function () {
      if (this.$el.querySelector('.globaHeard')) {
        if (this.$el.scrollTop < this.$el.clientHeight) {
          let val = (this.$el.scrollTop / this.$el.querySelector('.TopBanner').clientHeight).toFixed(3)
          this.$el.querySelector('.globaHeard').style.backgroundColor = `rgba(255, 255, 255, ${val})`
        }
        else {
          this.$el.querySelector('.globaHeard').style.backgroundColor = `rgba(255, 255, 255, 1)`
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.$el.scrollTop = 0
      if (to.path.toUpperCase() === '/PRODUCTS') {
        this.$el.querySelector('.globaHeard').style.backgroundColor = `rgba(255, 255, 255, 0)`
        this.transparent = true
      }
      if (to.path.toUpperCase() === '/PRODUCTS') {
        this.show = true
      }
      else {
        this.show = false
      }
      if (to.path.toUpperCase() === '/PRODUCTS') {
        window.addEventListener('scroll', this.listenerScroll)
      }
      else {
        window.removeEventListener('scroll', this.listenerScroll)
      }
    }
  },
  destroyed () {
    console.log('destroyed')
    window.removeEventListener('scroll', this.listenerScroll)
  }
}
</script>
