<template>
  <div class="orderDiv">
    <div class="order">
      <div class="main">
        <div class="top">
          <ul>
            <li class="active">All Orders</li>
            <li>Awaiting Payment</li>
            <li>Awaiting Approval</li>
          </ul>
        </div>
        <div class="ordersBigBox">
          <div class="orderBox shadow" v-show="orders.running.length>0">
            <div v-for="items, i in orders.running">
              <div class="heard">
                <div>Order ID:<span>{{items.uuid}}</span></div>
                <i @click="del(i)">del</i>
              </div>
              <div class="body" v-if="items.data.length>1">
                <div class="imgDiv  col">
                  <img v-for="(item, index) in items.data" v-if="index<3" :src="item.image">
                </div>
                <div class="icoDiv"><i></i></div>
              </div>
              <div class="body" v-if="items.data.length===1" v-for="item in items.data">
                <div class="imgDiv">
                  <img :src="item.image">
                </div>
                <div class="attrDiv">
                  <span>{{item.attr.name}}</span>
                  <span>Color:{{item.attr.color}}</span>
                </div>
                <div class="icoDiv"><i></i></div>
              </div>
            </div>
            <div class="row orderMath">
                <div class="col">
                    {{orders.running.length}}  product in total
                </div>
                <div class="col-auto">
                   Total Recievable:<b>$85.20</b>
                </div>
            </div>
            <div class="footer">
              <span>Awaiting payment</span>
                <div><router-link to="/Market/checkOut" style="color: $all-color-2">PAY NOW</router-link></div>
            </div>
          </div>
          <div class="orderBox" v-show="orders.pass.length>0">
            <div v-for="items in orders.pass">
              <div class="heard">
                <div>Order ID:<span>{{items.uuid}}</span></div>
                <i class="none Cancelled">Cancelled</i>
              </div>
              <div class="body" v-if="items.data.length>1">
                <div class="imgDiv">
                  <img v-for="(item, index) in items.data" v-if="index<3" :src="item.image">
                </div>
                <div class="icoDiv"><i></i></div>
              </div>
              <div class="body" v-if="items.data.length===1" v-for="item in items.data">
                <div class="imgDiv">
                  <img :src="item.image">
                  <div class="attrDiv">
                    <span class="attrName">{{item.attr.name}}</span>
                    <span class="attrColor">Color:<span style="margin-left: .1rem;">{{item.attr.color}}</span></span>
                  </div>
                </div>
                <div class="icoDiv"><i></i></div>
              </div>
            </div>
             <div class="row orderMath">
                <div class="col">
                    {{orders.running.length}}  product in total
                </div>
                <div class="col-auto">
                   Total Recievable:<b>$85.20</b>
                </div>
            </div>
            <div class="footer">
              <span>The order has been cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: {
        running: [
          {
            uuid: '1000016000000003',
            state: 'awaiting',
            data: [
              {
                image: 'statics/mobileImages/order/1.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              },
              {
                image: 'statics/mobileImages/order/2.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              },
              {
                image: 'statics/mobileImages/order/3.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              }
            ]
          }
        ],
        pass: [
          {
            uuid: '1000016000000005',
            state: 'cancelled',
            data: [
              {
                image: 'statics/mobileImages/order/4.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: 'Huawei Watch 2 Pro....',
                  price: 1290,
                  color: 'Space gray',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    jump (val) {
      this.openGo = val
    },
    del (index) {
      console.log(index)
      let item = this.orders.running[index]
      this.orders.running.splice(index, 1)
      this.orders.pass.unshift(item)
      // console.log(this.orders.running.splice(index, 1))
    },
    handleBlur () {
      for (let _type in this.state) {
        for (let _name in this.state[_type]) {
          this.state[_type][_name].blur = true
          // for (let _attr in this.state[_type][_name]) {
          //   this.state[_type][_name].blur = false
          // }
        }
      }
    }
  },
  watch: {
    openGo: function (val) {
      // this.dispatchData(val)
      this.socket.$emit('open-go', val)
    }
  }
}
</script>
