<template>
  <div class="productsBox">
    <div class="productsHeard">
      <div class="productsHeard-left">
        <img class="img-size" src="statics/mobileImages/products/productsheard1.jpg">
        <div class="text-size">
          <span style="width:3rem;word-wrap:break-word;word-break:break-all">iPhone X + 198 Bundle</span>
          <span>$1149.00<span style="color: $all-color-3; margin-left: .2rem">×1</span></span>
        </div>
      </div>
      <div class="productsHeard-right">
        <div class="menu transition" :open="menu.open" @click="handleMenu">
          <div class="productHeard flex justify-between" ref="productHeard">
            <div class="Menu-title">
              <span class="transition" style="font-weight: bold; width: 1.2rem; font-size: .28rem; margin-right: .32rem">{{ menu.active }}</span>
              <img src="~statics/mobileImages/products/close.png" style="width: 0.2rem; margin-top: 0.05rem">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="transition" :open="menu.open">
      <li v-for="(item, index) in menu.data" @click="jump(index)" style="font-size: .28rem; font-weight: bold">
        <span v-bind:class="{'acctive':menu.active === item.name}">{{ item.name }}</span>
        <!-- <span v-bind:class="{'active':menu.active === item.name}">{{ item.name }}</span> -->
      </li>
    </ul>
  </div>
</template>
<script>
import $ from 'jquery'
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QRouteTab,
  QTabs,
  QSideLink
} from 'quasar'
export default {
  name: 'r-product-menu',
  // props: ['transparent'],
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QRouteTab,
    QTabs,
    QSideLink
  },
  data () {
    return {
      menu: {
        open: false,
        active: 'Overview',
        data: [
          { name: 'Overview', path: '#overview' },
          { name: 'Gallery', path: '#gallery' },
          { name: 'TechSpec', path: '#techSpec' },
          { name: 'Reviews', path: '#rerviews' }
        ]
      },
      scrollTop: 0,
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
    if (this.$route.path.toUpperCase() === '/PRODUCTMENU/OVERVIEW') {
      this.menu.active = 'Overview'
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTMENU/GALLERY') {
      this.menu.active = 'Gallery'
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTMENU/TECHSPEC') {
      this.menu.active = 'TechSpec'
    }
    else if (this.$route.path.toUpperCase() === '/PRODUCTMENU/REVIEWS') {
      this.menu.active = 'Reviews'
    }
    window.addEventListener('scroll', this.listenerScroll)
  },
  methods: {
    listenerScroll () {
      if (window.scrollY >= document.querySelectorAll('.xqDiv')[0].offsetTop - document.querySelectorAll('#hearder128')[0].clientHeight) {
        this.menu.active = 'Overview'
      }
      if (window.scrollY >= document.querySelectorAll('.xqDiv')[1].offsetTop - document.querySelectorAll('#hearder128')[0].clientHeight) {
        this.menu.active = 'Gallery'
      }
      if (window.scrollY >= document.querySelectorAll('.xqDiv')[2].offsetTop - document.querySelectorAll('#hearder128')[0].clientHeight) {
        this.menu.active = 'TechSpec'
      }
      if (window.scrollY >= document.querySelectorAll('.xqDiv')[3].offsetTop - document.querySelectorAll('#hearder128')[0].clientHeight) {
        this.menu.active = 'Reviews'
      }
    },
    jump (index) {
      // let jump = document.querySelectorAll('.xqDiv')
      // console.log(document)
      let jump = $('.xqDiv')
      let total = jump[index].offsetTop - document.querySelectorAll('#hearder128')[0].clientHeight
      $('body').animate({'scrollTop': total})
      // // Chrome
      // document.body.scrollTop = total
      // // // Firefox
      // document.documentElement.scrollTop = total
      // // // Safari
      // window.pageYOffset = total
      this.menu.active = this.menu.data[index].name
      this.menu.open = false
    },
    handleMenu () {
      this.menu.open = !this.menu.open
    }
  },
  watch: {
    '$route' (to, from) {
      this.menu.open = false
      if (to.path.toUpperCase() === '/PRODUCTMENU/OVERVIEW') {
        this.menu.active = 'Overview'
      }
      else if (to.path.toUpperCase() === '/PRODUCTMENU/GALLERY') {
        this.menu.active = 'Gallery'
      }
      else if (to.path.toUpperCase() === '/PRODUCTMENU/TECHSPEC') {
        this.menu.active = 'TechSpec'
      }
      else if (to.path.toUpperCase() === '/PRODUCTMENU/REVIEWS') {
        this.menu.active = 'Reviews'
      }
    }
  }
}
</script>