<template>
  <div
  >   
      <!-- <div class="nav-title">
          <span class="back">
              <q-icon name="keyboard_backspace"/>
          </span>
          <span class="nav-text">My Business</span>
          <span class="nav-rigth">
             <q-icon name="search"/>
          </span>
      </div> -->
      <div class="myBusiness-mobile-box">
          <div class="main">
              <div class="m-Primary-wrap">
                <div class="m-Primary-h3">Primary Offer</div>
                <div class="m-Primary-inner-wrap row">
                    <div class="m-Primary-img">
                          <img src="statics/images/myBusiness/img_01.png"/>
                    </div>
                    <div class="col m-Primary-content">
                        <div class="m-Primary-title row">
                            <span class="col">3G Basic</span>
                            <span class="m-Primary-state col-auto">
                                Activate
                            </span>
                        </div>
                        <div class="m-Primary-detail">$10.00/mo.
                         
                        </div>
                        <div class="m-Primary-date">2016/12/10-2026/12/10</div>
                        <div class="m-Primary-action"><span class="btn disabled">Change</span></div>
                    </div>
                </div> 
                <div class="m-Primary-inner-wrap row noShadow">
                    <div class="m-Primary-img">
                          <img src="statics/images/myBusiness/img_02.png"/>
                    </div>
                    <div class="col m-Primary-content">
                        <div class="m-Primary-title row">
                            <span class="col">4G Basic </span>
                            <span class="m-Primary-state col-auto">
                                Pending Effect
                            </span>
                        </div>
                        <div class="m-Primary-detail">$10.00/mo.
                         
                        </div>
                        <div class="m-Primary-date">2016/12/10-2026/12/10</div>
                    </div>
                </div> 
              </div>
              <div class="m-Supplementary-wrap">
                <div class="m-Supplementary-h3">Extras
                   <div class="action-right"><span class="operation">Subscription</span></div>
                </div>
                <div class="m-Supplementary-list">
                    <div class="m-Supplementary-item" v-for="(item,index) in offerData">
                        <div class="m-Supplementary-item-level1" @click="item.showAction=false">
                            <div class="m-Supplementary-title m-family-medium">
                              <span class="">{{item.name}}</span>
                              <span class="state-right">{{item.state}}</span>
                            </div>
                            <div class="row items-center m-Supplementary-detail">
                                <div class="col">
                                    <div class="m-Supplementary-date ">{{item.date}}</div>
                                </div>
                                <div class="col-auto">
                                    <!-- <span class="more">
                                        <q-icon name="more_horize" @click.stop="item.showAction=!item.showAction"/>
                                        <div class="m-operation" v-show="item.showAction">Unsubscribe</div>
                                    </span> -->
                                    <!-- <div class="m-operation">Unsubscribe</div> -->
                                </div>
                            </div>
                          </div>
                          <div class="m-Supplementary-item-level2 row" v-for="(item1,i) in item.children" @click="item1.showAction=false">
                              <div class="col-auto m-family-medium">
                                  —— 
                              </div>
                              <div class="col">
                                <div class="m-Supplementary-title m-family-medium">
                                    <span class="">{{item1.name}} </span>
                                    <span class="state-right">{{item1.state}}</span>
                                </div>
                                <div class="m-Supplementary-detail items-center row">
                                    <div class="col">
                                        <div class="m-Supplementary-date">{{item1.date}}</div>
                                    </div>
                                    <div class="col-auto">
                                        <!-- <span class="more">
                                            <q-icon name="more_horize" @click.stop="item1.showAction=!item1.showAction"/>
                                            <div class="m-operation" v-show="item1.showAction">Unsubscribe</div>
                                        </span> -->
                                        <!-- <div class="m-operation">Unsubscribe</div> -->
                                    </div>
                                </div>
                              </div>
                             
                          </div>
                          
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
      search:'',
      offerData:[
          {
              name:'DIY Offering ',
              state:'Activate',
              date:'2016/12/10-2026/12/10',
              showAction:false,
              children:[
                  {
                      name:'CMWAP',
                      state:'Activate',
                      date:'2016/12/10-2026/12/10',
                      showAction:false,
                      children:[]
                  },
                  {
                      name:'CMWAP',
                      state:'Activate',
                      date:'2016/12/10-2026/12/10',
                      showAction:false,
                      children:[]
                  }
              ]

          },
          {
              name:'Spodify',
              state:'Inactivate',
              date:'2016/12/10-2026/12/10',
              showAction:false,
              children:[
              ]

          }
      ]
    }
  },
  methods: {
  }
}
</script>


