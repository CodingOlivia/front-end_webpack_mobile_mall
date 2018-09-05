<template>
  <div >
    <div class="filling-top">
         <div class="filling-top-title">Customer Basic Info</div>
         <div class="filling-top-detail">
           Add you contract details here,we will use this information to update you on this order or any incomplete order.
         </div>
    </div>
    <div class="fillingBox-mobile fillingBox-supplement m-ytx-m-none-top">
      <div class="main">
        <div class="deliveryDetails">
          <div class="contain">
            <div class="error-message row items-start justify-center">
               <span class="icon-warning "></span> 
               <span class="col-auto">Please fill in the information.</span>
            </div>
            <div class="panel">
              <div class="panel-title ">
                  Basic Info
              </div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1 error">
                          <input type="text"  v-model="newAddress.firstName.value" @focus="newAddress.firstName.active=true" @blur="newAddress.firstName.active=false" placeholder="First Name"><i v-if="newAddress.firstName.value.length>0&&newAddress.firstName.active" @click="newAddress.firstName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1 error">
                          <input type="text" v-model="newAddress.middleName.value" @focus="newAddress.middleName.active=true" @blur="newAddress.middleName.active=false" placeholder="Middle Name"><i v-if="newAddress.middleName.value.length>0&&newAddress.middleName.active" @click="newAddress.middleName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1 error">
                          <input type="text" v-model="newAddress.lastName.value" @focus="newAddress.lastName.active=true" @blur="newAddress.lastName.active=false" placeholder="Last Name"><i v-if="newAddress.lastName.value.length>0&&newAddress.lastName.active" @click="newAddress.lastName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp  m-top-1 "
                          :error="error4"
                          error-label="Please enter!"
                        >
                          <!-- <q-input class="field-view-inp" stack-label="" v-model="baseInfo[3]" /> -->
                          <q-datetime
                            class="field-view-inp "
                            stack-label=""
                            placeholder="Date of Birth"
                            :class="{'dateEmpty':baseInfo[0]==''}"
                            v-model="baseInfo[0]"
                        />
                        </q-field>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.contactNumber.value" @focus="newAddress.contactNumber.active=true" @blur="newAddress.contactNumber.active=false" placeholder="Contact Number"><i v-if="newAddress.contactNumber.value.length>0&&newAddress.contactNumber.active" @click="newAddress.contactNumber.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.emailAddress.value" @focus="newAddress.emailAddress.active=true" @blur="newAddress.emailAddress.active=false" placeholder="Email Address"><i v-if="newAddress.emailAddress.value.length>0&&newAddress.emailAddress.active" @click="newAddress.emailAddress.value=''">close</i>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-title address-title">
                  Address Info
                  <P class="panel-title-detail">Copy from customer info</p>
                  <div class="title-absolute-right">
                   
                    <span class="invoice"> <q-toggle v-model="check3" value='' /></span>
                  </div>
              </div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                       <div class="mobile-y-select m-top-1">
                          <div class=" row items-center" @click="showDrop(billOptions.state,'state','state',1)">
                            <div class="col">
                              <span class="text-black" v-if="billOptions.state.selectLabel!=''">{{billOptions.state.selectLabel}}</span>
                              <span class="text-grey-5" v-else>State</span>
                              <input v-model="billOptions.state.select"  type="hidden" />
                            </div>
                            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mobile-y-select m-top-1 error">
                          <div class=" row items-center" @click="showDrop(billOptions.Township,'Township','Township',1)">
                            <div class="col">
                              <span class="text-black" v-if="billOptions.Township.selectLabel!=''">{{billOptions.Township.selectLabel}}</span>
                              <span class="text-grey-5" v-else>Township</span>
                              <input v-model="billOptions.Township.select"  type="hidden" />
                            </div>
                            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-12">
                      <div class="mobile-y-select m-top-1">
                          <div class=" row items-center" @click="showDrop(billOptions.City,'City','City',1)">
                            <div class="col">
                              <span class="text-black" v-if="billOptions.City.selectLabel!=''">{{billOptions.City.selectLabel}}</span>
                              <span class="text-grey-5" v-else>City</span>
                              <input v-model="billOptions.City.select"  type="hidden" />
                            </div>
                            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12"></div>
                    <div class="col-12">
                       <div class="mobile-y-select m-top-1">
                          <div class=" row items-center" @click="showDrop(billOptions.Community,'Community','Community',1)">
                            <div class="col">
                              <span class="text-black" v-if="billOptions.Community.selectLabel!=''">{{billOptions.Community.selectLabel}}</span>
                              <span class="text-grey-5" v-else>Community (Colony)</span>
                              <input v-model="billOptions.Community.select"  type="hidden" />
                            </div>
                            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                       <div class="mobile-y-select m-top-1">
                          <div class=" row items-center" @click="showDrop(billOptions.Street,'Street','Street',1)">
                            <div class="col">
                              <span class="text-black" v-if="billOptions.Street.selectLabel!=''">{{billOptions.Street.selectLabel}}</span>
                              <span class="text-grey-5" v-else>Street</span>
                              <input v-model="billOptions.Street.select"  type="hidden" />
                            </div>
                            <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.code.value" @focus="newAddress.code.active=true" @blur="newAddress.code.active=false" placeholder="Postal Code"><i v-if="newAddress.code.value.length>0&&newAddress.code.active" @click="newAddress.code.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.exteranl.value" @focus="newAddress.exteranl.active=true" @blur="newAddress.exteranl.active=false" placeholder="External Number"><i v-if="newAddress.exteranl.value.length>0&&newAddress.exteranl.active" @click="newAddress.exteranl.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.internal.value" @focus="newAddress.internal.active=true" @blur="newAddress.internal.active=false" placeholder="Internal Number(Optional)"><i v-if="newAddress.internal.value.length>0&&newAddress.internal.active" @click="newAddress.internal.value=''">close</i>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="filling-mobile-footer">
          <div class="filling-footer ">
            <div class="btn" >SAVE & CONTINUE</div>
          </div>
       </div>
      </div>
      <q-modal ref="modifyModal" content-css="padding: 50px"  position="bottom">
         <div class="mobile-select-model">
               <div class="mobile-select-title">{{selectIndex.title}}
                   <span class="model-select-close" @click="$refs.modifyModal.close()"></span>
               </div>
               <div class="mobile-select-con">
                   <div class="mobile-select-item " :class="{'active':selectIndex.select==item.value}"  v-for="(item) in selectIndex.options" @click="setData(item)"   >{{item.label}}</div>
               </div>
          </div>
    </q-modal>
    </div>
   
