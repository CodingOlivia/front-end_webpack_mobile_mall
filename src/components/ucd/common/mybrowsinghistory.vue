<template>
<div>
    <div class="mybrowsinghistory">
        <!-- <v-head :headtitle="headTitle" :headright="headright"></v-head>    -->
        <div class="title-wrap">
          <!-- <i></i> -->
          <span class="h2-title">My Browsing History</span>
          <a href="javascript:;" class="handle-btn" @click="clickBt()" v-if="!clickTf">Edit</a>
          <a href="javascript:;" class="handle-btn" @click="clickBt()" v-if="clickTf">done</a>
        </div>
        <div class="list-box">
            <div class="list-items"  v-for="(fi,index) in favoriteItems" :key="index" :class="{'item-top-padding':index==0||(favoriteItems[index].time=='1-18'&&favoriteItems[index+1].time!=='1-18')}">
                <div class="h3-title" v-if="index==0">
                    Today 1-18
                </div>
                <div class="h3-title" v-if="favoriteItems[index].time=='1-18'&&favoriteItems[index+1].time!=='1-18'">
                    Earlier
                </div>
                <div class="list-select" v-if="clickTf">
                    <q-checkbox  v-model="selection" :val='fi.id'></q-checkbox>
                </div>
                <div class="img-wrap">
                <img :src="fi.url" alt="" class="img-content">
                <div v-if="fi.type==1" class="product-status">Off the Shelf</div>
                </div>
                <div class="product-content-wrap">
                <div class="product-content">
                    <div class="product-title">{{fi.productTitle}}</div>
                    <div class="product-price">{{fi.productPrice}}<span>Phone</span></div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="delete-wrapper" v-if="clickTf">
        <button class="m-btn-large">DELETE</button>
    </div>
</div>
</template>
<script>
import {
  QLayout,
  QCarousel,
  QCheckbox
} from 'quasar'
import Head from './head'
export default {
  data() {
    return {
      headTitle:'my browsing history',
      headright:true,
      cl:'',
      selectactive:-1,
      clickTf:false,
      selectItem:[],
      selection:[],
      favoriteItems:[
      {
        id:'one',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:0
      },
      {
        id:'two',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:1
      },
      {
        id:'three',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:0
      },
      {
        id:'four',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
      },
      {
        id:'five',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:0
      },
      {
        id:'six',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:0
      },
      {
        id:'seven',
        url:'../../statics/images/wishlist/pic1.png',
        productTitle:'Huawei P8 4G Netcom smart phone',
        productPrice:'$18,0000',
        type:0
      },
    ]
    }
  },
  components:{
    QLayout,
    QCarousel,
    QCheckbox,
    'v-head':Head
  },
  mouted() {

  },
  methods:{
    clickBt:function () {
      this.clickTf=!this.clickTf
    },
    deleteBt: function(){
      for(var i=0;i<this.favoriteItems.length;i++){
        if (this.favoriteItems[i].checked) {
          this.favoriteItems.splice(i,1)
        }
      }
    },
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>