<template>
      <div class="Exchange-mobile main">
        <div class="Exchange-inner">
            <!-- <div class="Exchange-left"> -->
                <!-- <q-field class="field-border">
                    <q-input float-label="Mobile Number" v-model="number.mobile" />
                </q-field> -->
                <!-- <q-field class="field-inp m-right--small">
                   <label>Mobile Number</label>
                   <q-input class="field-view-inp" stack-label="" v-model="number.mobile" />
                </q-field> -->
                <div class="mobile-y-inp mb16">
                  <input type="text" placeholder="First Name" v-model="number.mobile">
                  <!-- <span class="help is-danger">12112312312313123</span> -->
                </div>
                <div class="mobile-y-inp ">
                  <input type="text" placeholder="Confirm Mobile Number" v-model="number.confirm">
                  <!-- <span class="help is-danger">12112312312313123</span> -->
                </div>
                <!-- <q-field class="field-inp m-right--small">
                   <label>Confirm Mobile Number</label>
                   <q-input class="field-view-inp" stack-label="" v-model="number.confirm" />
                </q-field> -->
                <!-- <q-field class="field-border">
                    <q-input float-label="Confirm Mobile Number" v-model="number.confirm" />
                </q-field> -->
                <div class="cardSelect-title">Amount</div>
                <div class="cardList">
                    <div v-for="(item,index) in dataCard" class=" xxs-col-4" :class="{'active':selectIndex==index}" @click="selectIndex=index">
                      <span>{{item.label}}</span>
                    </div>
                    <div class="cardInp   xxs-col-4" :class="{'active':selectIndex==-1}" @click="selectIndex=-1">
                      <span>
                          <div  class="row" >
                             <span class="col-auto">$</span>
                             <span class="col"><q-input placeholder="Other" class="inp-reset" v-model="inpPrice"/></span>
                          </div>
                      </span>
                      
                    </div>
                </div>
                <div class="confirm-bottom">
                  
                  <div class="row">
                      <div class="col-auto">
                         <div class="checkBox" :class="{'active':isAgree==true}" @click="isAgree=!isAgree">
                            <q-icon name="done"/>
                        </div>
                      </div>
                      <div class="col">
                         <div class="agree">I agree with  the <span @click="opened=true">Disclousure agreement</span></div>
                      </div>
                  </div>
                  <div class="btn disable">SUBMIT</div>
                </div>
            </div>
        <!-- </div> -->
        <q-modal v-model="opened" >
            <div class="model-title">
              CONFIRM YOUR INFORMATION
              <span class="model-close" @click="opened=false"></span>
            </div>

            <div class="model-mobile-center">
                <div class="m-bottom--small">
                    THE LEGAL AGREEMENTS SET OUT BELOW GOVERN YOUR USE OF THE ITUNES STORE, MAC APP
                    STORE, APP STORE, APP STORE FOR APPLE TV, IBOOKS STORE AND APPLE MUSIC SERVICES
                    ("SERVICES"). TO AGREE TO THESE TERMS, CLICK "AGREE." IF YOU DO NOT AGREE TO THESE
                    TERMS, DO NOT CLICK "AGREE," AND DO NOT USE THE SERVICES.
                </div>
                <div class="m-bottom--small">
                    A. TERMS OF SALE<br/>
                    PAYMENTS, TAXES, AND REFUND POLICY
                </div>
                <div class="m-bottom--small">
                    You agree that you will pay for all products you purchase through the Services, and that Apple may charge your payment method for any products purchased and for any additional amounts (including any taxes and late fees, as applicable) that may be accrued by or in connection with your Account.YOU ARE RESPONSIBLE FOR THE TIMELY PAYMENT OF ALL FEES AND FOR PROVIDING APPLE WITH A VALID PAYMENT METHOD FOR PAYMENT OF ALL FEES. For details of how purchases are billed please visit http://support.apple.com/kb/HT5582.
                </div>
                <div class="m-bottom--small font-14">
                    Your total price will include the price of the product plus any applicable tax; such tax is based on the bill-to address and the tax rate in effect at the time you download the product.
                </div>
                <div class="font-14">
                    If you sign up for an Account or use a Service covered by this Agreement on a non-Apple-branded device or computer, you may have access to only a limited set of Account or Service functionality. As a condition to accessing your Account or a Service on a non-Apple-branded device or computer, you agree to all relevant terms and conditions found in this Agreement, including, without limitation, all requirements for use of an Account or Service,
                </div>
            </div>
            <div class="model-mobile-footer">
                <div class="model-footer-inner">
                  <div class="model-footer-action row">
                      <span class="btn negative m-right--small">NOT ACCEPT</span>
                      <span class="btn ">ACCEPT</span>
                  </div>
                </div>
            </div>
        </q-modal>
 
        
      </div>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QSearch,
  QField,
  QInput,
  QChipsInput,
  QTransition,
  QModal
} from 'quasar'
// import Recommendation from 'data/Recommendation.json'
// import commerce from 'data/commerce.json'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QSearch,
    QField,
    QInput,
    QChipsInput,
    QTransition,
    QModal
  },
  data () {
    return {
      opened:false,
      inpPrice: '',
      number: {
        mobile: '',
        confirm: '3470000108（Milan Italy）'
      },
      dataCard: [
        {
          label: '$5'
        },
        {
          label: '$10'
        },
        {
          label: '$15'
        },
        {
          label: '$20'
        },{
          label: '$30'
        },
        {
          label: '$50'
        },
        {
          label: '$100'
        }
      ],
      selectIndex: -2,
      isAgree: false
    }
  },
  methods: {
  }
}
</script>


