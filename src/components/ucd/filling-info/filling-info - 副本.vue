<template>
  <div >
    <div class="fillingBox-mobile">
      <div class="main">
        <div class="deliveryDetails">
          <div class="title">
            <h3>Customer Basic Info</h3>
            <span>Add you contract details here,we will use this information to update you on this order or any incomplete order.</span>
          </div>
          <div class="contain">
            <div class="panel">
              <div class="panel-title">Basic Info</div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                        <q-field class="field-inp require"
                          :error="error1"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>First Name</label>
                          <q-input class="field-view-inp" placeholder="First Name"  stack-label="" v-model="baseInfo[0]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                        <q-field class="field-inp"
                          :error="error2"
                          error-label="Please enter!"
                        >
                          <label><em>*</em> Father’s Last Name</label>
                          <q-input class="field-view-inp" placeholder="Father’s Last Name" stack-label="" v-model="baseInfo[1]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                        <q-field class="field-inp"
                          :error="error3"
                          error-label="Please enter!"
                        >
                          <label><em>*</em> Mother’s Last Name</label>
                          <q-input class="field-view-inp" placeholder="Mother’s Last Name" stack-label="" v-model="baseInfo[2]" />
                        </q-field>
                    </div>
                    <div class="col-12"></div>
                    <div class="col-12">
                      <q-field class="field-inp"
                          :error="error4"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>Date of Birth</label>
                          <!-- <q-input class="field-view-inp" stack-label="" v-model="baseInfo[3]" /> -->
                          <q-datetime
                            class="field-view-inp"
                            stack-label=""
                            placeholder="Date of Birth"
                            v-model="baseInfo[3]"
                            :after="[
                              {
                                icon: 'date_range',
                                handler () {
                                  // do something...
                                }
                              }
                            ]"
                        />
                        </q-field>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                        >
                          <label>Contact Number</label>
                          <q-input class="field-view-inp"  placeholder="Contact Number" stack-label="" v-model="baseInfo[4]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                          :error="error5"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>Email Address</label>
                          <q-input class="field-view-inp" placeholder="Email Address" stack-label="" v-model="baseInfo[5]" />
                        </q-field>
                    </div>
                  </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-title">Address Info</div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                      <!-- <q-field class="field-select"
                          :error="error6"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>State</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection1"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(addressOptions.state,'state','state',0)">
                          <div class="col">
                            <span class="text-black" v-if="addressOptions.state.selectLabel!=''">{{addressOptions.state.selectLabel}}</span>
                            <span class="text-grey-5" v-else>State</span>
                            <input v-model="addressOptions.state.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                        <!-- <q-field class="field-select"
                          :error="error7"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Township</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection2"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(addressOptions.Township,'Township','Township',0)">
                          <div class="col">
                            <span class="text-black" v-if="addressOptions.Township.selectLabel!=''">{{addressOptions.Township.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Township</span>
                            <input v-model="addressOptions.Township.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-12">
                        <!-- <q-field class="field-select"
                          :error="error8"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>City</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection3"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                       <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(addressOptions.City,'City','City',0)">
                          <div class="col">
                            <span class="text-black" v-if="addressOptions.City.selectLabel!=''">{{addressOptions.City.selectLabel}}</span>
                            <span class="text-grey-5" v-else>City</span>
                            <input v-model="addressOptions.City.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <!-- <q-field class="field-select"
                          :error="error9"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Community (Colony)</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection4"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(addressOptions.Community,'Community','Community',0)">
                          <div class="col">
                            <span class="text-black" v-if="addressOptions.Community.selectLabel!=''">{{addressOptions.Community.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Community (Colony)</span>
                            <input v-model="addressOptions.Community.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <!-- <q-field class="field-select"
                          :error="error10"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Street</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection5"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                       <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(addressOptions.Street,'Street','Street',0)">
                          <div class="col">
                            <span class="text-black" v-if="addressOptions.Street.selectLabel!=''">{{addressOptions.Street.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Street</span>
                            <input v-model="addressOptions.Street.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                          :error="error11"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>Postal Code</label>
                          <q-input class="field-view-inp" placeholder="Postal Code" stack-label="" v-model="baseInfo[6]" />
                        </q-field>
                    </div>
                    <div class="col-12"></div>
                    <div class="col-12">
                      <q-field class="field-inp"
                          :error="error12"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>External Number</label>
                          <q-input class="field-view-inp" placeholder="External Number" stack-label="" v-model="baseInfo[7]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                        >
                          <label>Internal Number</label>
                          <q-input class="field-view-inp" placeholder="Internal Number" stack-label="" v-model="baseInfo[8]" />
                        </q-field>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="deliveryDetails" v-show="step==2">
          <div class="title">
            <h3>Bill Info</h3>
            <span>We need your bill info, and can send your billing information as soon as possible.</span>
          </div>
          <div class="contain">
            <div class="panel">
              <div class="panel-title">Bill  Info</div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                        <q-field class="field-inp"
                          :error="error13"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>RFC NO</label>
                          <q-input class="field-view-inp" placeholder='RFC NO' stack-label="" v-model="baseInfo[9]" />
                        </q-field>
                    </div>
                  </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-title">Address Info
                  <div class="title-absolute-right">
                    <span class="toggle-text">Copy from customer info</span>
                    <span class="invoice"> <q-toggle v-model="check3" value='' /></span>
                  </div>
              </div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12">
                      <!-- <q-field class="field-select"
                          :error="error14"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>State</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection6"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                       <div class="mobile-y-select mb16">
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
                        <!-- <q-field class="field-select"
                          :error="error15"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Township</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection7"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                      <div class="mobile-y-select mb16">
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
                        <!-- <q-field class="field-select"
                          :error="error16"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>City</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection8"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                      <div class="mobile-y-select mb16">
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
                      <!-- <q-field class="field-select"
                          :error="error17"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Community (Colony)</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection9"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                       <div class="mobile-y-select mb16">
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
                      <!-- <q-field class="field-select"
                          :error="error18"
                          error-label="Please select!"
                      >   
                          <label><em>*</em>Street</label>
                          <q-select
                              class="field-view-select"
                              v-model="selection10"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field> -->
                       <div class="mobile-y-select mb16">
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
                      <q-field class="field-inp"
                          :error="error19"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>Postal Code</label>
                          <q-input class="field-view-inp" placeholder='Postal Code' stack-label="" v-model="baseInfo[10]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                          :error="error20"
                          error-label="Please enter!"
                        >
                          <label><em>*</em>External Number</label>
                          <q-input class="field-view-inp" placeholder='External Number' stack-label="" v-model="baseInfo[11]" />
                        </q-field>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp"
                        >
                          <label>Internal Number</label>
                          <q-input class="field-view-inp" placeholder='Internal Number' stack-label="" v-model="baseInfo[12]" />
                        </q-field>
                    </div>
                  </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-title">Bill Medium</div>
              <div class="panel-con">
                  <div class="row">
                    <div class="col-12 m-bottom--small">
                        <q-option-group
                          inline
                          type="radio"
                          v-model="group"
                          :options="[
                            { label: 'SMS Bill', value: 'op1' ,color: 'secondary'},
                            { label: 'Email Bill', value: 'op2', color: 'secondary' },
                            { label: 'Paper Bill', value: 'op3', color: 'secondary' }
                          ]"
                        />
                    </div>
                    <div class="col-12">
                        <q-field class="field-inp"
                          :error="error21"
                          error-label="Please enter!"
                        >
                          <label>SMS NO</label>
                          <q-input class="field-view-inp"  placeholder='SMS NO' stack-label="" v-model="baseInfo[13]" />
                        </q-field>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="action-btn" v-show="step==1">
            <div class="btn" @click="step=2">NEXT</div>
        </div>
        <div class="filling-mobile-footer" v-show="step==2">
          <div class="filling-footer ">
            <div class="btn" >SUBMIT</div>
            <div class="p-vertical--small">
                <div class="filling-footer-btn" :class="{'active':isAgree==true}" @click="isAgree=!isAgree">
                      <q-icon name="done"/>
                </div>
                <div class="agree ">I agree with the <span>Tems & Conditions</span></div>
            </div>
            
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
      group: '',
      baseInfo: ['', '', '', '', '', '', '', '', '' ,'', '', '',''],
      error1: true,
      error2: false,
      error3: false,
      error4: false,
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

