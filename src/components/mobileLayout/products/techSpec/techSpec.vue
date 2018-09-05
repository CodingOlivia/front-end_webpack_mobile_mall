<template>
  <div class="techSpec">
    <div class="techSpecBox1" v-for="finish in Finish">
      <div class="techSpecBox1-title"><span>{{finish.title}}</span></div>
      <div class="flex column" v-for="productType in finish.productType">
        <div class="techSpecBox1-img">
          <img class="img-size" :src="productType.src"/>
        </div>
        <span class="img-color">{{productType.color}}</span>
     </div>
    </div>
    <div class="techSpecBox2" v-for="capacity in Capacity">
      <div class="techSpecBox2-title"><span>{{capacity.title}}</span></div>
      <div class="techSpecBox2-gbnum">
        <span style="display: block;" v-for="gb in capacity.GB">{{gb.GBNUM}}</span>
      </div>
    </div>
    <div class="techSpecBox3"  v-for="size in Size">
      <div class="techSpecBox3-title"><span>{{size.title}}</span></div>
      <div class="techSpecBox3-img">
        <img class="img-size" :src=size.src />
      </div>
      <div class="techSpecBox3-text">
        <span v-for="sizeDiscrip in size.sizeDiscrip"><span style="font-weight:bold">{{sizeDiscrip.discripName}}:</span> {{sizeDiscrip.discripNum}}</span>
      </div>
    </div>
    <div class="techSpecBox4" v-for="display in Display">
      <div class="techSpecBox4-title"><span>{{display.title}}</span></div>
      <div class="techSpecBox4-img">
        <img class="img-size" :src=display.src />
      </div>
      <div class="techSpecBox4-text">
        <span v-for="displayDiscrip in display.displayDiscrip">{{displayDiscrip.displayContent}}</span>
        <span style="color: $font-color-5666; font-size: .24rem; line-height:1.4; padding: .40rem 0 0 0">{{display.discripLongth}}</span>
      </div>
    </div>
    <div class="techSpecBox5">
      <div class="techSpecBox5-title"><span>{{Splash.title}}</span></div>
      <div class="techSpecBox5-text"><span>{{Splash.discrip}}</span></div>
    </div>
    <div class="techSpecBox6" v-for="camera in Camera">
      <div class="techSpecBox6-title"><span>{{camera.title}}</span></div>
      <div class="techSpecBox6-text"><span v-for="cameraDiscrip in camera.cameraDiscrip">{{cameraDiscrip.cameraContent}}</span></div>
    </div>
    <div class="techSpecBox7">
      <div class="techSpecBox7-title"><span>{{Carriers.title}}</span></div>
      <div class="techSpecBox7-img"><img class="img-size" :src=Carriers.src /></div>
    </div>
    <div class="techSpecBox8" v-for="cellular in Cellular">
      <div class="techSpecBox8-title"><span>{{cellular.title}}</span></div>
      <div class="techSpecBox8-text">
        <span style="font-weight: bolder">
          {{cellular.discrip1}}
        </span>
        <span style="font-weight: 400; font-size: .24rem; line-height: 1.4; padding-bottom: .28rem">
          {{cellular.discrip3}}
        </span>
        <span v-for="cellularContent1 in cellular.cellularContent1">
          {{cellularContent1.cellularcontent1}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      'Finish': [{
        'title': 'Finish',
        productType: [
          {src: 'statics/mobileImages/products/TechSpec1.jpg', color: 'Space Gray'},
          {src: 'statics/mobileImages/products/TechSpec2.jpg', color: 'Silver'}
        ]
      }],
      'Capacity': [{
        'title': 'Capacity',
        'GB': [
          {'GBNUM': 'GB64'},
          {'GBNUM': 'GB256'}
        ]
      }],
      'Size': [{
        'title': 'Size and Weight',
        'src': 'statics/mobileImages/products/TechSpec3.jpg',
        'sizeDiscrip': [
          {'discripName': 'Height', 'discripNum': '5.65 inches (143.6 mm)'},
          {'discripName': 'Width', 'discripNum': '2.79 inches (70.9 mm)'},
          {'discripName': 'Depth', 'discripNum': '0.30 inch (7.7 mm)'},
          {'discripName': 'Weight', 'discripNum': '6.14 ounces (174 grams)'}
        ]
      }],
      'Display': [{
        'title': 'Display',
        'src': 'statics/mobileImages/products/TechSpec4.jpg',
        'displayDiscrip': [
          {'displayContent': 'Super Retina HD display'},
          {'displayContent': '5.8-inch (diagonal) all-screen OLED Multi-Touch display'},
          {'displayContent': 'HDR display'},
          {'displayContent': '2436-by-1125-pixel resolution at 458 ppi'},
          {'displayContent': '1,000,000:1 contrast ratio (typical)'},
          {'displayContent': 'True Tone display'}
        ],
        'discripLongth': 'The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
      }],
      'Splash': {
        'title': 'Splash, Water, and Dust Resistant',
        'discrip': 'Rated IP67 under IEC standard 60529'
      },
      'Camera': [{
        'title': 'Camera',
        'cameraDiscrip': [
          {'cameraContent': '12MP wide-angle and telephoto cameras'},
          {'cameraContent': 'Wide-angle: ƒ/1.8 aperture'},
          {'cameraContent': 'Telephoto: ƒ/2.4 aperture'},
          {'cameraContent': 'Optical zoom; digital zoom up to 10x'}
        ]
      }],
      'Carriers': {
        'title': 'Carriers',
        'src': 'statics/mobileImages/products/TechSpec5.jpg'
      },
      'Cellular': [{
        'title': 'Cellular and  Wireless',
        'discrip1': 'Model A1865*',
        'discrip2': 'Model A1901*',
        'discrip3': 'Model A1901 does not support CDMA networks, such as those used by Verizon and Sprint.',
        'discrip4': 'All models',
        'cellularContent1': [
          {'cellularcontent1': 'FDD-LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)'},
          {'cellularcontent1': 'TD-LTE (Bands 34, 38, 39, 40, 41)'},
          {'cellularcontent1': 'TD-SCDMA 1900 (F), 2000 (A)'},
          {'cellularcontent1': 'CDMA EV-DO Rev. A (800, 1900, 2100 MHz)'},
          {'cellularcontent1': 'UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)'},
          {'cellularcontent1': 'GSM/EDGE (850, 900, 1800, 1900 MHz)'}
        ],
        'cellularContent2': [
          {'cellularcontent2': 'FDD-LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)'},
          {'cellularcontent2': 'TD-LTE (Bands 34, 38, 39, 40, 41)'},
          {'cellularcontent2': 'UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)'},
          {'cellularcontent2': 'GSM/EDGE (850, 900, 1800, 1900 MHz)'}
        ],
        'cellularContent3': [
          {'cellularcontent3': '802.11ac Wi‑Fi with MIMO'},
          {'cellularcontent3': 'Bluetooth 5.0 wireless technology'},
          {'cellularcontent3': 'NFC with reader mode'}
        ]
      }]
    }
  }
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
.techSpec
  position relative
  top 1.6rem
  width 100%
  overflow hidden
  display flex
  justify-content center
  flex-direction column !important
  align-items flex-start
  color $all-color-1
  .techSpecBox1
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox1-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      flex-direction row
      height 1.2rem
      display flex
      align-items center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox1-img
      width 100%
      display flex
      flex-direction colunm
      align-items flex-start
      justify-content center
      .img-size
        width 7rem
        padding .8rem 0
    .img-color
      display flex
      flex-direction colunm
      align-items flex-start
      justify-content center
      font-size .32rem
      color $all-color-1
      padding 0 0 .8rem 0
      font-weight 600
  .techSpecBox2
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox2-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox2-gbnum
      padding .6rem 0
      font-size .32rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      line-height 1.6
      span
        font-weight bold
        margin-left .16rem
  .techSpecBox3
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox3-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox3-img
      width 100%
      display flex
      flex-direction colunm
      align-items flex-start
      justify-content center
      .img-size
        width 7rem
        padding .8rem 0
    .techSpecBox3-text
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      font-size .28rem
      line-height 2
      padding-bottom .6rem
      padding-right .72rem
      span
        margin-left .16rem
  .techSpecBox4
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox4-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox4-img
      width 100%
      display flex
      flex-direction colunm
      align-items flex-start
      justify-content center
      .img-size
        width 7rem
        padding .8rem 0
    .techSpecBox4-text
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      font-size .32rem
      line-height 2
      padding-bottom .6rem
      padding-right .72rem
      span
        margin-left .16rem
  .techSpecBox5
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox5-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox5-text
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      font-size .32rem
      line-height 1
      padding-bottom .6rem
      padding-right .72rem
      padding-top .4rem
      span
        margin-left .16rem
        font-weight 400
  .techSpecBox6
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox6-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox6-text
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      font-size .32rem
      line-height 2
      padding-bottom .6rem
      padding-right .72rem
      padding-top .4rem
      span
        margin-left .16rem
        font-weight 400
  .techSpecBox7
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    .techSpecBox7-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox7-img
      width 100%
      display flex
      flex-direction colunm
      align-items flex-start
      justify-content center
      .img-size
        width 7rem
        padding .8rem 0
  .techSpecBox8
    width 100%
    display flex
    justify-content center
    flex-direction column
    padding 0 0.24rem
    padding-bottom 1.12rem
    .techSpecBox8-title
      border-bottom 1px solid $border-color-1
      font-size .38rem
      width 100%
      display flex
      height 1.2rem
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      span
        font-weight bold
        margin-left .16rem
    .techSpecBox8-text
      display flex
      align-items flex-start
      flex-direction column
      justify-content center
      font-size .32rem
      line-height 2
      //padding-bottom .6rem
      padding-top .4rem
      span
        margin-left .16rem
        font-weight 400
</style>