<template>
  <div class="globaHeardBox">
    <div class="menu transition" :open="menu.open">
      <div class="globaHeard flex justify-between" ref="globaHeard">
        <div>
          <span class="transition" @click="handleMenu"><img src="~/statics/mobileImages/top/ico_menu.png" width="100%"></span>
          <a @click="logoTag"><img src="statics/Commerce.png" width="50%"></a>
        </div>
        <div><span class="bag" @click="openBag = !openBag;shoppingBag.join = false" v-bind:class="{'active':shoppingBag.join}">·</span></div>
      </div>
      <transition name="fade">
        <ul v-if="show">
          <li v-for="item in menu.router" @click="handleMenu"><router-link :to="item.path" style="display: block">{{ item.name }}</router-link></li>
        </ul>
      </transition>
      <div class="search">
        <q-search class="text-light-black" v-model="search" placeholder="Search Commerce.com" @focus="show = false; heardScrollTop()" @blur="show = true" @keyup.enter="navSearch(search)" />
      </div>
      <!-- 新增 -->
      <div class="globaHeard-shoppingBag" v-if="openBag">
        <div class="shoppingBag-div">
          <div class="shoppingBag-top">
            <div class="shoppingBag-menu">
              <ul>
                <li @click="jump('/Sign')">
                  <img src="~statics/mobileImages/top/ico_sign.png" style="width: 0.48rem;">
                  <span style="margin-left: .32rem">Sign Out</span>
                </li>
                <li @click="jump('/Market/Commerce')">
                  <img src="~statics/mobileImages/top/ico_Mycommerce.png" style="width: 0.48rem">
                  <span style="margin-left: .32rem">My Commerce</span>
                </li>
                <li @click="jump('/Market/Shoppingbag')">
                  <img src="~statics/mobileImages/top/ico_littlebag.png" style="width: 0.48rem">
                  <span style="margin-left: .32rem">Shopping Bag ({{shoppingBag.data.length}})</span>
                </li>
              </ul>
            </div>
            <div class="shoppingBag-close">
              <img @click="openBag=false" src="~/statics/mobileImages/top/ico_close.png" width="100%">
            </div>
          </div>
          <!-- 空购物车 start-->
          <div class="littleMobileEmptyBox" v-if="shoppingBag.data.length === 0">
            <div class="littleMobileEmpty1">
              <span>Your Bag is empty.</span>
            </div>
            <div class="littleMobileEmpty2">
              <i></i>
            </div>
            <div class="littleMobileEmpty3">
              <div class="littleMobileEmpty3_Btn" @click="jump('/Market/Search')">
                <span>Continue Shopping</span>
              </div>
            </div>
          </div>
          <!-- 空购物车 end-->
          <q-scroll-area class="scroll-area">
            <div class="scroll-area1" v-for="item in shoppingBag.data">
              <div class="shoppingBag-main" v-if="item.data.length > 1" v-for="item1 in item.data">
                <div class="shoppingBag-pro">
                  <div class="img">
                    <img :src="item1.image" style="width: 1.6rem; height: 1.6rem">
                  </div>
                  <div class="text">
                    <div class="name-and-num">
                      <span>{{item1.name}}</span>
                      <span style="color: $all-color-3">×{{item.number}}</span>
                    </div>
                    <div class="price-and-type">
                      <span>${{item1.price.toFixed(2)}}</span>
                      <span style="color: $all-color-3; margin-left: .16rem">{{item1.type}}</span>
                    </div>
                    <span style="color: $font-color-5; font-size: .24rem; font-weight: 400">{{item1.attr}}</span>
                  </div>
                </div>
              </div>
              <div class="shoppingBag-main2" v-if="item.data.length === 1" v-for="item2 in item.data">
                <div class="shoppingBag-pro">
                  <div class="img">
                    <img :src="item2.image" style="width: 1.6rem; height: 1.6rem">
                  </div>
                  <div class="text">
                    <div class="name-and-num">
                      <span>{{item2.name}}</span>
                      <span style="color: $all-color-3">×{{item.number}}</span>
                    </div>
                    <div class="price-and-type">
                      <span>${{item2.price.toFixed(2)}}</span>
                      <span style="color: $all-color-3; margin-left: .16rem">{{item2.type}}</span>
                    </div>
                    <span style="color: $font-color-5; font-size: .24rem; font-weight: 400">{{item2.attr}}</span>
                  </div>
                </div>
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div class="shoppingBag-footer" @click="jump('/Market/Checkout')"  style="display: none">
          <span>Check Out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QSearch,
  QScrollArea
} from 'quasar'
export default {
  name: 'r-global-heard',
  props: ['transparent'],
  components: {
    QSearch,
    QScrollArea
  },
  data () {
    return {
      show: true,
      menu: {
        open: false,
        router: [
          { name: 'CONTRACT PHONE', path: '/Market/Search?type=Contract Phone' },
          { name: 'PHONE', path: '/Market/Search?type=Phone' },
          { name: 'ACCESSORIES', path: '/Market/Search?type=Accessories' },
          { name: 'PLANS', path: '/Market/Search?type=Plans' }
        ]
      },
      shoppingBag: {
        join: false,
        data: [
          {
            number: 1,
            price: 1149,
            data: [
              {
                image: 'statics/mobileImages/top/pic1.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: 1149,
                type: 'Device',
                attr: 'Memory: 256 GB /Primary: 198 Bundle /Color: Space gray'
              },
              {
                image: 'statics/mobileImages/top/pic2.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: 1149,
                type: 'Device',
                attr: 'Memory: 256 GB /Primary: 198 Bundle /Color: Space gray'
              }
            ]
          },
          {
            number: 1,
            price: 1149,
            data: [
              {
                image: 'statics/mobileImages/top/pic1.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: 1149,
                type: 'Device',
                attr: 'Memory: 256 GB /Primary: 198 Bundle /Color: Space gray'
              }
            ]
          }
        ]
      },
      openBag: false,
      search: ''
    }
  },
  mounted () {
    // console.log(this.bgColor)
    if (this.transparent) {
      console.log(this.transparent)
      window.addEventListener('scroll', this.handleScroll)
    }
    else {
      window.removeEventListener('scroll', this.handleScroll)
      this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
    }
    this.socket.$on('add-buy', function (val) {
      this.shoppingBag.join = true
      let item = {
        number: val.number,
        price: val.price,
        data: [val]
      }
      this.shoppingBag.data.push(item)
      console.log(this.shoppingBag)
    }.bind(this))
    if (this.$route.query.key) {
      this.search = this.$route.query.key
    }
  },
  methods: {
    heardScrollTop () {
      console.log(1)
      document.body.scrollTop = 0
    },
    logoTag () {
      this.menu.open = false
      this.openBag = false
      this.shoppingBag.join = false
      this.$router.push('/Home')
    },
    handleScroll () {
      // console.log(window.scrollY, window.innerHeight)
      // console.log(window)
      if (window.scrollY < window.innerHeight) {
        if (this.$refs.globaHeard) {
          let val = (window.scrollY / window.innerHeight).toFixed(3)
          this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, ${val})`
        }
      }
      else {
        if (this.$refs.globaHeard) {
          this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
        }
      }
    },
    handleMenu () {
      this.menu.open = !this.menu.open
    },
    navSearch (val) {
      this.openBag = false
      this.menu.open = false
      this.$router.push({
        path: '/Market/Search',
        query: {key: val}
      })
    },
    jump (to) {
      this.openBag = false
      this.menu.open = false
      this.$router.push(to)
    }
  },
  watch: {
    transparent: function (val, oldVal) {
      // console.log(val)
      if (val) {
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 0)`
        window.addEventListener('scroll', this.handleScroll)
      }
      else {
        window.removeEventListener('scroll', this.handleScroll)
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
      }
    }
  },
  destroyed () {
    console.log('destroyed')
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
