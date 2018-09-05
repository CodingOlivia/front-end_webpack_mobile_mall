<template>
  <div class="checkOutDiv">
    <div class="checkHr"><span></span></div>
    <div class="checkOutMain">
      <ul class="menu">
        <li>
          <router-link to="/Market/Checkout/Address" v-if="addressList.length > 0">
            <span class="left start">
              <i></i>
              <div>
                <span>
                  {{addressList[0].sex.value}}. {{addressList[0].firstName.value}} {{addressList[0].lastName.value}} / {{addressList[0].phone.value}}
                </span>
                <span>{{addressList[0].address.value}}</span>
              </div>
            </span>
            <span class="right"><span></span><i>></i></span>
          </router-link>
          <router-link to="/Market/Checkout/Address/Table" v-if="addressList.length === 0">
            <div class="address">
              <span>Add delivery address</span>
              <i></i>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/Market/Checkout">
            <span class="left">Shipping Provider</span>
            <span class="right"><span>shunfeng</span><i>></i></span>
          </router-link>
        </li>
        <li>
          <router-link to="/Market/Checkout">
            <span class="left">Delivery Mode</span>
            <span class="right"><span>Urgent</span><i>></i></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="checkShare row">
        <span class="left col-aoto">Share From</span>
        <span class="right col" v-if="shareFrom==''">
          <router-link to="/shareFrom"><span>Please enter</span><i>></i></router-link>
        </span>
        <span class="right col" v-else>
            <span>{{shareFrom}}</span>
        </span>
    </div>
    <div class="checkOutOrder">
      <ul class="main" v-for="items in checkOut.data">
        <li class="content" v-for="item in items.children">
          <div>
            <div class="left"><img :src="item.image" width="100%" height="100%"></div>
            <div class="right">
              <div><span class="attrName">{{item.name}}</span><span class="attrNumber">x {{item.number}}</span></div>
              <div><span class="attrPrice">${{item.price.toFixed(2)+item.unit}}<span v-if="item.originalPrice">${{item.originalPrice.toFixed(2)+item.unit}}</span></span><span class="attrType" v-if="false">{{item.type}}</span></div>
              <div><span class="attrMore"><span v-for="(value, attr) in item.more">{{attr}}: {{value}}</span></span></div>
            </div>
          </div>
        </li>
        <li class="bottom">
          <div>
            <div class="left">
              <div class="activeIcon" v-for="installment in items.installments" v-if="items.installments.length>0&&installment.check">
                <span>installment</span>
              </div>
            </div>
            <div class="right">
              <div class="priceInfos">
                <div v-for="(val, key) in items.priceInfos">
                  <span>{{key}}:</span>
                  <span v-if="val<0">-${{Math.abs(val).toFixed(2)}}</span>
                  <span v-if="val>=0">${{val.toFixed(2)}}</span>
                </div>
              </div>
              <div class="priceTotal">${{items.total.toFixed(2)}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="checkOutInvoiceInfo">
      <div class="title">
        <span>Invoice Info</span>
        <span><q-toggle color="secondary" v-model="InvoiceInfo.checked" /></span>
      </div>
      <div class="text">
        <input type="text" placeholder="Enter Invoice Title">
      </div>
      <div class="selection">
        <!-- <q-dialog-select
          v-model="select"
          :options="options"
        /> -->
        <div class="mobile-select row items-center" @click="showDrop(selectOptions.Funds,'Funds Kind','Funds')">
            <div class="col">
              {{selectOptions.Funds.selectLabel}}
              <input v-model="selectOptions.Funds.select"  type="hidden" />
            </div>
            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
          </div>
      </div>
    </div>
    <div class="checkOutBuyerMessage">
      <div class="title">
        <span>Buyer Message</span>
        <span></span>
      </div>
      <div class="text">
        <textarea v-model="BuyerMessage.text" placeholder="Leave a message to the seller" maxlength="200"></textarea>
        <span>{{BuyerMessage.text.length}} / 200</span>
      </div>
    </div>
    <div class="checkOutTotal">
      <div v-for="(val, key) in Total"><span>{{key}}:</span><span v-if="val<0">-${{Math.abs(val).toFixed(2)}}</span><span v-if="val>=0">${{val.toFixed(2)}}</span></div>
    </div>
    <div class="checkOutProvision">
      <div><i v-bind:class="{'active':provision.checked}" @click="provision.checked=!provision.checked">check</i><span>I agree the <span class="jump">Tems & Conditions</span></span></div>
    </div>
    <div class="payBtn">
      <div class="left">
        <span>Total:</span>
        <span class="total">${{'1161.00'}}</span>
      </div>
      <div class="right">
        <router-link to="/Market/payment">SUBMIT</router-link>
      </div>
    </div>
     <q-modal ref="modifyModal" content-css="padding: 50px"  position="bottom">
         <div class="mobile-select-model">
               <div class="mobile-select-title">{{selectIndex.title}}
                   <span class="model-select-close" @click="$refs.modifyModal.close()"></span>
               </div>
               <div class="mobile-select-con">
                   <div class="mobile-select-item " :class="{'active':selectIndex.select==item.value}"  v-for="(item,index) in selectIndex.options" @click="setData(item)"   >{{item.label}}</div>
               </div>
          </div>
    </q-modal>
  </div>
</template>

<script>
import {
  QToggle,
  QDialogSelect,
  QModal
} from 'quasar'
export default {
  components: {
    QToggle,
    QDialogSelect,
    QModal
  },
  data () {
    return {
       shareFrom:'',
       addressList: [
        {
          firstName: {
            active: false,
            value: 'Avery'
          },
          lastName: {
            active: false,
            value: 'Tian'
          },
          sex: {
            active: false,
            value: 'Ms'
          },
          phone: {
            active: false,
            value: '18688082158'
          },
          address: {
            active: false,
            value: '219 University Ave, Palo Alto, CA 94301'
          },
          street: {
            active: false,
            value: ''
          },
          zipcode: {
            active: false,
            value: ''
          },
          default: {
            active: false,
            value: true
          },
          save: true
        },
        {
          firstName: {
            active: false,
            value: 'Avery'
          },
          lastName: {
            active: false,
            value: 'Tian'
          },
          sex: {
            active: false,
            value: 'Ms'
          },
          phone: {
            active: false,
            value: '18688082158'
          },
          address: {
            active: false,
            value: '306 University Ave, Palo Alto, CA 94301'
          },
          street: {
            active: false,
            value: ''
          },
          zipcode: {
            active: false,
            value: ''
          },
          default: {
            active: false,
            value: false
          },
          save: true
        }
      ],
      invoice: {
        active: false
      },
      selectIndex:{
         selectData:'',
         select: '0',
         selectLabel:'',
         title:'',
         options: []
      },
      checkOut: {
        data: [
          {
            isCombo: true,
            children: [
              {
                image: 'statics/mobileImages/checkOut/1.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: 1290,
                unit: '',
                originalPrice: '',
                type: 'Device',
                more: {
                  memory: '256 GB',
                  primary: '198 Bundle',
                  color: 'Space gray'
                }
              },
              {
                image: 'statics/mobileImages/checkOut/2.jpg',
                name: '198 Bundle',
                number: 1,
                price: 198,
                unit: ' /mo.',
                originalPrice: '',
                type: 'Plans',
                more: {
                  voice: '300min',
                  SMS: 'unlimited',
                  data: '20GB'
                }
              }
            ],
            installments: [],
            priceInfos: {
              discount: -4,
              tax: 14,
              monthly: 198,
              upfront: 1149
            },
            total: 1357
          },
          {
            isCombo: false,
            children: [
              {
                image: 'statics/mobileImages/checkOut/1.jpg',
                name: 'iPhone X 256GB Silver',
                number: 1,
                price: 1149,
                unit: '',
                originalPrice: 1149,
                type: 'Phone',
                more: {
                  memory: '256 GB',
                  primary: '198 Bundle',
                  color: 'Space gray',
                  'Installment Periods': '12'
                }
              }
            ],
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
            priceInfos: {
              discount: 0,
              tax: 0,
              monthly: 125,
              poundage: 351
            },
            total: 1500
          },
          {
            isCombo: false,
            children: [
              {
                image: 'statics/mobileImages/checkOut/3.jpg',
                name: 'Plwats Please E-Book',
                number: 1,
                price: 12,
                unit: '',
                originalPrice: '',
                type: 'E-books',
                more: {
                  author: 'Potter, Beatrix',
                  publisher: 'Lerner Publishing Group'
                }
              }
            ],
            installments: [],
            priceInfos: {
              discount: 1,
              tax: 2
            },
            total: 13
          }
        ]
      },
      InvoiceInfo: {
        checked: true
      },
      select: 'fk1',
      options: [
        {
          label: 'Funds Kind',
          value: 'fk1'
        },
        {
          label: 'Funds Kind 1',
          value: 'fk2'
        },
        {
          label: 'Funds Kind 2',
          value: 'fk3'
        },
        {
          label: 'Funds Kind 3',
          value: 'fk4'
        },
        {
          label: 'Funds Kind 4',
          value: 'fk5'
        }
      ],
      selectOptions: {
        Funds: {
          select: '0',
          selectLabel:'Funds Kind',
          options: [
            {
              label: 'Funds Kind',
              value: '0'
            },
            {
              label: 'Funds Kind1',
              value: '1'
            },
            {
              label: 'Funds Kind2',
              value: '2'
            },
            {
              label: 'Funds Kind3',
              value: '3'
            }
          ]
        }
      },
      BuyerMessage: {
        text: ''
      },
      provision: {
        checked: true
      },
      Total: {
        'Bag Subtotal': 2870,
        'Freght': 323,
        'Fee Shipping': 0,
        'Tax': 16,
        'Account Decucted': -5
      }
    }
  },
  methods:{
     showDrop(data,title,name){
      this.selectIndex.options=data.options;
      this.selectIndex.select=data.select;
      this.selectIndex.title=title;
      this.selectIndex.selectData=name;
      this.selectIndex.selectLabel=data.selectIndex;
      //this.opened=true;
      this.$refs.modifyModal.open();
    },
    setData(item){
       this.selectIndex.select=item.value;
       this.selectIndex.selectLabel=item.label;
       this.selectOptions[this.selectIndex.selectData].select=item.value;
       this.selectOptions[this.selectIndex.selectData].selectLabel=item.label;
       //this.opened=false;
       this.$refs.modifyModal.close()
    }
  }
}
</script>
