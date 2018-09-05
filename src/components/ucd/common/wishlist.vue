<template>
<div>
    <div class="myfavorite">
        <div class="title-wrap">
          <!-- <i></i> -->
          <span class="h2-title">Wishlist</span>
          <a href="javascript:;" class="handle-btn" @click="clickBt()" v-if="!clickTf">Edit</a>
          <a href="javascript:;" class="handle-btn" @click="clickBt()" v-if="clickTf">done</a>
        </div>
        <ul class="favorite-box">
          <li class="favorite-items" v-for="(fi,index) in favoriteItems" :key="index">
              <div class="favorite-select" v-if="clickTf">
              <!-- <i :class="{'active':fi.checked}" @click="fi.checked=!fi.checked"></i> -->
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
          </li>
        </ul>   
    </div>
    <div class="ytx-m-no-data">
        <div class="img-wrap">
            <img src="../../../statics/no-data.png" alt="">
            <p>You have not left your footprint yet</p> 
        </div> 
    </div>
    <div class="delete-wrapper" v-if="clickTf">
        <button class="m-btn-footer" @click="deleteBt()">DELETE</button>
    </div>
</div>
</template>
<script>
import {
  QLayout,
  QCarousel,
  QCheckbox
} from 'quasar'
export default {
  data() {
    return {
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
          type:0,
        },
        {
          id:'two',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:1,
        },
        {
          id:'three',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:0,
        },
        {
          id:'four',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:0,
        },
        {
          id:'five',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:0,
        },
        {
          id:'six',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:0,
        },
        {
          id:'seven',
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
          type:0,
        },
      ]
    }
  },
  components:{
    QLayout,
    QCarousel,
    QCheckbox
  },
  mouted() {

  },
  methods:{
    clickBt:function () {
      this.clickTf=!this.clickTf
    },
    deleteBt:function(){
      var isInArray=false;
      var arr=[]
      for(var i=0;i<this.favoriteItems.length;i++){
        isInArray=this.selection.indexOf(this.favoriteItems[i].id);
        if (isInArray>=0) {
          this.favoriteItems.splice(i,1);
        }
        
      }
    },
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>