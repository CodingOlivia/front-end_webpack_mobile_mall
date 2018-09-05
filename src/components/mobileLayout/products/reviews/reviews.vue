<template>
  <div class="rerviews">
    <div class="rerviewsBox1">
      <div class="rerviewsBox1-tips">
          <div class="rerviewsBox1-data">
            <span style="padding: 0 .1rem 0 0">User satisfaction</span>
            <span style="font-size:.4rem; color: $background-color-4">100</span>
            <span style="font-size:.32rem; color: $background-color-4">%</span>
          </div>
          <div class="rerviewsBox1-stars">
            <q-rating v-model="ratingModel" readonly :max="5"/>
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
  </div>
</template>
<script>
import {
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
  QRating
} from 'quasar'
import RPagination from 'components/pagination'
export default {
  components: {
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
    RPagination
  },
  data () {
    return {
      btnName: '',
      display: 5,
      current: 1,
      ratingModel: 4,
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
      ]
    }
  },
  methods: {
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
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
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
  }
}
</script>