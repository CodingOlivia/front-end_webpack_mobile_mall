<template>
  <div class="products">
    <div class="TopBanner">
      <div :class="`bannerBg ${banner.top.move?'':'transition-linear'}`" @touchstart="bannerstart" @touchmove="bannermove" @touchend="bannerend" v-for="(item, index) in banner.top.data" :key="index" :style="banner.top.bannerStyle">
        <img :src="item.image" width="100%">
      </div>
      <div class="tools">
        <div class="pagination"><span class="p-lt" @click="sildeLeft"></span><span class="p-rt" @click="sildeRight"></span></div>
      </div>
    </div>
    <div class="productsDIV">
      <div class="ProBox1">
          <div class="ProBox1-main">
            <div class="ProBox1-main-name">
              <span>{{productInfs.title}}</span><i v-if="discount_icon.length>0" :style="{'background': `url(${discount_icon}) center / 100% 100% no-repeat`}">discount</i>
            </div>
            <div class="stars">
              <q-rating v-model="ratingModel" readonly :max="5"/>
            </div>
            <div class="ProBox1-main-reson">
              <span>{{productInfs.reson}}</span>
              <div class="ProBox1-btn">
                <span class="icon-compare" @click="comparehandle"></span>
                <span class="icon-share" @click="sharehandle;$refs.modifyModal.open()"></span>
              </div>
            </div>
          </div>
      </div>
      <div class="ProBox2">
        <div class="ProBox2-left">
          <span class="ProBox2-left-title">One Time Fee</span>
          <span class="ProBox2-left-price">${{OneTimeFeeValue.toFixed(2)}}<span>${{OneTimeFeeValue.toFixed(2)}}</span></span>
        </div>
        <div class="ProBox2-right">
          <span class="ProBox2-right-title">Monthly Fee</span>
          <span class="ProBox2-right-price">${{MonthlyFeeValue.toFixed(2)}}</span>
        </div>
      </div>
      <div class="ProBox3">
        <span class="ProBox3-title">{{choiceColorTitle}}</span>
        <div class="ProBox3-color">
          <div v-for="(item, index) in choice" class="colorChoice" :class="item.activeName" v-on:click="choiceColor(index)">
             <q-btn
               round
               :key="item.id"
               v-bind:color="item.color"
               v-bind:icon="item.icon"
               :class="item.avtiveName"  
               style="width:0.48rem;height:0.48rem;display:flex;align-items:center;"
             />
          </div>
        </div>
      </div>
      <div class="ProBox4" v-for="(item, index) in memory">
        <span class="ProBox4-title">{{item.title}}</span>
        <div class="ProBox4-btn">
          <q-btn outline class="memoryBtGroup" v-for="(size, index) in item.size" :class="size.checked" @click="checkMemory(index)" :key="size.id">{{size.sizeNum}} </q-btn>
        </div>
      </div>
      <div class="ProBox5">
        <span class="ProBox5-title">Primary - 198 Bundle</span>
        <div class="ProBox5-mo">
          <span class="ProBox5-mo-price">$198 /mo.</span>
          <span class="ProBox5-mo-data">Voice: 300 min, SMS: unlimited, Data: 20 GB</span>
        </div>
        <div class="ProBox5-btn">
          <q-btn outline class="primaryBtGroup" v-for="(item, index) in primaryBtn" :class="item.checked" @click="primaryBtnC(index)" :key="item.id">{{item.sizeNum}} </q-btn>
        </div>
      </div>
      <div class="ProBox6">
        <span class="ProBox6-title">Quantity</span>
        <div class="itemNumber">
          <div name="min" v-on:click="min" class="btn-min" v-bind:class="{'disable':counter<=1}"><i></i></div>
          <input name="ProNumber" v-model="counter" type="number" onFocus="this.value=''" class="ProNumber" onkeyup="value=value.replace(/[^\d]/g,'')">
          <div name="add" v-on:click="add" class="btn-add"><i></i></div>
        </div>
      </div>
    </div>
    <q-modal ref="modifyModal" content-css="padding: 50px"  position="bottom">
        <div class="mobile-select-model">
              <div class="mobile-select-title">Share to
                  <span class="model-select-close" @click="$refs.modifyModal.close()"></span>
              </div>
              <div class="mobile-select-con mobile-share-content row justify-center content-start m-size28 m-ytx-p-x-lr m-ytx-p-xx-tb m-ytx-m-xx-tb ">
                  <div  class="col-3 m-ytx-align-center m-ytx-x-mb"   v-for="(item,index) in shareData" >
                    <div class="mobile-share-img m-ytx-mb">
                         <img :src="item.url" alt="">
                    </div>
                    <div class="mobile-share-name">{{item.label}}</div>
                  </div>
              </div>
        </div>
  </q-modal>
  </div>
  
