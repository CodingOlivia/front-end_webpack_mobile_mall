<template>
<div>
    <div class="ytx-m-basic-info">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="bf-content">
            <ul class="list-box" >
                <li class="list-item" v-for="(item,index) in listData">
                    <router-link :to="item.skipurl">
                        <span class="item-text left">{{item.content}}</span>    
                        <span class="right"><img :src="item.url" alt="" v-if="item.url!==''"/><span>{{item.text}}</span><i></i></span>       
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
import Head from '../common/head'
export default {
  data() {
    return {
      headTitle:'basic info',
      headright:false,
      listData:[
          {
              content:'Profile Picture',
              url:'../../../statics/mobileImages/commerce/heard.png',
              text:'',
              skipurl:'./changeprofile'
          },
          {
              content:'Nickname',
              url:'',
              text:'Candy',
              skipurl:'./changenickname'
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