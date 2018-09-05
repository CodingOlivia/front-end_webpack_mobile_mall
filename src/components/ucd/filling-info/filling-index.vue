<template>
  <div >
    <div class="filling-top">
         <div class="filling-top-title">Customer Basic Info</div>
         <div class="filling-top-detail">
           Add you contract details here,we will use this information to update you on this order or any incomplete order.
         </div>
    </div>
   <div class="filling-index-mobile ">
       <div class="basic-wrap">
           <div class="basic-title m-family-medium">Basic Info</div>
           <div class="basic-con">
               <div class="row m-ytx-xx-mb">
                   <div class="col m-family-medium">Steven Paul Jobs (1955-02-24)</div>
                   <div class="info-edit" @click="jump('/filling-info-basic')"></div>
               </div>
               <div class="row items-center m-ytx-mb ">
                   <div class="icon-tel"></div>
                   <div class="m-allcolor3 m-size24">1856552214</div>
               </div>
               <div class="row items-center">
                   <div class="icon-email"></div>
                   <div class="m-allcolor3 m-size24">asdasdjkj@gmail.com</div>
               </div>
           </div>
       </div>
       <div class="address-wrap ">
           <div class="address-title m-family-medium">Address Info</div>
           <div class="address-con">
               <div class="row m-ytx-xx-mb border-bottom m-ytx-x-pb">
                   <div class="icon-site"></div>
                   <div class="col m-family-medium">Software Avenue #101,
                   JIangning District, Nanjing, JIangsu</div>
                   <div class="info-edit" @click="jump('/filling-info-basic')"></div>
               </div>
               <div class="row items-center m-ytx-mb ">
                   <div class="icon-tel"></div>
                   <div class="m-allcolor3 m-size24">185 5180 8810（External）</div>
               </div>
               <div class="row items-center">
                   <div class="icon-tel"></div>
                   <div class="m-allcolor3 m-size24">185 5180 8810（Internal）</div>
               </div>
           </div>
       </div>
       <div class="submit-btn-wrap">
           <div class="submit-btn" @click="jump('/filling-info-bill')">CONTINUE</div>
       </div>
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
    jump (to) {
      // this.openBag = false
      this.$router.push(to)
    },
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

