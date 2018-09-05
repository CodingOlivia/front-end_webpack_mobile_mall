<template>
  <div class="searchDiv">
    <div class="banner">
      <img src="~statics/mobileImages/search/search_banne.jpg" width="100%">
    </div>
    <div class="filterTop">
      <div class="left" @click="open = true">
        <i></i><span>Filter</span>
      </div>
      <div class="right">
        <span>Sort by:</span>
        <q-select
          class="search-sort"
          v-model="sortType"
          :options="selectOptions"
        />
      </div>
    </div>
    <div class="productsDiv flex">
      <q-infinite-scroll :handler="refresher">
        <div class="product" v-for="(item, index) in products.data" @click="jump('/Products')" v-if="index<pagination.currentPage*pagination.display">
          <div class="productImage">
            <img :src="item.image" width="100%">
          </div>
          <div class="productRight">
            <div class="productName">
              <span>{{item.name}}</span>
            </div>
            <div class="productInformation">
              {{item.detailedInformation}}
            </div>
            <div class="productOther">
              <span>${{item.price.toFixed(2)}}</span>
              <span>${{item.Oprice.toFixed(2)}}</span>
              <span>{{item.type}}</span>
            </div>
            <div class="productFooter">
              <div class="iDiv">
                <i v-if="item.discount_icon.length>0" :style="{'background': `url(${item.discount_icon}) center / 100% 100% no-repeat`}">discount</i>
              </div>
              <div class="productBtn">
                <span v-on:click.stop="contrast(index)" :class="[{'active':item.myClick}, item.contrast ? 'compare' : 'compare3']">compare</span>
                <hr>
                <span v-on:click.stop="collection(index)" v-bind:class="{'active':item.collection}">collection</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center bottom" v-show="pagination.currentPage < Math.ceil(products.data.length / pagination.display)">
          <q-spinner-dots slot="message" :size="40" />
        </div>
      </q-infinite-scroll>
    </div>
    <div class="productsPage" v-if="false">
      <div class="left" v-bind:class="{'no':pagination.currentPage<=1}" @click="subPage"><i></i></div>
      <div class="content">
        <input type="number" v-model="pagination.currentPage">
        <span>of</span>
        <span>{{total}}</span>
      </div>
      <div class="right" v-bind:class="{'no':pagination.currentPage>=total}" @click="addPage"><i></i></div>
    </div>
    <q-modal class="filterDiv" v-model="open">
      <div class="main">
        <div class="main-top">
          <div class="title"><span @click="reset">Reset</span><i @click="open = false">x</i></div>
          <div class="done" @click="filterProduct">Done</div>
          <div class="bottom-line"></div>
        </div>
        <div class="content">
          <div class="filterProducts">
            <div class="top"><span class="title" @click="filterProducts.type.Products.open=!filterProducts.type.Products.open">Products</span><i @click="filterProducts.type.Products.open=!filterProducts.type.Products.open" v-bind:class="{'show':filterProducts.type.Products.open,'hide':!filterProducts.type.Products.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Products.open">
              <span @click="pushActive('Contract Phone', 'products')" v-bind:class="{'active':active.products.indexOf('Contract Phone')>=0}">Contract Phone</span>
              <span @click="pushActive('Phone', 'products')" v-bind:class="{'active':active.products.indexOf('Phone')>=0}">Phone</span>
              <span @click="pushActive('Accessories', 'products')" v-bind:class="{'active':active.products.indexOf('Accessories')>=0}">Accessories</span>
              <span @click="pushActive('Plans', 'products')" v-bind:class="{'active':active.products.indexOf('Plans')>=0}">Plans</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title" @click="filterProducts.type.Brand.open=!filterProducts.type.Brand.open">Brand</span><i @click="filterProducts.type.Brand.open=!filterProducts.type.Brand.open" v-bind:class="{'show':filterProducts.type.Brand.open,'hide':!filterProducts.type.Brand.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Brand.open">
              <span @click="pushActive('Huawei', 'brand')" v-bind:class="{'active':active.brand.indexOf('Huawei')>=0}">Huawei</span>
              <span @click="pushActive('Others', 'brand')" v-bind:class="{'active':active.brand.indexOf('Others')>=0}">Others</span>
            </div>
          </div>
          <div class="filterColor">
            <div class="top">
              <span class="title" @click="filterProducts.type.Color.open=!filterProducts.type.Color.open">Color</span>
              <i @click="filterProducts.type.Color.open=!filterProducts.type.Color.open" v-bind:class="{'show':filterProducts.type.Color.open,'hide':!filterProducts.type.Color.open}">x</i>
            </div>
            <div class="content transition" :open="filterProducts.type.Color.open">
              <div v-for="item in filterProducts.type.Color.data"  @click="pushActive(item.name, 'color')" v-bind:class="{'active':active.color.indexOf(item.name)>=0}">
                <i :style="{background: `url(${item.image}) center no-repeat`, backgroundSize: '100% 100%'}">{{item.name}}</i>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title" @click="filterProducts.type.Memory.open=!filterProducts.type.Memory.open">Memory</span><i @click="filterProducts.type.Memory.open=!filterProducts.type.Memory.open" v-bind:class="{'show':filterProducts.type.Memory.open,'hide':!filterProducts.type.Memory.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Memory.open">
              <span @click="pushActive('16 GB', 'memory')" v-bind:class="{'active':active.memory.indexOf('16 GB')>=0}">16 GB</span>
              <span @click="pushActive('32 GB', 'memory')" v-bind:class="{'active':active.memory.indexOf('32 GB')>=0}">32GB</span>
              <span @click="pushActive('64 GB', 'memory')" v-bind:class="{'active':active.memory.indexOf('64 GB')>=0}">64GB</span>
              <span @click="pushActive('128 GB', 'memory')" v-bind:class="{'active':active.memory.indexOf('128 GB')>=0}">128GB</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title" @click="filterProducts.type.Connection.open=!filterProducts.type.Connection.open">Connection</span><i @click="filterProducts.type.Connection.open=!filterProducts.type.Connection.open" v-bind:class="{'show':filterProducts.type.Connection.open,'hide':!filterProducts.type.Connection.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Connection.open">
              <span @click="pushActive('Airplay', 'connection')" v-bind:class="{'active':active.connection.indexOf('Airplay')>=0}">Airplay</span>
              <span @click="pushActive('Bluetooth', 'connection')" v-bind:class="{'active':active.connection.indexOf('Bluetooth')>=0}">Bluetooth</span>
              <span @click="pushActive('Wireless', 'connection')" v-bind:class="{'active':active.connection.indexOf('Wireless')>=0}">Wireless</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title" @click="filterProducts.type.ProductType.open=!filterProducts.type.ProductType.open">ProductType</span><i @click="filterProducts.type.ProductType.open=!filterProducts.type.ProductType.open" v-bind:class="{'show':filterProducts.type.ProductType.open,'hide':!filterProducts.type.ProductType.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.ProductType.open">
              <span @click="pushActive('All Cases', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('All Cases')>=0}">All Cases</span>
              <span @click="pushActive('Cases & Covers', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Cases & Covers')>=0}">Cases & Covers</span>
              <span @click="pushActive('Headphones', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Headphones')>=0}">Headphones</span>
              <span @click="pushActive('Sperkers', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Sperkers')>=0}">Sperkers</span>
              <span @click="pushActive('Snap On Cases', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Snap On Cases')>=0}">Snap On Cases</span>
              <span @click="pushActive('Charges', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Charges')>=0}">Charges</span>
              <span @click="pushActive('Batteries', 'productsType')" v-bind:class="{'active':active.productsType.indexOf('Batteries')>=0}">Batteries</span>
            </div>
          </div>
        </div>
      </div>
    </q-modal>
    <div class="productEnd" v-show="pagination.currentPage >= Math.ceil(products.data.length / pagination.display)">
      <span>End of the product display</span>
    </div>
  </div>
</template>

<script>
import {
  QSelect,
  QModal,
  QInfiniteScroll,
  QSpinnerDots
} from 'quasar'
import _ from 'lodash'
import productsData from 'data/offerings-data.json'
export default {
  components: {
    QSelect,
    QModal,
    QInfiniteScroll,
    QSpinnerDots
  },
  data () {
    return {
      open: false,
      filterKey: '',
      filterType: '',
      sortType: 'pop',
      selectOptions: [
        {
          label: 'Popularity',
          value: 'pop'
        },
        {
          label: 'Name A-Z',
          value: 'name'
        },
        {
          label: 'Best Sellers',
          value: 'sales'
        },
        {
          label: 'Newest',
          value: 'shelfTime'
        },
        {
          label: 'Price Low-High',
          value: 'low'
        },
        {
          label: 'Price High-Low',
          value: 'high'
        }
      ],
      products: {
        data: productsData.data
      },
      active: {
        products: [],
        brand: [],
        color: [],
        memory: [],
        connection: [],
        productsType: []
      },
      pagination: {
        currentPage: 1,
        display: 8
      },
      filterProducts: {
        type: {
          Products: {
            open: true,
            select: []
          },
          Brand: {
            open: false,
            select: []
          },
          Color: {
            open: true,
            select: [],
            data: [
              {
                image: 'statics/mobileImages/search/color/black.png',
                name: 'Black'
              },
              {
                image: 'statics/mobileImages/search/color/blue.png',
                name: 'Blue'
              },
              {
                image: 'statics/mobileImages/search/color/brown.png',
                name: 'Brown'
              },
              {
                image: 'statics/mobileImages/search/color/basil.png',
                name: 'Basil'
              },
              {
                image: 'statics/mobileImages/search/color/gray.png',
                name: 'Gray'
              },
              {
                image: 'statics/mobileImages/search/color/mixed.png',
                name: 'Mixed'
              },
              {
                image: 'statics/mobileImages/search/color/orange.png',
                name: 'Orange'
              },
              {
                image: 'statics/mobileImages/search/color/pink.png',
                name: 'Pink'
              },
              {
                image: 'statics/mobileImages/search/color/red.png',
                name: 'Red'
              },
              {
                image: 'statics/mobileImages/search/color/white.png',
                name: 'White'
              },
              {
                image: 'statics/mobileImages/search/color/yellow.png',
                name: 'Yellow'
              }
            ]
          },
          Memory: {
            open: false,
            select: []
          },
          Connection: {
            open: false,
            select: []
          },
          ProductType: {
            open: false,
            select: []
          }
        }
      }
    }
  },
  computed: {
    total: function () {
      let display = this.pagination.display
      let length = this.products.data.length
      return Math.ceil(length / display)
    }
  },
  mounted: function () {
    if (this.$route.query.key || this.$route.query.key === '') {
      this.filterKey = this.$route.query.key
      this.filterProduct()
    }
    if (this.$route.query.type || this.$route.query.type === '') {
      this.filterType = this.$route.query.type
      this.pushActive(this.filterType, 'products')
    }
  },
  methods: {
    contrast (index) {
      console.log('这是个对比方法')
      this.products.data[index].myClick = true
    },
    refresher (index, done) {
      if (this.pagination.currentPage >= Math.ceil(this.products.data.length / this.pagination.display)) {
        done()
        return
      }
      setTimeout(function () {
        this.pagination.currentPage++
        done()
      }.bind(this), 1600)
    },
    jump (to) {
      this.$router.push(to)
    },
    compare (index) {
      console.log(index)
    },
    collection (index) {
      this.products.data[index].collection = !this.products.data[index].collection
    },
    addPage () {
      let currentPage = this.pagination.currentPage
      let total = this.total
      this.pagination.currentPage = currentPage++ >= total ? total : currentPage
    },
    subPage () {
      let currentPage = this.pagination.currentPage
      this.pagination.currentPage = currentPage-- <= 1 ? 1 : currentPage
    },
    reset () {
      this.active = {
        products: [],
        brand: [],
        color: [],
        memory: [],
        connection: [],
        productsType: []
      }
      this.products.data = productsData.data
      // this.$router.push('/Market/Search')
      // this.open = false
    },
    pushActive (val, key) {
      let index = this.active[key].indexOf(val)
      // if (key === 'products') {
      //   this.$router.push({path: '/Market/Search', query: {type: val}})
      // }
      if (key === 'productsType') {
        if (val === 'All Cases') {
          if (this.active.productsType.length === 7) {
            this.active.productsType = []
          }
          else {
            this.active.productsType = ['All Cases', 'Cases & Covers', 'Headphones', 'Sperkers', 'Snap On Cases', 'Charges', 'Batteries']
          }
        }
        else if (this.active.productsType.length === 5 && index < 0) {
          this.active.productsType = ['All Cases', 'Cases & Covers', 'Headphones', 'Sperkers', 'Snap On Cases', 'Charges', 'Batteries']
        }
        else if (this.active.productsType.length < 6) {
          if (index >= 0) {
            this.active[key].splice(index, 1)
          }
          else {
            this.active[key].push(val)
          }
        }
        else if (this.active.productsType.length === 7) {
          this.active[key].splice(index, 1)
          let _index = this.active[key].indexOf('All Cases')
          this.active[key].splice(_index, 1)
        }
      }
      else {
        if (index >= 0) {
          this.active[key].splice(index, 1)
        }
        else {
          this.active[key].push(val)
        }
      }
      this.filterProduct()
    },
    filterProduct () {
      let allData = productsData.data
      let _data = productsData.data
      let dataTemp = []
      // console.log(_data)
      if (this.filterKey || this.filterKey === '') {
        allData = allData.filter(function (item) {
          let state = false
          for (let key in item) {
            if (((item[key].toString()).toLowerCase()).indexOf((this.filterKey.toString()).toLowerCase()) >= 0) {
              state = true
            }
          }
          return state
        }.bind(this))
        _data = allData
      }
      // if (this.filterType || this.filterType === '') {
      //   allData = allData.filter(function (item) {
      //     let state = false
      //     for (let key in item) {
      //       if (((item[key].toString()).toLowerCase()).indexOf((this.filterType.toString()).toLowerCase()) >= 0) {
      //         state = true
      //       }
      //     }
      //     return state
      //   }.bind(this))
      //   _data = allData
      // }
      // 过滤
      if (this.active.products.length > 0) {
        for (let k in this.active.products) {
          _data = allData.filter(function (item) {
            return item.type.toLowerCase() === this.active.products[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      if (this.active.brand.length > 0) {
        for (let k in this.active.brand) {
          _data = allData.filter(function (item) {
            return item.brand.toLowerCase() === this.active.brand[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      if (this.active.color.length > 0) {
        for (let k in this.active.color) {
          _data = allData.filter(function (item) {
            return item.color.toLowerCase() === this.active.color[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      if (this.active.memory.length > 0) {
        for (let k in this.active.memory) {
          _data = allData.filter(function (item) {
            return item.memory.toLowerCase() === this.active.memory[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      if (this.active.connection.length > 0) {
        for (let k in this.active.connection) {
          _data = allData.filter(function (item) {
            return item.connection.toLowerCase() === this.active.connection[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      if (this.active.productsType.length > 0) {
        for (let k in this.active.productsType) {
          _data = allData.filter(function (item) {
            return item.productsType.toLowerCase() === this.active.productsType[k].toLowerCase()
          }.bind(this))
          for (let i in _data) {
            if (dataTemp.indexOf(_data[i]) < 0) {
              dataTemp.push(_data[i])
            }
          }
        }
      }
      // console.log(dataTemp)
      let run = false
      for (let r in this.active) {
        if (this.active[r].length > 0) {
          run = true
        }
      }
      if (run) {
        _data = dataTemp
      }
      // 排序
      if (this.sortType === 'low') _data = _.orderBy(_data, 'price', 'asc')
      else if (this.sortType === 'high') _data = _.orderBy(_data, 'price', 'desc')
      else if (this.sortType === 'shelfTime') _data = _.orderBy(_data, 'shelfTime', 'desc')
      else if (this.sortType === 'name') _data = _.orderBy(_data, 'name', 'asc')
      else if (this.sortType === 'pop') _data = _.orderBy(_data, 'pop', 'desc')
      else if (this.sortType === 'sales') _data = _.orderBy(_data, 'pop', 'desc')
      this.products.data = _data
      this.open = false
      this.pagination.currentPage = 1
    }
  },
  watch: {
    sortType: function () {
      this.filterProduct()
    },
    $route: function (val) {
      this.reset()
      if (val.query.key || val.query.key === '') {
        this.filterKey = val.query.key
        this.filterProduct()
      }
      if (val.query.type || val.query.type === '') {
        this.filterType = val.query.type
        this.pushActive(this.filterType, 'products')
      }
    }
  }
}
</script>
