<template>
  <div>   
      <div class="m-orderReview-wrap">
         <reviewTop></reviewTop>
          <div class="review-pro" v-for='(item,index) in orderReviewData.productItem'>
              <div class="review-pro-top">
                  <div class="row items-center">
                      <div class="review-pro-img">
                        <img :src="item.proImg" alt="">
                      </div>
                      <div class="review-pro-detail col">
                          <div class="review-pro-title m-family-medium">
                              {{item.proTitle}}
                          </div>
                          <div>
                              <q-rating
                              v-model="item.proRate"
                              :max="5"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="review-pro-write">
                  <textarea v-model="item.proComment" placeholder="Share your shopping experience"/>
              </div>
              <div class="review-pro-photos row">
                  <span class="review-upload-img" v-for="(i,index1) in item.prouploadImg">
                      <img :src="i.url" alt="">
                      <i></i>
                  </span>
                 
                  <span class="review-upload-img review-upload-icon" v-if="item.prouploadImg.length<4">
                      <img src="~statics/mobileImages/orderReview/icon-pic.png" alt="">
                      <input type="file" accept="image/*" capture="camera">
                  </span>
              </div>
          </div>
          <div class="m-orderReview-btn m-family-medium">
              SUBMIT
          </div>
      </div>
  </div>
</template>

<script>
import reviewTop from '../orderReivew/orderReivew-top'
import {
  QRating
} from 'quasar'
export default {
  components: {
    QRating,
    reviewTop
  },
  data () {
    return {
       ratingModel:4,
       orderReviewData:{
          orderId:'43654664643589',
          productRate:4,
          logisticsRate:4,
          serviceRate:4,
          productItem:[
            {
               proImg:'../../../statics/mobileImages/orderReview/img-pro.png',
               proTitle:'Product Rating',
               proRate:3,
               prouploadImg:[
                 
               ]
            },
            {
               proImg:'../../../statics/mobileImages/orderReview/img-pro.png',
               proTitle:'Product Rating',
               proRate:3,
               prouploadImg:[
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 },
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 },
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 }
               ]
            },
            {
               proImg:'../../../statics/mobileImages/orderReview/img-pro.png',
               proTitle:'Product Rating',
               proRate:4,
               proComment:'Amazing! Definitely real!',
               prouploadImg:[
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 },
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 },
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 },
                 {
                   url:'../../../statics/mobileImages/orderReview/img-pro.png'
                 }
               ]
            }
          ]
       }
      }
    
  },
  methods: {
  }
}
</script>


