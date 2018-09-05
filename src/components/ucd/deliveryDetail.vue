<template>
  <div>   
      <!-- <div class="nav-title">
          <span class="back">
              <q-icon name="keyboard_backspace"/>
          </span>
          <span class="nav-text">My Business</span>
          <span class="nav-rigth">
            
          </span>
      </div> -->
    <div class="package-wrap">
        <div class="package-title">2 packages have been issued</div>
        <!-- <div class="package-detail">——The following items were split into 4 packages——</div> -->
        <div class="package-list">
            <div class="package-item" v-for="(item,index) in package" :class="{'active':selectCard==index}" @click="selectCard=index" >
                 <div class="package-img">
                        <img :src="item.img" />
                        <span class="package-count">
                            {{item.total}} product
                        </span>
                    </div>
                    <div class="package-info">
                        <div class="express-info">
                            SF  Express
                        </div>
                        <div class="shippingNo">Shipping No.:{{item.Num}}</div>
                    </div>
            </div>
        </div>
    </div>
    <div class="delivery-process-wrapper">
        <div class="content">
        <div class="delivery-process-con">
            <div class="delivery-process-item" v-bind:class="{ 'active': item.active }" v-for="(item,index) in process">
                <div class="delivery-process-icon">
                    <div class="delivery-process-line-top"></div>
                    <div class="delivery-process-icon-text"></div>
                    <div class="delivery-process-line-bottom" v-bind:class="{ 'active':process[index+1].active }" v-if="index<process.length-1"></div>
                    <div class="delivery-process-line-bottom" v-else v-bind:class="{ 'active':item.active }"> </div>
                </div>
                <div class="delivery-process-right">
                    <p>{{item.date}}</p>
                    <p>{{item.local}}</p>
                    <p>{{item.info}}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
        
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
      selectCard:0,
        package:[{
          status:'On Process',
          Num:'1234654654657',
          img:"statics/images/Myorder/pic1.png",
          total:1,
          products:[
            {
              src:'statics/images/Myorder/pic1.png'
            }
          ]
        },{
          status:'On Process',
          Num:'1234654654658',
          total:2,
          img:"statics/images/Myorder/pic2.png",
          products:[
            {
              src:'statics/images/Myorder/pic1.png'
            },
            {
              src:'statics/images/Myorder/pic2.png'
            }
          ]
        }],
        process:[{
          active:true,
          date:'Oct,15 2016   16:15:23',
          local:'',
          info:'Complete distribution, welcome to visit next time'
        },{
           active:true,
          date:'Oct,14 2016   02:15:23',
          local:'Location RICHMOND, BC',
          info:'Items processed at postal facility'
        },{
          active:true,
          date:'Oct,13 2016   12:02:09',
          local:'',
          info:'Items picked up by USPS'
        },{
          active:true,
          date:'Oct,13 2016   12:02:09',
          local:'',
          info:'Items picked up by USPS'
        },{
          active:false,
          date:'Oct,13 2016   12:02:09',
          local:'',
          info:'Items picked up by USPS'
        },{
           active:false,
          date:'Oct,13 2016   12:02:09',
          local:'',
          info:'Items picked up by USPS'
        }]
      }
    
  },
  methods: {
  }
}
</script>


