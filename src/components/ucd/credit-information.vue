<template>

    <q-modal v-model="opened1" >
        <div class="model-title">
           CREDIT INFORMATION BUREAU
           <span class="model-close" @click="opened1=false"></span>
        </div>
        <div class="credit-mobile-wrap">
            <div class="panel">
                <div class="panel-title">
                   Dear 5547354112：
                </div>
                <div class="panel-con">
                    You will be asked 2 questions in order to make the Credit Buro validation, and the answer is required to be Yes or No. Do you agree? Do you authorize Pegaso PCS S.A de C.V. to query your credit history for this only time from the Societies of Credit Information that will be convenient; stating that you have knowledge of the nature, scope and use that Pegaso PCS S.A. de C.V. will give to this information?
                </div>
            </div>
            <div class="panel">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Authorize Telefonica to verify the credit bureau?
                </div>
                <div class="panel-con ">
                   <div class="invoice"> <q-toggle v-model="check1" value='' /></div>
                </div>
            </div>
            <div class="panel" v-show="check1">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Do you currently own a credit card?
                </div>
                <div class="panel-con ">
                    <div class="invoice m-bottom--small"> <q-toggle v-model="check2" value='' /></div>
                     <!-- <q-field class="field-select"
                        :error="selection==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(Options.bankName1,'bankName','bankName1',0)">
                          <div class="col">
                            <span class="text-black" v-if="Options.bankName1.selectLabel!=''">{{Options.bankName1.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Bank Name</span>
                            <input v-model="Options.bankName1.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                     <!-- <q-field class="field-border">
                        <q-input stack-label="Last 4 digits of Credit Card"  color="amber" v-model="Credit" />
                    </q-field> -->
                     <q-field class="field-inp"
                        :error="error1"
                        error-label="Please enter!"
                    >
                        <label><em>*</em>First Name</label>
                        <q-input class="field-view-inp" placeholder="Last 4 digits of Credit Card"  stack-label="" v-model="Credit" />
                    </q-field>
                     

                </div>
            </div>
            
            <div class="panel" v-show="check1&&check2">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Do you have a current house Mortgage?
                </div>
                <div class="panel-con ">
                    <div class="invoice m-bottom--small"> <q-toggle v-model="check3" value='' /></div>
                     <!-- <q-field class="field-select"
                        :error="selection1==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection1"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(Options.bankName2,'bankName','bankName2',0)">
                          <div class="col">
                            <span class="text-black" v-if="Options.bankName2.selectLabel!=''">{{Options.bankName2.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Bank Name</span>
                            <input v-model="Options.bankName2.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                </div>
            </div>
            <div class="panel" v-show="check1&&check2">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Have you requested credit for a car purchase within the last 24 months?
                </div>
                <div class="panel-con ">
                    <div class="invoice m-bottom--small"> <q-toggle v-model="check4" value='' /></div>
                     <!-- <q-field class="field-select"
                        :error="selection2==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection2"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field> -->
                      <div class="mobile-y-select mb16">
                        <div class=" row items-center" @click="showDrop(Options.bankName3,'bankName','bankName3',0)">
                          <div class="col">
                            <span class="text-black" v-if="Options.bankName3.selectLabel!=''">{{Options.bankName3.selectLabel}}</span>
                            <span class="text-grey-5" v-else>Bank Name</span>
                            <input v-model="Options.bankName3.select"  type="hidden" />
                          </div>
                          <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
                        </div>
                      </div>
                </div>
            </div>

        </div>
        <div class="model-mobile-footer">
            <div class="model-footer-inner">
               <div class="model-footer-action row">
                   <span class="btn negative m-right--small">CANCEL</span>
                   <span class="btn ">OK</span>
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
    </q-modal>
 

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
  QToggle,
  QInput,
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
    QToggle,
    QInput,
    QModal
  },
  data () {
    return {
      error1:false,
      opened1: true,
      isAgree: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      selection: '1',
      selection1: '1',
      selection2: '1',
      Credit: '12',
      mailHasError: false,
      selectListOptions: [
      {
          label: 'ICBC',
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
      Options: {
        bankName1: {
          select: '0',
          selectLabel:'ICBC',
          options: [
            {
              label: 'ICBC',
              value: '0'
            }
          ]
        },
        bankName2: {
          select: '0',
          selectLabel:'ICBC',
          options: [
            {
              label: 'ICBC',
              value: '0'
            }
          ]
        },
        bankName3: {
          select: '0',
          selectLabel:'ICBC',
          options: [
            {
              label: 'ICBC',
              value: '0'
            }
          ]
        }
      },
    }
  },
  methods: {
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
       this.Options[this.selectIndex.selectData].select=item.value;
       this.Options[this.selectIndex.selectData].selectLabel=item.label;
       
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

