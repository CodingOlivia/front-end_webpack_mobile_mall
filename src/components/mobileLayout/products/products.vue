<template>
  <div class="products">
    <div id="hearder128" style="height: 1.6rem; position: fixed;"></div>
    <div class="TopBanner">
      <div :class="`bannerBg ${banner.top.move?'':'transition-linear'}`" @touchstart="bannerstart" @touchmove="bannermove" @touchend="bannerend" v-for="(item, index) in banner.top.data" :key="index" :style="banner.top.bannerStyle">
        <img :src="item.image" width="100%">
      </div>
      <div class="tools">
        <div class="pagination"><span class="p-lt" @click="sildeLeft"></span><span class="p-rt" @click="sildeRight"></span></div>
      </div>
    </div>
    <div class="productsDIV" :class="{'productOff':isOFF==true}">
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
                <span class="icon-share" @click=";$refs.modifyModal.open()"></span>
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
    <div class="overview xqDiv" id="overview">
      <img v-for="gallery in Gallery" :src=gallery.src class="responsive">
    </div>
    <div class="gallery xqDiv" id="gallery">
      <q-gallery-carousel
          horizontal-quick-view
          infinite
          autoplay
          fullscreen  
          :src="slider" 
          class="imagesbox" />
    </div>
    <div class="techSpec xqDiv" id="techSpec">
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
    <div class="rerviews xqDiv" id="rerviews">
      <div class="rerviewsBox1">
        <div class="rerviewsBox1-tips">
            <div class="rerviewsBox1-data">
              <span style="padding: 0 .1rem 0 0">User satisfaction</span>
              <span style="font-size:.4rem; color: $background-color-4">100</span>
              <span style="font-size:.32rem; color: $background-color-4">%</span>
            </div>
            <div class="rerviewsBox1-stars">
              <q-rating v-model="ratingModel1" readonly :max="5"/>
            </div>
        </div>
        <div class="rerviewsBox1-User-impression">
          <button v-for="item in btn" @click="search(item.btnName)">{{ item.btnName }}<span>{{ item.btnNum }}</span></button>
        </div>
      </div>
      <div class="rerviewsBox2">
        <div class="top">
            <ul>
              <li class="active">All Reviews</li>
              <li>Hightest Rating</li>
              <li>Have a Picutre</li>
            </ul>
          </div>
      </div>
      <div class="rerviewsBox3" v-for="item in details" :key="item.id">
        <div class="rerviewsBox3-Div">
          <div class="rerviewsBox3-Top">
            <div class="rerviewsBox3-left" v-for="list in item.qlist" :key="list.id">
              <img class="img-size" :src=list.avatar />
              <div class="text-size">
                <span class="q-item-label">{{list.label}}</span>
                <span class="q-item-sublabel">{{list.sublabel}}</span>
              </div>
            </div>
            <div class="rerviewsBox3-right">
              <q-rating readonly v-model="ratingModel2" :max="5" />
            </div>
          </div>
          <div v-for="discuss in item.discuss" :key="discuss.id">
            <div class="rerviewsBox3-discuss">
              <span style="font-weight: bold">{{discuss.discussName}}</span>
              <span style="color: $font-color-5666">{{discuss.describe}}</span>
              <div class="rerviewsBox3-img" v-for="images in discuss.images">
                <img class="img-size" :src=images.images1 />
                <img class="img-size" :src=images.images2 />
                <img class="img-size" :src=images.images3 />
              </div>
            </div>
            <div class="rerviewsBox3-Text" v-for="text in discuss.text" :key="text.id">
              <span style="color: $background-color-4">{{text.title}}</span>
              <span style="color: $font-color-5666">{{text.ptext}}</span>
            </div>
          </div>
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
  QScrollArea,
  QIcon,
  QGallery,
  QGalleryCarousel,
  QBtn,
  QTabs,
  QTab,
  QSelect,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QPagination,
  QChip,
  QRating,
  QModal
} from 'quasar'
export default {
  components: {
    QLayout,
    QSideLink,
    QScrollArea,
    QIcon,
    QGallery,
    QGalleryCarousel,
    QBtn,
    QTabs,
    QTab,
    QSelect,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QPagination,
    QChip,
    QRating,
    QModal
  },
  data () {
    return {
      likeIt: false,
      counter: 1,
      isOFF:false,
      userId: '',
      discount: 1,
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
      discount_icon: 'statics/mobileImages/discount/618_icon.png',
      Gallery: [
        {'src': 'statics/mobileImages/products/Overview1.jpg'},
        {'src': 'statics/mobileImages/products/Overview2.jpg'},
        {'src': 'statics/mobileImages/products/Overview1.jpg'},
        {'src': 'statics/mobileImages/products/Overview2.jpg'},
        {'src': 'statics/mobileImages/products/Overview1.jpg'},
        {'src': 'statics/mobileImages/products/Overview2.jpg'}
      ],
      slider: [
        'statics/mobileImages/products/GalleryBanner1.jpg',
        'statics/mobileImages/products/GalleryBanner2.jpg',
        'statics/mobileImages/products/GalleryBanner3.jpg',
        'statics/mobileImages/products/GalleryBanner4.jpg'
      ],
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
      }],
      btnName: '',
      display: 5,
      current: 1,
      ratingModel1: 4,
      ratingModel2: 5,
      page: 1,
      details: [],
      detailsAll: [],
      detailsCopy: [
        {
          'id': '1',
          'qlist': [
            {
              'id': '1',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '1',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'images': [
                {
                  'images1': 'statics/mobileImages/products/Reviews1.jpg',
                  'images2': 'statics/mobileImages/products/Reviews3.jpg',
                  'images3': 'statics/mobileImages/products/Reviews2.jpg'
                }
              ],
              'text': [
                {
                  'id': '1',
                  'title': 'by Customer service',
                  'ptext': 'Here is the sample user commentr.'
                }
              ]
            }
          ]
        },
        {
          'id': '2',
          'qlist': [
            {
              'id': '2',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '2',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'images': [
                {
                }
              ],
              'text': [
                {
                  'id': '2',
                  'title': 'by Customer service',
                  'ptext': 'Here is the sample user commentr.'
                }
              ]
            }
          ]
        }
      ],
      btn: [
        {
          btnName: 'Cost-effective',
          btnNum: ''
        },
        {
          btnName: 'Great',
          btnNum: ''
        },
        {
          btnName: 'Powerful',
          btnNum: ''
        },
        {
          btnName: 'Amazing',
          btnNum: ''
        },
        {
          btnName: 'Good Experience',
          btnNum: ''
        }
      ],
      select: 'fb',
      options: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Recommendation',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
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
    },
    HotPageSub () {
      this.banner.select = this.banner.select - 2 < 0 ? 0 : this.banner.select - 2
    },
    HotPageAdd () {
      this.banner.select = this.banner.select + 2 >= this.banner.total ? this.banner.total - 2 : this.banner.select + 2
    },
    selectType (type) {
      this.active.type = type
      this.current = 1
    },
    selectColor (color) {
      if (color === this.active.color) {
        this.active.color = ''
      }
      else this.active.color = color
      this.current = 1
    },
    selectMemory (memory) {
      this.active.memory = memory
      this.current = 1
    },
    clearMemory () {
      this.active.memory = ''
      this.current = 1
    },
    clearType () {
      this.active.color = ''
      this.active.memory = ''
      this.current = 1
    },
    pagechange: function (p) {
      this.current = p
      // console.log('pagechange', p)
      this.details = []
      for (var i = (this.current - 1) * this.display; i < this.current * this.display && i < this.detailsCopy.length; i++) {
        this.details.push(this.detailsCopy[i])
      }
    },
    typeSelect: function (p) {
      this.current = 1
    },
    search: function (name) {
      if (this.btnName !== name) {
        this.btnName = name
        this.details = []
        this.detailsAll = []
        for (var i = 0; i < this.detailsCopy.length; i++) {
          if (this.detailsCopy[i].discuss[0].describe.indexOf(name) >= 0) {
            this.detailsAll.push(this.detailsCopy[i])
          }
        }
        for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
          this.details.push(this.detailsAll[d])
        }
      }
      else {
        this.current = 1
        this.details = []
        this.detailsAll = []
        this.detailsAll = this.detailsCopy
        for (var a = (this.current - 1) * this.display; a < this.current * this.display && a < this.detailsAll.length; a++) {
          this.details.push(this.detailsAll[a])
        }
      }
    },
    listenerScroll: function () {
      if (window.scrollY >= this.$el.querySelector('#overview').offsetTop - this.$el.querySelector('#hearder128').clientHeight) {
        this.socket.$emit('product-header', false)
      }
      else {
        this.socket.$emit('product-header', true)
      }
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
    this.timerStart()
    this.details = []
    this.detailsAll = []
    this.detailsAll = this.detailsCopy
    for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
      this.details.push(this.detailsAll[d])
    }
    for (var b = 0; b < this.btn.length; b++) {
      var num = 0
      for (var c = 0; c < this.detailsCopy.length; c++) {
        // if (this.btn[b].btnName.indexOf(this.detailsCopy[c].discuss[0].describe) >= 0) {
        if (this.detailsCopy[c].discuss[0].describe.indexOf(this.btn[b].btnName) >= 0) {
          num++
        }
      }
      this.btn[b].btnNum = num
    }
    window.addEventListener('scroll', this.listenerScroll)
  },
  destroyed () {
    console.log('destroyed')
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>