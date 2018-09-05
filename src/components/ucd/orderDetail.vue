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
      <div class="orderDetail-mobile-wrap">
          <div class="main">
            <div class="m-orderStatue-wrap">
                <div class="m-orderStatue-title">Awaiting Payment</div>
                <div class="row items-center">
                    <div class="m-orderStatue-left">
                        <img src="statics/images/orderDetail/icon-express.png" alt="" />
                    </div>
                    <div class="col m-orderStatue-content">
                        <div class="">Submitted the order,  </div>
                        <div class="order-date">2016-10-07 16:15:23</div>
                    </div>
                    <div class="col-auto m-orderStatue-right">
                        <q-icon name="keyboard_arrow_right" />
                    </div>
                </div>
                <div class="row items-center">
                    <div class="m-orderStatue-left">
                        <img src="statics/images/orderDetail/icon-start.png" alt="" />
                    </div>
                    <div  class="col order-info-detail">
                        <div>Haitao Wang   / 18551808810</div>
                        <div>Software Avenue #101.…</div>
                    </div>
                </div>
                <div class="row items-center">
                    <div class="m-orderStatue-left">
                        <img src="statics/images/orderDetail/icon-remark.png" alt="" />
                    </div>
                    <div  class="col order-info-detail">
                        <div class="">Remark</div>
                        <div class="remarkInfo " :class="{'twoLine':isShowAll==false}" >please send SF Express
                            <span class="info-more" v-if="isShowAll==false" @click="isShowAll=true">more</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-order-cost-wrap">
                <div class="row m-order-cost-item">
                    <div class="col">
                        <b>Bag Subtotal</b>
                    </div>
                    <div class="col-auto ">
                        $1161.00
                    </div>
                </div>
                <div class="row m-order-cost-item">
                    <div class="col">
                        <b>Fregth</b>
                    </div>
                    <div class="col-auto ">
                        $198.00
                    </div>
                </div>
                <div class="row m-order-cost-item">
                    <div class="col">
                        <b>Fee Shipping</b>
                    </div>
                    <div class="col-auto ">
                        $0.00
                    </div>
                </div>
                <div class="row m-order-cost-item">
                    <div class="col">
                        <b>Tax</b>
                    </div>
                    <div class="col-auto ">
                        $0.00
                    </div>
                </div>
                <div class="row m-order-cost-item">
                    <div class="col">
                        <b>Account Decuctd</b>
                    </div>
                    <div class="col-auto ">
                        -$0.00
                    </div>
                </div>
            </div>
            <div class="m-fee-detail-wrap">
                <div class="m-fee-detail-item">
                    <div class="m-fee-detail-child row">
                        <div class="f-img">
                            <img src="statics/images/Myorder/pic1.png" alt="" />
                        </div>
                        <div class="col f-con">
                            <div class="f-title">
                                Apple iphone X + 198 Bundle
                                <span class="f-count">× 1</span>
                            </div>
                            <div class="f-stages">
                                <span>$1290</span>
                                <em>Device</em>
                            </div>
                            <div class="f-prop">
                                Memory:256 GB/Primary:198 
                                Bundle/Color:Space Gray
                            </div>
                            <div class="f-share">
                                Share from: 12******12@Hotmail.com
                            </div>
                        </div>
                    </div>
                    <div class="m-fee-detail-child row">
                        <div class="f-img">
                            <img src="statics/images/Myorder/pic1.png" alt="" />
                        </div>
                        <div class="col f-con">
                            <div class="f-title">
                                Apple iphone X + 198 Bundle
                                <span class="f-count">× 1</span>
                            </div>
                            <div class="f-stages">
                                <span>$1290</span>
                                <em>Device</em>
                            </div>
                            <div class="f-prop">
                                Memory:256 GB/Primary:198 
                                Bundle/Color:Space Gray
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="m-fee-detail-item">
                    <div class="m-fee-detail-child row">
                        <div class="f-img">
                            <img src="statics/images/Myorder/pic1.png" alt="" />
                        </div>
                        <div class="col f-con">
                            <div class="f-title">
                                Apple iphone X + 198 Bundle
                                <span class="f-count">× 1</span>
                            </div>
                            <div class="f-stages">
                                <span>$1290</span>
                                <em>Device</em>
                            </div>
                            <div class="f-prop">
                                Memory:256 GB/Primary:198 
                                Bundle/Color:Space Gray
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-info-wrap">
                <div class="order-info-title">
                    Order No: 43654664643589
                </div>
                <div class="order-info-item">
                    <div><span>Print Method:</span>Print together</div>
                    <div><span>Invoice No.:</span>021545628</div>
                    <div><span>Customer Name: </span>Steven .J . George</div>
                </div>
                <div class="order-info-item">
                    <div><span>Payment Time:</span>2017-01-01</div>
                    <div><span>Payment Status: </span>Finish</div>
                    <div><span>Payment Method:</span>Online payment</div>
                </div>
            </div>
            <div class="order-footer row">
                <div class="col total">
                    <div class="o-title">Upfront</div>
                    <div class="o-price">$1161.00</div>
                </div>
                <div class="col m-btn">
                    CANCEL ORDER
                </div>
                <div class="col m-btn positive">
                    SUBMIT
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
        isShowAll:false,
      search:''
    }
  },
  methods: {
  }
}
</script>


