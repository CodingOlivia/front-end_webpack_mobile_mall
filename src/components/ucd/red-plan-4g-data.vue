<template>
  <div class="red-plan-4g-data">
    <div class='flex justify-center relative-position m-ytx-p-xx-tb'>
      <i class="icon-back"></i>
      <span class="m-weight-bold m-size26">Red Plan 4G Data</span>
    </div>
    <div class="panel-container">
       <h1 class="titletext m-weight-bold">Red Plan 4G Data</h1>
       <span class="price m-weight-bold">$29.00<sub class="sub">/mo</sub></span>
       <p class="subtext">VIP Best Plan keeps you connected wherever you go with  affordabel tariff for local and international calls and unique  services that make your life easier.</p>
       <div class="tag-state">
          <span class="state-up m-family-medium">Effective Mode</span>
          <span class="state-down m-weight-bold">NEXT BILL CYCLE</span>
       </div>
    </div>
    <div class="extras-panel">
      <h2 class="m-size28 m-weight-bold extras-title">Extras</h2>
      <div class="list-item" v-for="item in listData" @click="item.status=!item.status">
       <div class="left">
        <div class="title">{{item.titleName}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="price">{{item.price}}</div>
       </div>
       <div class="right">
        <i class="selected" v-if="item.status"></i>        
        <i class="null" v-else></i>
       </div>        
      </div>      
    </div>
    <div class="btn-wrapper">
      <button class="m-btn-large">CHANGE</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData:[
        {
          titleName:'Facebook Pass',
          price:'$2.00/mo',
          desc:'Use Facebook without consuming your data.',
          status:false
        },
        {
          titleName:'Facebook Pass',
          price:'$2.00/mo',
          desc:'Use Facebook without consuming your data.',
          status:false
        },
        {
          titleName:'Facebook Pass',
          price:'$2.00/mo',
          desc:'Use Facebook without consuming your data.',
          status:true
        },
        {
          titleName:'Facebook Pass',
          price:'$2.00/mo',
          desc:'Use Facebook without consuming your data.',
          status:false
        },
      ]
    }
  },
  
}
</script>
<style lang='stylus'>

</style>