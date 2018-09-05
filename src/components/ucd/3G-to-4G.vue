<template>
  <div class="m-3g-4g">
    <div class='flex justify-center relative-position m-ytx-p-xx-tb'>
      <i class="icon-back"></i>
      <span class="m-weight-bold m-size26">3G to 4G</span>
    </div>
    <div class="panel-container">
      <div class="info-wrapper">
        <span class="titletext block">3G Basic</span>
        <span class="m-size24 date block">2016/12/10-2026/12/10</span>
      </div>
     <span class="price m-weight-bold">$10.00<sub class="sub">/mo.</sub></span>
     <div class="account m-size22 m-weight-bold">HI,13505164991</div>
    </div>
    <div class="panel">
      <div class="list-item flex" v-for="item in listData">
        <div class="left">
          <img :src="item.imgUrl">
        </div>
        <div class="right">
          <div class="flex justify-between">
            <span class="m-size28 item-title m-weight-bold">{{item.titleName}}</span>
            <span class="m-size28 item-price m-weight-bold">{{item.price}}/mo</span>
          </div>
          <span class="m-size24 block attr">{{item.attr1}}</span>
          <span class="m-size24 block attr">{{item.attr2}}</span>
          <span class="m-size24 block attr">{{item.attr3}}</span>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData:[
        {
          imgUrl:"../../statics/4g-basic.png",
          titleName:'4g Basic',
          price:'$400.00',
          attr1:'200 min,Local & National',
          attr2:'200 SMS',
          attr3:'2G Internet',
        },
        {
          imgUrl:"../../statics/4g-premium.png",
          titleName:'4G Premium',
          price:'$400',
          attr1:'200 min,Local & National',
          attr2:'200 SMS',
          attr3:'2G Internet',
        },
        {
          imgUrl:"../../statics/4g-unlimited.png",
          titleName:'4g Unlimited',
          price:'$400',
          attr1:'200 min,Local & National',
          attr2:'200 SMS',
          attr3:'2G Internet',
        },
      ]
    }
  },
}
</script>
<style lang='stylus'>
</style>