</div>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QField,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon,
  QItemTile,
  QInput,
  QDatetime,
  QRadio,
  QToggle,
  QModal
} from 'quasar'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
    QInput,
    QDatetime,
    QRadio,
    QToggle,
    QModal
  },
  data () {
    return {
      isAgree: false,
      check3:false,
      step:1,
      radioIndex:0,
      group: '',
      baseInfo: ['', '', '', '', '', '', '', '', '' ,'', '', '',''],
      error1: true,
      error2: false,
      error3: false,
      error4: true,
      error5: false,
      error6: false,
      error7: false,
      error8: false,
      error9: false,
      error10: false,
      error11: false,
      error12: false,
      error13: false,
      error14: false,
      error15: false,
      error16: false,
      error17: false,
      error18: false,
      error19: false,
      error20: false,
      error21: false,
      selection1 :'',
      selection2 :'',
      selection3 :'',
      selection4 :'',
      selection5 :'',
      selection6 :'',
      selection7 :'',
      selection8 :'',
      selection9 :'',
      selection10 :'',
      newAddress: {
        rcfNo: {
          active: false,
          value: ''
        },
        code: {
          active: false,
          value: ''
        },
        exteranl: {
          active: false,
          value: ''
        },
        internal: {
          active: false,
          value: ''
        },
        SMS: {
          active: false,
          value: ''
        },
        firstName: {
          active: false,
          value: ''
        },
        middleName: {
          active: false,
          value: ''
        },
        lastName: {
          active: false,
          value: ''
        },
        contactNumber: {
          active: false,
          value: '1856552214'
        },
        emailAddress: {
          active: false,
          value: 'xx@gmail.com'
        },
        save: false
      },
      radioData:[{
        label:'SMS Bill'
      },{
        label:'Email Bill'
      },{
        label:'Paper Bill'
      }],
      selectListOptions: [
      {
          label: 'State',
          value: '1'
      }],
      selectIndex:{
         selectData:'',
         select: '0',
         selectLabel:'',
         title:'',
         options: [],
         data:'',
         index:-1
      },
      addressOptions: {
        state: {
          select: '',
          selectLabel:'',
          options: [
            {
              label: 'state',
              value: '0'
            },
            {
              label: 'state1',
              value: '1'
            },
            {
              label: 'state2',
              value: '2'
            },
            {
              label: 'state3',
              value: '3'
            }
          ]
        },
        Township: {
          select: '0',
          selectLabel:'Township',
          options: [
            {
              label: 'Township',
              value: '0'
            },
            {
              label: 'Township1',
              value: '1'
            },
            {
              label: 'Township2',
              value: '2'
            },
            {
              label: 'Township3',
              value: '3'
            }
          ]
        },
        City: {
          select: '0',
          selectLabel:'City',
          options: [
            {
              label: 'City',
              value: '0'
            },
            {
              label: 'City1',
              value: '1'
            },
            {
              label: 'City2',
              value: '2'
            },
            {
              label: 'City3',
              value: '3'
            }
          ]
        },
        Community: {
          select: '0',
          selectLabel:'Community',
          options: [
            {
              label: 'Community',
              value: '0'
            },
            {
              label: 'Community1',
              value: '1'
            },
            {
              label: 'Community2',
              value: '2'
            },
            {
              label: 'Community3',
              value: '3'
            }
          ]
        },
         Street: {
          select: '0',
          selectLabel:'Street',
          options: [
            {
              label: 'Street',
              value: '0'
            },
            {
              label: 'Street1',
              value: '1'
            },
            {
              label: 'Street2',
              value: '2'
            },
            {
              label: 'Street3',
              value: '3'
            }
          ]
        }
      },
      billOptions: {
        state: {
          select: '0',
          selectLabel:'state',
          options: [
            {
              label: 'state',
              value: '0'
            },
            {
              label: 'state1',
              value: '1'
            },
            {
              label: 'state2',
              value: '2'
            },
            {
              label: 'state3',
              value: '3'
            }
          ]
        },
        Township: {
          select: '0',
          selectLabel:'Township',
          options: [
            {
              label: 'Township',
              value: '0'
            },
            {
              label: 'Township1',
              value: '1'
            },
            {
              label: 'Township2',
              value: '2'
            },
            {
              label: 'Township3',
              value: '3'
            }
          ]
        },
        City: {
          select: '0',
          selectLabel:'City',
          options: [
            {
              label: 'City',
              value: '0'
            },
            {
              label: 'City1',
              value: '1'
            },
            {
              label: 'City2',
              value: '2'
            },
            {
              label: 'City3',
              value: '3'
            }
          ]
        },
        Community: {
          select: '0',
          selectLabel:'Community',
          options: [
            {
              label: 'Community',
              value: '0'
            },
            {
              label: 'Community1',
              value: '1'
            },
            {
              label: 'Community2',
              value: '2'
            },
            {
              label: 'Community3',
              value: '3'
            }
          ]
        },
         Street: {
          select: '0',
          selectLabel:'Street',
          options: [
            {
              label: 'Street',
              value: '0'
            },
            {
              label: 'Street1',
              value: '1'
            },
            {
              label: 'Street2',
              value: '2'
            },
            {
              label: 'Street3',
              value: '3'
            }
          ]
        }
      }
    }
  },
  methods:{
     showDrop(data,title,name,index){
      this.selectIndex.options=data.options;
      this.selectIndex.select=data.select;
      this.selectIndex.title=title;
      this.selectIndex.selectData=name;
      this.selectIndex.selectLabel=data.selectIndex;
      this.selectIndex.index=index;
      //this.opened=true;
      this.$refs.modifyModal.open();
    },
    setData(item,index){
       this.selectIndex.select=item.value;
       this.selectIndex.selectLabel=item.label;
       if(this.selectIndex.index==0){
           this.addressOptions[this.selectIndex.selectData].select=item.value;
           this.addressOptions[this.selectIndex.selectData].selectLabel=item.label;
       }else if(this.selectIndex.index==1){
           this.billOptions[this.selectIndex.selectData].select=item.value;
           this.billOptions[this.selectIndex.selectData].selectLabel=item.label;
       }
       
       //this.opened=false;
       this.$refs.modifyModal.close()
    }
  },
  mounted () {

  },
  watch: {
  }
}
</script>

