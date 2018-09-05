<template>
  <div class="mobileHome">
    <div class="TopBanner">
      <div class="homeBanner" ref="homeBanner">
        <div :class="`bannerBg ${banner.top.move?'':'transition-linear'}`" @touchstart="bannerstart" @touchmove="bannermove" @touchend="bannerend" v-for="(item, index) in banner.top.data" :key="index" :style="banner.top.bannerStyle">
          <img :src="item.image" width="100%" height="100%">
          <div class="bannerAttr">
            <div><span class="attrName">{{ item.attr.name }}</span></div>
            <div><span class="attrPrice">${{ item.attr.price }}</span><span class="attrType">{{ item.attr.type }}</span></div>
          </div>
        </div>
      </div>
      <div class="bannerPage">
        <span>0{{parseInt(banner.top.page) > parseInt(banner.top.total - 1)?1:parseInt(banner.top.page)}}</span>
        <div></div>
        <span>0{{ Math.ceil(parseInt(banner.top.total - 1)) }}</span>
      </div>
      <div class="tools">
        <div><span class="buy" @click="jump('/Products')">BUY</span></div>
        <div class="pagination"><span class="p-lt" @click="sildeLeft"></span><span class="p-rt" @click="sildeRight"></span></div>
      </div>
    </div>
    <div class="NewProducts">
      <div class="title"><span>New Products</span></div>
      <div class="content">
        <router-link to="/Products" class="new" v-for="item in products.new.data" :key="item.uuid">
          <div><img :src="item.image" height="100%"></div>
          <div><span class="newName">{{ item.attr.name }}</span></div>
          <div><span class="newPrice">${{ item.attr.price }}</span><span class="newType">{{ item.attr.type }}</span></div>
        </router-link>
      </div>
    </div>
    <div class="FeaturedProducts">
      <div class="title"><span>Featured Products</span></div>
      <div class="content">
        <div class="featured" v-for="item in products.featured.data">
          <router-link to="/Products"><img :src="item.image" width="100%" height="100%"></router-link>
          <div class="featuredAttr">
            <div><span class="featuredName">{{ item.attr.name }}</span></div>
            <div><span class="featuredPrice" style="margin-right: .2rem">${{ item.attr.price }}</span><span class="featuredType" style="color: $font-color-3">{{ item.attr.type }}</span></div>
            <div><span class="featuredDesc">{{ item.attr.desc }}</span></div>
            <div><span class="explore">EXPLORE</span><span class="buy" @click="joinBuy(item)">BUY</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="seeMore">
      <router-link to="/market/search"><span>SEE ALL PRODUCTS</span><span style="font-size: .64rem; margin-top: -0.1rem;">+</span></router-link>
    </div>
    <div class="other">
      <div><span>Join the Commerce Family</span></div>
      <div><span>Don’t sleep on all the latest from Commerce.</span></div>
      <div class="inputDiv">
        <div>
          <input class="infoInput" type="text" placeholder="Enter your Phone Number" v-model="userId">
        </div>
        <div>
          <span class="infoBtn" @click="jump('/Sign')">SIGN UP</span>
          <span class="ico-infoBtn">></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      timer: '',
      banner: {
        top: {
          turning: false,
          page: 1,
          total: 4,
          data: [
            {
              image: './statics/mobileImages/home/TopBanner1.jpg',
              attr: {
                name: 'Beo Play M5',
                type: 'Accessories',
                price: 709
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner2.jpg',
              attr: {
                name: 'Beo Play M4',
                type: 'Accessories',
                price: 609
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner3.jpg',
              attr: {
                name: 'Beo Play M3',
                type: 'Accessories',
                price: 509
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner4.jpg',
              attr: {
                name: 'Beo Play M2',
                type: 'Accessories',
                price: 409
              }
            }
          ],
          touch: {
            start: {
              x: 0,
              y: 0
            },
            move: {
              x: 0,
              y: 0
            },
            end: {
              x: 0,
              y: 0
            }
          },
          move: false,
          initStyle: 0,
          bannerStyle: {
            transform: 'translateX(0)'
          }
        }
      },
      products: {
        new: {
          data: [
            {
              uuid: '000001',
              image: './statics/mobileImages/home/new1.png',
              attr: {
                name: 'Huawei Mate 10',
                price: 1029,
                type: 'Phone'
              }
            },
            {
              uuid: '000002',
              image: './statics/mobileImages/home/new2.png',
              attr: {
                name: 'Plwats Please E-Book',
                price: 12,
                type: 'E-Books'
              }
            },
            {
              uuid: '000003',
              image: './statics/mobileImages/home/new1.png',
              attr: {
                name: 'Huawei Mate 10',
                price: 1029,
                type: 'Phone'
              }
            },
            {
              uuid: '000004',
              image: './statics/mobileImages/home/new2.png',
              attr: {
                name: 'Plwats Please E-Book',
                price: 12,
                type: 'E-Books'
              }
            }
          ]
        },
        featured: {
          data: [
            {
              uuid: '001001',
              image: './statics/mobileImages/home/pic_featured1.jpg',
              attr: {
                name: 'Huawei Mate 10',
                price: 1029,
                type: 'Phone',
                desc: 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
              }
            },
            {
              uuid: '001002',
              image: './statics/mobileImages/home/pic_featured2.jpg',
              attr: {
                name: 'Live in Color',
                price: 1029,
                type: 'Plans',
                desc: 'The Beats Neighborhood Collection appeared inspired by the cities where they dream for the creator of today and tomorrow, for everyone who continues to challenge.'
              }
            },
            {
              uuid: '001003',
              image: './statics/mobileImages/home/pic_featured3.jpg',
              attr: {
                name: 'iPhone 8 + 198 Bundle',
                price: 1029,
                type: 'Contract Phone',
                desc: 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
              }
            }
          ]
        }
      }
    }
  },
  mounted: function () {
    this.timerStart()
    this.bannerClone()
  },
  methods: {
    bannerClone () {
      let e = this.banner.top.data[0]
      this.banner.top.total++
      console.log(this.banner.top.total)
      this.banner.top.data.push(e)
    },
    jump (to) {
      // this.openBag = false
      this.$router.push(to)
    },
    timerStart () {
      this.timer = setInterval(function () {
        if (this.banner.top.page === this.banner.top.total) {
          this.banner.top.page = 1
          this.sildeRight()
        }
        else {
          this.sildeRight()
        }
      }.bind(this), 5000)
    },
    timerEnd () {
      clearInterval(this.timer)
    },
    bannerstart (event) {
      this.timerEnd()
      if (this.banner.top.turning) return
      this.banner.top.touch.start.x = event.changedTouches[0].clientX
      this.banner.top.touch.start.y = event.changedTouches[0].clientY
      this.banner.top.move = true
    },
    bannermove (event) {
      // console.log(event.changedTouches[0])
      if (this.banner.top.turning) return
      this.banner.top.touch.move.x = event.changedTouches[0].clientX
      this.banner.top.touch.move.y = event.changedTouches[0].clientY
      let move = this.banner.top.touch.start.x - this.banner.top.touch.move.x
      if (this.banner.top.page !== this.banner.top.total && move > 0) {
        this.banner.top.bannerStyle.transform = `translateX(${this.banner.top.initStyle - move}px)`
      }
      else if (this.banner.top.page !== 1 && move < 0) {
        this.banner.top.bannerStyle.transform = `translateX(${this.banner.top.initStyle - move}px)`
      }
      // else {
      //   this.banner.top.bannerStyle.transform = `translateX(${this.banner.top.initStyle}px)`
      // }
    },
    bannerend (event) {
      if (this.banner.top.turning) return
      this.banner.top.touch.end.x = event.changedTouches[0].clientX
      this.banner.top.touch.end.y = event.changedTouches[0].clientY
      this.banner.top.move = false
      let move = this.banner.top.touch.end.x - this.banner.top.touch.start.x
      if (move < -50) {
        this.sildeRight()
      }
      else if (move > 50) {
        this.sildeLeft()
      }
      else {
        this.banner.top.bannerStyle.transform = `translateX(${this.banner.top.initStyle}px)`
        this.timerStart()
      }
    },
    sildeLeft () {
      this.timerEnd()
      this.banner.top.turning = true
      setTimeout(function () {
        this.banner.top.turning = false
      }.bind(this), 300)
      // let page = this.banner.top.page
      if (this.banner.top.page === 1) {
        this.banner.top.move = true
        this.banner.top.page = this.banner.top.total
        setTimeout(function () {
          this.banner.top.turning = false
        }.bind(this), 10)
        setTimeout(function () {
          this.banner.top.move = false
          this.sildeLeft()
        }.bind(this), 20)
      }
      else {
        this.banner.top.page--
      }
      // this.banner.top.page = (page-- <= 1 ? 1 : page)
      this.banner.top.bannerStyle.transform = `translateX(${-(this.$el.clientWidth * (this.banner.top.page - 1))}px)`
      this.banner.top.initStyle = -(this.$el.clientWidth * (this.banner.top.page - 1))
      this.timerStart()
    },
    sildeRight () {
      this.timerEnd()
      this.banner.top.turning = true
      setTimeout(function () {
        this.banner.top.turning = false
      }.bind(this), 300)
      // let page = this.banner.top.page
      // let total = this.banner.top.total
      if (this.banner.top.page === this.banner.top.total) {
        this.banner.top.move = true
        this.banner.top.page = 1
        setTimeout(function () {
          this.banner.top.move = false
        }.bind(this), 20)
      }
      else if (this.banner.top.page === this.banner.top.total - 1) {
        this.banner.top.page++
        setTimeout(function () {
          this.banner.top.turning = false
          this.sildeRight()
        }.bind(this), 310)
      }
      else {
        this.banner.top.page++
      }
      // this.banner.top.page = (page++ >= total ? total : page)
      this.banner.top.bannerStyle.transform = `translateX(${-this.$el.clientWidth * (this.banner.top.page - 1)}px)`
      this.banner.top.initStyle = -(this.$el.clientWidth * (this.banner.top.page - 1))
      this.timerStart()
    },
    joinBuy (item) {
      console.log(item)
      let array = {
        image: item.image,
        name: item.attr.name,
        number: 1,
        price: item.attr.price,
        type: item.attr.type,
        attr: 'null'
      }
      this.socket.$emit('add-buy', array)
    }
  }
}
</script>
