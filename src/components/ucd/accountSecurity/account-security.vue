<template>
<div>
    <div class="ytx-m-account-security">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="as-content">
            <div class="content-wrapper">
                <ul class="list-box">
                    <li class="list-item" v-for="item in listData">
                        <router-link :to="item.skipurl">
                            <span class="item-text left flex m-ytx-flex-align"><img :src="item.url" alt=""/><span>{{item.content}}</span></span>    
                            <span class="right"><span>{{item.text}}</span><i></i></span>       
                        </router-link>
                    </li>
                </ul>
                <div class="down">
                    <div class="down-list" v-for="item in listData2">
                        <router-link :to="item.skipurl">
                            <span class="item-text left flex m-ytx-flex-align"><img :src="item.url" alt=""/><span>{{item.content}}</span></span>    
                            <span class="right"><span>{{item.text}}</span><i></i></span>      
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Head from '../common/head'
export default {
  data() {
    return {
      headTitle:'account & security',
      headright:false,
      listData:[
          {
              url:'../../../statics/icon_phone.png',
              content:'Mobile Number',
              text:'13505164991',
              skipurl:'./bindmobilenumber'
          },
          {
              url:'../../../statics/icon_email.png',
              content:'E-mail',
              text:'Candy',
              skipurl:'./bindemail'
          },
      ],
      listData2:[
          {
              url:'../../../statics/icon_wechat.png',
              content:'Wechat',
              text:'unbunled',
              skipurl:''
          },
          {
              url:'../../../statics/icon_password.png',
              content:'Change Password',
              text:'',
              skipurl:''
          },
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