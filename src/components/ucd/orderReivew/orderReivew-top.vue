<template>
    <div class="m-orderReview-top">
        <div class="m-orderReview-title m-family-medium" >Order ID: {{orderTopData.orderId}}</div>
        <div class="row m-orderReview-item">
          <span class="col-auto">Product Compliance</span>
          <span class="col m-ytx-align-right">
            <q-rating
              
              v-model="orderTopData.productRate"
              :max="5"/>
          </span>
        </div>
        <div class="row m-orderReview-item">
          <span class="col-auto">Logistics Rating</span>
          <span class="col m-ytx-align-right">
            <q-rating
              v-model="orderTopData.logisticsRate"
              :max="5"/>
          </span>
        </div>
        <div class="row m-orderReview-item">
          <span class="col-auto">Service Rating</span>
          <span class="col m-ytx-align-right">
            <q-rating
              v-model="orderTopData.serviceRate"
              :max="5"/>
          </span>
        </div>
    </div>
</template>

<script>
import {
  QRating
} from 'quasar'
export default {
  components: {
    QRating
  },
  data () {
    return {
       orderTopData:{
          orderId:'43654664643589',
          productRate:4,
          logisticsRate:4,
          serviceRate:4,
       }
      }
    
  },
  methods: {
  }
}
</script>