</template>
<script>
import {
  QLayout,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QIcon,
  QModal
} from 'quasar'
export default {
  components: {
    QLayout,
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QModal
  },
  data () {
    return {
      likeIt: false,
      shareData:[
        {
           label:"Facebook",
           url:'statics/icon-fackbook.png'
        },
        {
           label:"Twitter",
           url:'statics/icon-twiter.png'
        },
        {
           label:"Wechat",
           url:'statics/icon-wechat.png'
        },
        {
           label:"Sina",
           url:'statics/icon-sina.png'
        }
      ],
      counter: 1,
      userId: '',
      discount: 1,
      discount_icon: 'statics/mobileImages/discount/618_icon.png',
      banner: {
        top: {
          turning: false,
          page: 1,
          total: 4,
          data: [
            {
              image: './statics/mobileImages/products/ProBanner1.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner2.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner3.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner4.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner5.png'
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
      ratingModel: 4,
      smallImgs: [
        {'src': 'statics/images/ProductContent/1.jpg', 'id': 'src1', 'smImg': 'smImg', 'activeOpacity': 1},
        {'src': 'statics/images/ProductContent/2.jpg', 'id': 'src2', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/3.jpg', 'id': 'src3', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/4.jpg', 'id': 'src4', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/5.jpg', 'id': 'src5', 'smImg': 'smImg', 'activeOpacity': 0.5}
      ],
      links: [
        {'href': '/ProductMenu/Overview', 'label': 'OVERVIEW', 'id': '1'},
        {'href': '/ProductMenu/Gallery', 'label': 'GALLERY', 'id': '2'},
        {'href': '/ProductMenu/TechSpec', 'label': 'TECH SPEC', 'id': '3'},
        {'href': '/ProductMenu/Reviews', 'label': 'REVIEWS', 'id': '4'}
      ],
      productInfs: {
        title: 'Apple iPhone X Space Gray 256GB + 198 Bundle',
        discrip: 'ETVR Upgraded 3D VR Glasses for Movies and Games with Stereo Headphone - More Lightweight Virtual Reality Headset with 120 Degree FOV - Fit for 4.7"-6.2" iPhone & Android Smartphones',
        reson: 'Average based on 1108 reviews'
      },
      choiceColorTitle: `Color - Black`,
      choice: [
        {
          'id': '1',
          'color': 'dark',
          'icon': '',
          'activeName': 'activeName'
        },
        {
          'id': '2',
          'color': 'blue-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '3',
          'color': 'brown-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '4',
          'color': 'grey-8',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '5',
          'color': 'grey-13',
          'icon': '',
          'activeName': ''
        }
      ],
      memory: [
        {
          'title': 'Memory',
          'size': [
            {
              'id': 1,
              'sizeNum': '64 GB',
              'checked': 'checked'
            },
            {
              'id': 2,
              'sizeNum': '128 GB',
              'checked': ''
            },
            {
              'id': 3,
              'sizeNum': '256 GB',
              'checked': ''
            }
          ]
        }
      ],
      primary: [
        {
          'title': 'Primary',
          'primary': [
            {
              'id': 1,
              'primaryDec': '222'
            }
          ]
        }
      ],
      OneTimeFeeValue: 1299,
      MonthlyFeeValue: 198,
      num: 0,
      num1: 0,
      num2: 0,
      lickChecked: false,
      priceChecked: false,
      shareChecked: false,
      share1: [
        {'name': 'thumb_up', 'id': '1'},
        {'name': 'ion-heart', 'id': '2'},
        {'name': 'fa-facebook-f', 'id': '3'}
      ],
      share: [
        {'name': 'favorite_border', 'id': '1'},
        {'name': 'swap_vert', 'id': '2'},
        {'name': 'open_in_new', 'id': '3'}
      ],
      bigImageSrc: 'statics/images/ProductContent/big0.jpg',
      primaryBtn: [
        {
          'id': 1,
          'sizeNum': '64 Bundle',
          'checked': 'checked'
        },
        {
          'id': 2,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 3,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 4,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 5,
          'sizeNum': '256 Bundle',
          'checked': ''
        }
      ]
    }
  },
  mounted: function () {
    this.timerStart()
  },
  methods: {
    comparehandle () {
      console.log('方法：比较')
    },
    sharehandle () {
      console.log('方法：分享')
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
      // if (this.banner.top.page !== 1 && this.banner.top.page !== this.banner.top.total) {
      //   this.banner.top.bannerStyle.transform = `translateX(${this.banner.top.touch.initStyle + this.banner.top.touch.move.x - this.banner.top.touch.start.x}px)`
      // }
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
      // let page = this.banner.top.page
      // this.banner.top.page = (page-- <= 1 ? 1 : page)
      // console.log(this.banner.top.page)
      this.timerEnd()
      this.banner.top.turning = true
      setTimeout(function () {
        this.banner.top.turning = false
      }.bind(this), 300)
      // let page = this.banner.top.page
      // this.banner.top.page = (page-- <= 1 ? 1 : page)
      // console.log(this.banner.top.page)
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
      this.banner.top.bannerStyle.transform = `translateX(${-(this.$el.clientWidth * (this.banner.top.page - 1))}px)`
      this.banner.top.initStyle = -(this.$el.clientWidth * (this.banner.top.page - 1))
      this.timerStart()
    },
    sildeRight () {
      // let page = this.banner.top.page
      // let total = this.banner.top.total
      // this.banner.top.page = (page++ >= total ? total : page)
      // console.log(this.banner.top.page)
      this.timerEnd()
      this.banner.top.turning = true
      setTimeout(function () {
        this.banner.top.turning = false
      }.bind(this), 300)
      // let page = this.banner.top.page
      // let total = this.banner.top.total
      // this.banner.top.page = (page++ >= total ? total : page)
      // console.log(this.banner.top.page)
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
      this.banner.top.bannerStyle.transform = `translateX(${-this.$el.clientWidth * (this.banner.top.page - 1)}px)`
      this.banner.top.initStyle = -(this.$el.clientWidth * (this.banner.top.page - 1))
      this.timerStart()
    },
    checkMemory: function (index) {
      var temp = this.memory
      for (var i = temp.length - 1; i >= 0; i--) {
        var tempSize = temp[i].size
      }
      for (var j = tempSize.length - 1; j >= 0; j--) {
        tempSize[this.num].checked = 'checked'
        if (this.num !== index) {
          // console.log(tempSize[j])
          tempSize[this.num].checked = ''
          this.num = index
        }
      }
    },
    choiceColor: function (index) {
      this.choice[index].activeName = 'activeName'
      if (this.num1 !== index) {
        this.choice[this.num1].activeName = ''
        this.num1 = index
      }
    },
    primaryBtnC: function (index) {
      this.primaryBtn[index].checked = 'checked'
      if (this.num2 !== index) {
        this.primaryBtn[this.num2].checked = ''
        this.num2 = index
      }
    },
    changeBigImg: function (imgIndex) {
      this.bigImageSrc = `statics/images/ProductContent/big` + imgIndex + `.jpg`
      for (var i = this.smallImgs.length - 1; i >= 0; i--) {
        this.smallImgs[imgIndex].activeOpacity = 1
        // console.log(this.smallImgs[imgIndex].activeOpacity)
        if (imgIndex !== i) {
          this.smallImgs[i].activeOpacity = 0.5
        }
      }
    },
    icoLike: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_like'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_liked'
        this.lickChecked = true
      }
    },
    ico_priced: function (event) {
      if (this.priceChecked) {
        event.target.className = 'ico_price'
        this.priceChecked = false
      }
      else {
        event.target.className = 'ico_priced'
        this.priceChecked = true
      }
    },
    ico_shared: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_share'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_shared'
        this.lickChecked = true
      }
    },
    add: function () {
      this.counter = parseInt(this.counter) + 1
    },
    min: function () {
      if (this.counter > 1) {
        this.counter = parseInt(this.counter) - 1
      }
    }
  }
}
</script>