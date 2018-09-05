<template>
  <div>   
      <!-- <div class="nav-title">
          <span class="back">
              <q-icon name="keyboard_backspace"/>
          </span>
          <span class="nav-text">My Assets</span>
          <span class="nav-rigth">
             <q-icon name="search"/>
          </span>
      </div> -->
      <div class="myAssets-mobile-box">
          <div class="main">
              <div class="assetList">
                  <div class="assetItem "  v-for="(item,index) in  dataAsset" :class="{'expired':item.type==4}">
                      <div>
                        <div class="assetItem-top">
                            <div class="title">
                              {{item.title}}
                            </div>
                            <div class="price">
                              {{item.price}}
                            </div>
                            <span class="more" @click="opened=true">
                                <q-icon name="more_vert"/>
                            </span>
                        </div>
                        <div class="row assetItem-bottom">
                            <div class="col-4"> {{item.tyPeLabel}}</div>
                            <div class="col-4">
                              <div class="field-view">
                                    <div class="field-view-con">
                                        <em >{{item.total}}</em>
                                        <span>Pictures</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="field-view" v-show="item.left!=''">
                                    <div class="field-view-con">
                                        <em :class="item.totalColor">{{item.left}}</em>
                                        <span>Pictures</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="level2 bg-grey-1" v-for="(i,index) in item.children" v-show="item.children.length>0">
                          <div class="assetItem-top">
                              <div class="title">
                                {{i.title}}
                              </div>
                              <div class="price">
                                {{i.price}}
                              </div>
                              <span class="more" @click="opened=true">
                                  <q-icon name="more_vert"/>
                              </span>
                           </div>
                           <div class="row assetItem-bottom">
                                <div class="col-4"> {{i.tyPeLabel}}</div>
                                <div class="col-4">
                                  <div class="field-view">
                                        <div class="field-view-con">
                                            <em >{{i.total}}</em>
                                            <span>Pictures</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="field-view" v-show="i.left!=''">
                                        <div class="field-view-con">
                                            <em :class="i.totalColor">{{i.left}}</em>
                                            <span>Pictures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>

          </div>
          <q-modal v-model="opened" content-css="padding: 50px"  position="bottom">
              <div class="asset-detail">
                  <div class="asset-code">Asset Resource Code：12354ASDA21321SDF</div>
                  <div class="asset-date">
                      <p>Effective Date：2016-10-10 16:15:23</p>
                      <p>Expired Date：2016-10-10 16:15:23</p>
                  </div>
                  <div class="asset-close" @click="opened=false">CLOSE</div>
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
      current:1,
      count:3,
      opened:false,
      dataAsset:[
        {
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'0',
          tyPeLabel:"ToUse",
          total:"50",
          left:'',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-warning",
          totalColor:"",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'1',
          tyPeLabel:"InUse",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-positive",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'2',
          tyPeLabel:"Frozen",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-grey-4",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'3',
          tyPeLabel:"InMaintenance",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-yellow",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'4',
          tyPeLabel:"Expired",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-black",
          totalColor:"",
          children:[]
        }
        ,{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'5',
          tyPeLabel:"UseExhausted",
          total:"50",
          left:'0',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-negative",
          totalColor:"text-negative",
          children:[]
        }
        ,{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'5',
          tyPeLabel:"UseExhausted",
          total:"50",
          left:'0',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-negative",
          totalColor:"text-negative",
          children:[
            {
              title:"Printing photos",
              detail:"Asset description Asset description Asset description",
              price:"Package: $30package",
              type:'5',
              tyPeLabel:"UseExhausted",
              total:"50",
              left:'0',
              code:"12354ASDA21321SDF",
              effectiveDate:"2016-10-10 16:15:23",
              expiredDate:"2016-10-10 16:15:23",
              bgColor:"bg-negative",
              totalColor:"text-negative",
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>


