<template>
    <div class="m-recommendation">
        <h2 class="title">Recommendation</h2>
        <div class="recommendation-wrapper">
            <ul class="list-box row">
                <li class="list-item col-6" v-for="(item,index) in recommendationItems" :key="index">
                    <div class="item-wrapper">
                        <div class="img-wrap">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="product-content">
                            <div class="product-title">{{item.productTitle}}</div>
                            <div class="product-price">{{item.productPrice}}<span>Phone</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      recommendationItems:[
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
        {
          url:'../../statics/images/wishlist/pic1.png',
          productTitle:'Huawei P8 4G Netcom smart phone',
          productPrice:'$18,0000',
        },
      ]
    }
  },

}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>