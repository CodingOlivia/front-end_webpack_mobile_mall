<template>
  <div class="shoppingBag">
    <div class="shoppingBag-Box1">
      <div>
      </div>
    </div>
    <!-- 空购物车 start-->
    <div class="mobileEmptyBox" v-if="packageAll.length === 0 && itemAll.length === 0 && itemAllOut.length === 0">
      <div class="mobileEmpty1">
        <span>Your Bag is empty.</span>
      </div>
      <div class="mobileEmpty2">
        <i></i>
      </div>
      <div class="mobileEmpty3">
        <div class="mobileEmpty3_Btn" @click="jump('/Market/Search')">
          <span>Continue Shopping</span>
        </div>
      </div>
    </div>
    <!-- 空购物车 end-->
    <div class="shoppingBag-content">
      <div class="shoppingBag-Box-Over">
        <div class="shoppingBag-Box-All" v-if="packageAll.length > 0" v-for="(packdata, index) in packageAll" v-bind:class="{'delete':packdata.delState, 'hide':packdata.hide}" @touchstart="deletestart" @touchend="deleteend(index, 'packageAll')">
          <div class="shoppingBag-Box2 transition">
            <div class="shoppingBag-pro" v-for="item in packdata.packageItem">
              <div class="img">
                <img :src="item.packageItemImgUrl" style="width: 1.6rem; height:1.6rem" />
              </div>
              <div class="text">
                <div class="name-and-num">
                  <span>{{item.packageItemName}}</span>
                  <span style="color: #b2b2b2">× {{item.packageItemNumber}}</span>
                </div>
                <div class="price-and-type">
                  <span>${{item.packageItemPrice.toFixed(2)}}<span v-if="item.packageItemOriginalPrice" style="margin-left: .16rem;color: #b2b2b2;text-decoration: line-through;">${{item.packageItemOriginalPrice.toFixed(2)}}</span></span>
                  <span style="color: #b2b2b2; margin-left: .16rem; font-weight: 400">{{item.packageItemType}}</span>
                </div>
                <span style="color: #666; font-size: .24rem; font-weight: 400">{{item.packageItemDetail1}}</span>
              </div>
              <div class="div-i">
                <i></i>
              </div>
            </div>
            <div class="shoppingBag-pro-footer">
              <div class="footer-left-L">
                <span>Upfront: <span style="color: $all-color-1">${{packdata.packageUpfrontTotal.toFixed(2)}}</span></span>
                <span>Monthly: <span style="color: $all-color-1">${{packdata.packageMonthlyTotal.toFixed(2)}}</span></span>
              </div>
              <div class="footer-right-R">
                <span>× {{packdata.number}}</span>
              </div>
              <div class="div-i">
                <i v-bind:class="{'active':packdata.check}" @click="packdata.check=!packdata.check;handleCheckAll()"></i>
              </div>
            </div>
          </div>
          <div class="shoppingBag-del transition" @click="del(index, 'packageAll')"><i></i></div>
        </div>
      </div>
      <div class="shoppingBag-Box-Over">
        <div class="shoppingBag-Box-All" v-if="itemAll.length>0" v-for="(item, index) in itemAll" v-bind:class="{'delete':item.delState, 'hide':item.hide}" @touchstart="deletestart" @touchend="deleteend(index, 'itemAll')">
          <div class="shoppingBag-Box3 m-ytx-relative transition">
            <div class="shoppingBag-pro">
              <div class="img">
                <img :src="item.itemImgUrl" style="width: 1.6rem; height: 1.6rem">
              </div>
              <div class="text">
                <div class="name-and-num">
                  <span>{{item.itemName}}</span>
                  <!-- <span style="color: $all-color-3">× 1</span> -->
                </div>
                <div class="price-and-type">
                  <span>${{item.itemPrice.toFixed(2)}}<span v-if="item.itemOriginalPrice" style="margin-left: .16rem;color: #b2b2b2;text-decoration: line-through;">${{item.itemOriginalPrice.toFixed(2)}}</span></span>
                  <span style="color: #b2b2b2; margin-left: .16rem; font-weight: 400">{{item.itemType}}</span>
                </div>
                <span style="color: #666; font-size: .24rem; font-weight: 400">{{item.itemDetail1}}</span>
              </div>
              <div class="div-i">
                <i v-bind:class="{'active':item.check}" @click="item.check=!item.check;handleCheckAll()"></i>
              </div>
            </div>
            <div class="shoppingBag-pro-footer">
              <div class="shoppingBag-footer-left">
                <div class="itemNumber">
                  <button v-on:click="min(index)"><i v-bind:class="[item.itemNumber > 1 ? sub : sub2]"></i></button>
                  <input type="text" v-model="item.itemNumber" 
                    onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  
                    onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
                  />
                  <button v-on:click="add(index)"><i class="add"></i></button>
                </div>
              </div>
              <div class="shoppingBag-footer-right" v-for="installment in item.installments" v-if="item.installments.length>0&&installment.check">
                <div class="installmentDiv">
                  <div class="installment-type">
                    <div class="title">Installment</div>
                    <div class="type"><span>×{{installment.type}}</span><i>right</i></div>
                  </div>
                  <div class="installment-poundage">
                    <span>Poundage:</span>
                    <span>${{installment.poundage.toFixed(2)}}</span>
                  </div>
                  <div class="installment-surtotal">
                    <span>Surtotal:</span>
                    <span>${{installment.surtotal.toFixed(2)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shoppingBag-del2 transition" @click="del(index, 'itemAll')"><i></i></div>
        </div>
      </div>
      <div class="shoppingBag-Box-Over">
        <div class="shoppingBag-Box-All soldOut" v-if="itemAllOut.length>0" v-for="(item, index) in itemAllOut" v-bind:class="{'delete':item.delState, 'hide':item.hide}" @touchstart="deletestart" @touchend="deleteend(index, 'itemAllOut')">
          <div class="shoppingBag-Box3 transition">
            <div class="shoppingBag-pro">
              <div class="img">
                <img :src="item.itemImgUrl" style="width: 1.6rem; height: 1.6rem">
                <div class="SoldOut">
                  <span>Sold Out</span>
                </div>
              </div>
              <div class="text">
                <div class="name-and-num">
                  <span>{{item.itemName}}</span>
                  <!-- <span style="color: $all-color-3">× 1</span> -->
                </div>
                <div class="price-and-type">
                  <span>${{item.itemPrice.toFixed(2)}}</span>
                  <span style="color: $all-color-3; margin-left: .16rem; font-weight: 400">{{item.itemType}}</span>
                </div>
                <span style="color: #666; font-size: .24rem; font-weight: 400">{{item.itemDetail1}}</span>
              </div>
              <div class="div-i">
                <i v-bind:class="{'active':item.check}" @click="item.check=!item.check;handleCheckAll()"></i>
                <div class="shade">
                </div>
              </div>
            </div>
            <div class="shoppingBag-pro-footer">
              <div class="shoppingBag-footer-left">
                <div class="itemNumber">
                  <button  v-on:click="min(index)"><i v-bind:class="[item.itemNumber > 1 ? sub : sub2]"></i></button>
                  <input type="text" v-model="item.itemNumber" 
                    onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  
                    onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
                  />
                  <button  v-on:click="add(index)"><i class="add"></i></button>
                </div>
              </div>
              <div class="shoppingBag-footer-right" v-for="installment in item.installments" v-if="item.installments.length>0&&installment.check">
                <div class="installmentDiv">
                  <div class="installment-type">
                    <div class="title">Installment</div>
                    <div class="type"><span>×{{installment.type}}</span><i>right</i></div>
                  </div>
                  <div class="installment-poundage">
                    <span>Poundage:</span>
                    <span>${{installment.poundage.toFixed(2)}}</span>
                  </div>
                  <div class="installment-surtotal">
                    <span>Surtotal:</span>
                    <span>${{installment.surtotal.toFixed(2)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shade">
          </div>
          <div class="shoppingBag-del2 transition" @click="del(index, 'itemAllOut')"><i></i></div>
        </div>
      </div>
    </div>
    <div class="shoppingBag-Box4">
      <div class="shoppingBag-Box5">
        <div class="div-i">
          <i v-bind:class="{'active':allCheck}" @click="handleEventCheck"></i>
        </div>
        <span>Check All ({{packageAll.length+itemAll.length}})</span>
      </div>
      <div class="shoppingBag-Box6">
        <div class="shoppingBag-Box4-left">
          <div class="text">
            <span style="color: #666">Upfront</span>
            <span>$1149.00</span>
          </div>
        </div>
        <div class="shoppingBag-Box4-middle">
          <div class="text">
            <span style="color: #666">Monthly</span>
            <span>$1396.00</span>
          </div>
        </div>
        <div class="shoppingBag-Box4-right" @click="jump('/Market/Checkout')">
          <span>Check Out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QIcon
} from 'quasar'
// import allData from 'data/allData.json'
export default {
  props: ['searchString'],
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon
  },
  data () {
    return {
      minButton: true,
      sub: 'sub',
      sub2: 'sub2',
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
      // allData: allData,
      packageAll: [
        {
          packageType: 'Mobile Kit',
          packageUpfrontTotal: 1288,
          packageMonthlyTotal: 396,
          number: 1,
          delState: false,
          hide: false,
          check: true,
          packageItem: [
            {
              packageItemImgUrl: './statics/mobileImages/shoppingBag/pic1.png',
              packageItemName: 'Apple iPhone X + 198 Bundle',
              packageItemPrice: 1149,
              packageItemOriginalPrice: 1200,
              packageItemUpfront: 1149,
              packageItemMonthly: 0,
              packageItemNumber: 1,
              packageItemType: 'Device',
              packageItemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
              packageItemDetail2: 'Delivery: In Stock'
            },
            {
              packageItemImgUrl: './statics/mobileImages/shoppingBag/pic2.png',
              packageItemName: '198 Bundle',
              packageItemPrice: 198,
              packageItemUpfront: 0,
              packageItemMonthly: 198,
              packageItemNumber: 1,
              packageItemType: 'Plan',
              packageItemDetail1: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
              packageItemDetail2: ''
            }
          ]
        }
      ],
      itemAll: [
        {
          itemImgUrl: './statics/mobileImages/shoppingBag/pic1.png',
          itemName: 'Apple iPhone X + 198 Bundle',
          itemPrice: 1149,
          itemOriginalPrice: 1200,
          itemUpfront: 1149,
          itemMonthly: 0,
          itemNumber: 1,
          disabled: false,
          check: true,
          itemType: 'Device',
          itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
          itemDetail2: 'Delivery: In Stock',
          installments: [
            {
              check: false,
              type: 3,
              poundage: 351,
              surtotal: 1500
            },
            {
              check: false,
              type: 6,
              poundage: 351,
              surtotal: 1500
            },
            {
              check: true,
              type: 12,
              poundage: 351,
              surtotal: 1500
            }
          ],
          delState: false,
          hide: false
        },
        {
          itemImgUrl: './statics/mobileImages/shoppingBag/pic3.png',
          itemName: 'Plwats Please E-Book',
          itemPrice: 12,
          itemOriginalPrice: '',
          itemUpfront: 1149,
          itemMonthly: 0,
          itemNumber: 1,
          disabled: false,
          check: true,
          itemType: 'E-books',
          itemDetail1: 'Author: Potter, Beatrix /Publisher: Lerner Publishing Group',
          itemDetail2: 'Delivery: In Stock',
          installments: [],
          delState: false,
          hide: false
        }
      ],
      itemAllOut: [
        {
          itemImgUrl: './statics/mobileImages/shoppingBag/pic1.png',
          itemName: 'Apple iPhone X + 198 Bundle',
          itemPrice: 1149,
          itemUpfront: 1149,
          itemMonthly: 0,
          itemNumber: 1,
          disabled: false,
          check: true,
          itemType: 'Device',
          itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
          itemDetail2: 'Delivery: In Stock',
          installments: [],
          delState: false,
          hide: false
        }
      ],
      allCheck: true,
      upfront: 0,
      monthly: 0
    }
  },
  mounted: function () {
    let a = true
    this.packageAll.map((item) => {
      if (!item.check) a = false
    })
    this.itemAll.map((item) => {
      if (!item.check) a = false
    })
    this.itemAllOut.map((item) => {
      if (!item.check) a = false
    })
    this.allCheck = a
  },
  methods: {
    handleEventCheck: function () {
      this.allCheck = !this.allCheck
      this.packageAll.map((item) => {
        item.check = this.allCheck
      })
      this.itemAll.map((item) => {
        item.check = this.allCheck
      })
      this.itemAllOut.map((item) => {
        item.check = this.allCheck
      })
    },
    handleCheckAll: function () {
      let a = true
      this.packageAll.map((item) => {
        if (!item.check) a = false
      })
      this.itemAll.map((item) => {
        if (!item.check) a = false
      })
      this.itemAllOut.map((item) => {
        if (!item.check) a = false
      })
      this.allCheck = a
    },
    add: function (index) {
      this.itemAll[index].itemNumber = parseInt(this.itemAll[index].itemNumber) + 1
    },
    min: function (index) {
      if (this.itemAll[index].itemNumber > 1) {
        this.itemAll[index].itemNumber = parseInt(this.itemAll[index].itemNumber) - 1
      }
      // else {
      //   this.itemAll[index].itemNumber = 1
      //   this.minButton = false
      //   return this.minButton
      // }
    },
    deletestart () {
      this.touch.start.x = event.changedTouches[0].clientX
      this.touch.start.y = event.changedTouches[0].clientY
      // console.log(this.touch)
    },
    deleteend (index, type) {
      this.touch.end.x = event.changedTouches[0].clientX
      this.touch.end.y = event.changedTouches[0].clientY
      if (this.touch.start.x - this.touch.end.x >= 50) {
        this[type][index].delState = true
      }
      else {
        this[type][index].delState = false
      }
    },
    del (index, type) {
      // this[type][index].hide = true
      this[type].splice(index, 1)
      // this[type].splice(index, 1)
    },
    jump (to) {
      this.$router.push(to)
    },
    mathTotal () {
      this.upfront = 0
      this.monthly = 0
      for (var pa = 0; pa < this.packageAll.length; pa++) {
        this.packageAll[pa].packageUpfrontTotal = 0
        this.packageAll[pa].packageMonthlyTotal = 0
        for (var pi = 0; pi < this.packageAll[pa].packageItem.length; pi++) {
          this.packageAll[pa].packageUpfrontTotal += this.packageAll[pa].packageItem[pi].packageItemUpfront * this.packageAll[pa].packageItem[pi].packageItemNumber
          this.packageAll[pa].packageMonthlyTotal += this.packageAll[pa].packageItem[pi].packageItemMonthly * this.packageAll[pa].packageItem[pi].packageItemNumber
        }
        this.upfront += this.packageAll[pa].packageUpfrontTotal
        this.monthly += this.packageAll[pa].packageMonthlyTotal
      }
      for (var i = 0; i < this.itemAll.length; i++) {
        this.upfront += this.itemAll[i].itemUpfront * this.itemAll[i].itemNumber
        this.monthly += this.itemAll[i].itemMonthly * this.itemAll[i].itemNumber
      }
    },
    removePackage (index) {
      console.log(index)
      this.packageAll.splice(index, 1)
      this.mathTotal()
    },
    removeItem (index) {
      this.itemAll.splice(index, 1)
      this.mathTotal()
    },
    itemNumberChange () {
      this.mathTotal()
    },
    payment () {
      this.$router.push('/Market/Checkout')
    },
    reduceChangeNum (index, realNum, disab) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          realNum = realNum - 1
          if (realNum <= 0) {
            realNum = 0
            this.itemAll[i].disabled = true
          }
          else {
            this.itemAll[i].disabled = false
          }
          this.itemAll[i].itemNumber = realNum
        }
      }
    },
    addChangeNum (index, realNum) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          this.itemAll[i].disabled = false
          realNum = realNum + 1
          this.itemAll[i].itemNumber = realNum
        }
      }
    }
  },
  watch: {
    searchString: {
      handler (curVal, oldVal) {
        console.log(this.$route.query.search)
        if (this.$route.query.search !== '' && this.$route.query.search !== null && this.$route.query.search !== undefined) {
          this.current = 1
          // console.log(this.offeringsInit)
          var offerings = this.offeringsInit.filter(function (item) {
            return Object.keys(item).some(function (key) {
              // console.log(item[key])
              return String(item['name']).toLowerCase().indexOf(curVal.toLowerCase()) > -1
            })
          })
          this.offerings = offerings
        }
        else this.offerings = this.offeringsInit
      },
      deep: true
    }
  }
}
</script>

