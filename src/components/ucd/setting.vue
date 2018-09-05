<template>
<div>
    <div class="ytx-m-setting">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="setting-content">
            <ul class="list-box" >
                <li class="list-item" v-for="(item,index) in settings">
                    <router-link :to="item.skipurl">
                        <span class="item-text">{{item.content}}</span>    
                        <i></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
import {
} from 'quasar'
import Head from './common/head'
export default {
  data() {
    return {
      headTitle:'Settings',
      headright:false,
      settings:[
          {
              content:'Basic Info',
              skipurl:'./basicInfo'
          },
          {
              content:'Delivery Addresses',
              skipurl:''
          },
          {
              content:'Account & Security',
              skipurl:'./accountsecurity'
          }
      ]
    }
  },
  components:{
    'v-head':Head
  },
  mouted() {

  },
  methods:{

  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>