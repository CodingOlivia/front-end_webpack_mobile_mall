<template>
  <div>
    <ul class="flex m-nav-box" >
      <li class="m-size28 m-weight-bold nav-item" v-for="(item,index) in listData" :class="{'active':listActive==index}" @click="listActive=index">{{item}}</li>
    </ul>
    <div class="m-product-details-top">
        <div class="flex detail-up">
          <div class="left">
            <span class="m-size28 m-family-medium block m-fontcolor5">Product Rating</span>
            <q-rating
            v-model="topData.productRate"
            :max="5" readonly class="m-size28 rating-icon m-ytx-x-mt"/>
          </div>
          <div class="right ">
            4.8
          </div>
        </div>
        <ul class="detail-down">
          <li class="flex item-wrapper tag-item active" v-for="item in tagData">
            <span class="text m-weight-bold m-allcolor1">{{item.text}}</span><em>{{item.num}}</em>
            <!-- <span class="text m-weight-bold m-allcolor1">High Review</span><em>1023</em></div> -->
          </li>
          <!-- <li class="flex item-wrapper"> -->
<!--             <div class="tag-item"><span class="text m-weight-bold m-allcolor1">Middle Review</span><em>1023</em></div>
            <div class="tag-item"><span class="text m-weight-bold m-allcolor1">Bad Review</span><em>12</em></div> -->
<!--           </li>
          <div class="flex item-wrapper">
            <div class="tag-item"><span class="text m-weight-bold m-allcolor1">Have a Picture</span><em>123</em></div>
          </div> -->
        </ul>
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
        listActive:0,
        topData:{
          productRate:4,
       },
       listData:['Overview','Gallery','Techspec','Reviews','Reviews'],
       tagData:[
        {
          text:'All Reviews',
          num:'1123'
        },
        {
          text:'High Review',
          num:'1023'
        },
        {
          text:'Middle Review',
          num:'1023'
        },
        {
          text:'Bad Review',
          num:'12'
        },
        {
          text:'Have a Picture',
          num:'123'
        },
       ]
      }
    
  },
  methods: {
  }
}
</script>