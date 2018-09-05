<template>
  <div class="otherHeardBox">
    <div v-if="type==='sign'">
      <i class="none"></i>
      <span>{{title}}</span>
      <i @click="back"></i>
    </div>
    <div v-else-if="type==='address'" class="address">
      <i @click="back"></i>
      <span>Shipping Address</span>
      <i @click="jump('/Market/Checkout/Address/Table')"></i>
    </div>
    <div v-else-if="type==='address-table'" class="address">
      <i @click="back"></i>
      <span>Add New Address</span>
      <i class="none"></i>
    </div>
    <div v-else-if="type==='address-map'" class="address-map">
      <i @click="back"></i>
      <!-- <div><input type="text" v-model="searchKey" placeholder="Search" @keydown.enter="search()"></div> -->
      <div>
        <q-search v-model="searchKey" placeholder="Search" @focus="handleFocus" @blur="handleBlur">
          <q-autocomplete @search="search" />
        </q-search>
      </div>
    </div>
    <div v-else-if="type==='payment'" class="payment">
      <i @click="back"></i>
      <span>Payment</span>
      <i></i>
    </div>
    <div v-else class="order">
      <i v-if="searchShow==false" @click="back"></i>
      <span v-if="searchShow==false"> My Order</span>
      <i @click="searchShow=true" v-if="searchShow==false"></i>

      <div class="order-search col" v-if="searchShow==true">
          <i class="icon-search"></i>
          <input class="col" v-model="searchKey1" placeholder="Search" @keyup="searchKey1==''?showClear=false:showClear=true" @focus="searchKey1==''?showClear=false:showClear=true" @blur="showClear=false"/>
          <i class="icon-clear" @click="searchKey1='';searchShow=false;" v-if="showClear==true"></i>
      </div>
    </div>
    <div class="searchMark transition" v-bind:class="{'active':searchMark}">
      <div class="history" v-if="searchDate.history.length>0&&searchKey.length===0">
        <div class="title"><span>History</span><i @click="clearHistory">clear</i></div>
        <div class="content">
          <span v-for="item in searchDate.history" @click="jump(item.url, true)">{{item.text}}</span>
        </div>
      </div>
      <div class="topSearch" v-if="searchDate.topSearch.length>0&&searchKey.length===0">
        <div class="title"><span>Top Search</span><i class="none">clear</i></div>
        <div class="content">
          <span v-for="item in searchDate.topSearch" @click="jump(item.url, true)">{{item.text}}</span>
        </div>
      </div>
      <div class="autocompleteDive" v-if="searchKey.length>0">
        <div v-for="item in countries" @click="selected(item)"><span>{{item.value}}</span><span><span v-if="item.sublabel.length" v-for="subVal in item.sublabel">{{subVal}}</span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import searchLog from 'data/search-log.json'
import countries from 'data/autocomplete.json'
import {
  QSearch,
  QAutocomplete,
  // uid,
  filter
} from 'quasar'
// const icons = ['alarm', 'email', 'search', 'build', 'card_giftcard', 'perm_identity', 'receipt', 'schedule', 'speaker_phone', 'archive', 'weekend', 'battery_charging_full']
// function getRandomIcon () {
//   return icons[Math.floor(Math.random() * icons.length)]
// }
function getRandomStamp () {
  if (Math.floor(Math.random() * 50) % 3 === 0) {
    return `${Math.floor(Math.random() * 10)} min`
  }
}
function getRandomSecondLabel (val) {
  // if (Math.floor(Math.random() * 50) % 4 === 0) {
  //   return `UID: ${uid().substring(0, 8)}`
  // }
  if (val === 'P20') {
    return ['Huawei', 'Pro']
  }
}
function parseCountries () {
  return countries.map(country => {
    return {
      label: country,
      sublabel: getRandomSecondLabel(country),
      // icon: getRandomIcon(),
      stamp: getRandomStamp(),
      value: country
    }
  })
}
export default {
  name: 'r-other-heard',
  components: {
    QSearch,
    QAutocomplete
  },
  props: ['type'],
  data () {
    return {
      title: 'SIGN IN',
      searchMark: false,
      searchShow:false,
      searchKey: '',
      searchKey1: '',
      showClear:false,
      searchDate: searchLog,
      countries: []
    }
  },
  mounted () {
    this.socket.$on('open-go', function (val) {
      if (val === 'signUp') {
        this.title = 'SIGN UP'
      }
      else if (val === 'signIn') {
        this.title = 'SIGN IN'
      }
    }.bind(this))
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    // search () {
    //   this.socket.$emit('address-map-search', this.searchKey)
    // },
    jump (to, state) {
      if (state) {
        console.log('方法：跳转')
        // this.$router.push(to)
        return
      }
      this.socket.$emit('address-add-list', {})
      this.$router.push(to)
    },
    handleFocus () {
      this.searchMark = true
    },
    handleBlur () {
      this.searchMark = false
    },
    clearHistory () {
      this.searchDate.history = []
    },
    search (terms, done) {
      setTimeout(function () {
        console.log('方法：自动完成')
        let item = filter(terms, {field: 'value', list: parseCountries()})
        this.countries = item
        console.log(item)
        done()
        // done(filter(terms, {field: 'value', list: parseCountries()}))
      }.bind(this), 1000)
    },
    search1 (terms, done) {
      setTimeout(function () {
        console.log('方法：自动完成')
        let item = filter(terms, {field: 'value', list: parseCountries()})
        this.countries = item
        console.log(item)
        done()
        // done(filter(terms, {field: 'value', list: parseCountries()}))
      }.bind(this), 1000)
    },
    selected (item) {
      console.log(item)
      this.searchKey = item.value
      // Toast.create(`Selected suggestion "${item.label}"`)
    },
    clearData(data){
      console.log(121212);
    }
  },
  watch: {
    searchKey: function (val) {
      this.countries = []
    }
  }
}
</script>
