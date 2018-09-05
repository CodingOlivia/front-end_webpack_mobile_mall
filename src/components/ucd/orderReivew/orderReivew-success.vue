<template>
  <div>   
      <div class="orderReview-success">
          <div class="order-success-icon">
             <i></i>
          </div>
          <div class="order-success-title">
             Review success
          </div>
          <div class="order-success-detail">
             There are also products that have not been 
<br/>evaluated and can continue to be evaluated.
          </div>
          <div class="order-success-pro row justify-center">
             <span class="order-success-item"><img src="../../../statics/mobileImages/orderReview/img-pro.png" alt=""></span>
             <span class="order-success-item"><img src="../../../statics/mobileImages/orderReview/img-pro1.png" alt=""></span>
          </div>
      </div>
      <div class="orderReview-success-btn">
          <div class="btn">CONTINUE TO REVIEW</div>
          <div class="btn negative">BACK TO ORDER LIST</div>
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
      }
    
  },
  methods: {
  }
}
</script>


