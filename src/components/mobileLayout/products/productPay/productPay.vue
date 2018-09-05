<template>
  <div class="productsFooter">
    <div class="productsFooter-left">
      <i class="icon-like" @click="likeIt = !likeIt" v-bind:class="{'active':likeIt}"></i>
      <i class="icon-cart" @click="isCart = !isCart" v-bind:class="{'active':isCart}"></i>
    </div>
    <div class="productsFooter-middle">
      <div>
        <router-link to="/Market/shoppingBag">
          <span class="productsFooter-middle-btn" @click="joinBuy">Add to bag</span>
        </router-link>
      </div>
    </div>
    <div class="productsFooter-right">
      <router-link to="/Market/Checkout">
        <span class="productsFooter-right-btn">Buy Now</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'r-product-pay',
  // props: ['transparent'],
  data () {
    return {
      likeIt: true,
      isCart:false,
      menu: {
        open: false,
        data: [
          { name: 'Overview', path: '`/ProductMenu/Overview' },
          { name: 'Gallery', path: '/ProductMenu/Gallery' },
          { name: 'TechSpec', path: '/ProductMenu/TechSpec' },
          { name: 'Reviews', path: '/ProductMenu/Reviews' }
        ]
      },
      num: 0,
      tab: [
        {
          id: 1,
          tabName: 'OVERVIEW',
          checked1: 'checkedTitle',
          checkedline: 'bottomLined',
          to: `/ProductMenu/Overview`
        },
        {
          id: 2,
          tabName: 'GALLERY',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/Gallery`
        },
        {
          id: 3,
          tabName: 'TECHSPEC',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/TechSpec`
        },
        {
          id: 4,
          tabName: 'REVIEWS',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/Reviews`
        }
      ]
    }
  },
  mounted () {
    // console.log(this.transparent
  },
  methods: {
    handleScroll () {
      if (window.scrollY < window.innerHeight) {
        let val = (window.scrollY / window.innerHeight).toFixed(3)
        this.$refs.productHeard.style.backgroundColor = `rgba(255, 255, 255, ${val})`
      }
      else {
        this.$refs.productHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
      }
    },
    handleMenu () {
      this.menu.open = !this.menu.open
    },
    joinBuy () {
      let array = {
        image: 'statics/mobileImages/top/pic1.jpg',
        name: 'Apple iPhone X + 198 Bundle',
        number: 1,
        price: 1149,
        type: 'Device',
        attr: 'Memory: 256 GB /Primary: 198 Bundle /Color: Space gray'
      }
      this.socket.$emit('add-buy', array)
    }
  },
  watch: {
    transparent: function (val, oldVal) {
      // console.log(val, oldVal)
      if (this.transparent) {
        window.addEventListener('scroll', this.handleScroll)
        this.$refs.productHeard.style.backgroundColor = `rgba(255, 255, 255, 0)`
      }
      else {
        window.removeEventListener('scroll', this.handleScroll)
        this.$refs.productHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
      }
    }
  }
}
</script>
