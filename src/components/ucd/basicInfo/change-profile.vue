<template>
<div>
    <div class="change-profile">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="profile-content">
            <ul class="profile-all m-ytx-clearfix">
                <li class="list-item" v-for="(item,index) in imgData" :class="{'active':curindex==index}" @click="curindex=index">
                    <img :src="item.url" alt="">
                    <i v-if="curindex==index"></i>
                </li>
            </ul>
        </div>
        <div class="btn-wrapper">
            <button class="m-btn-large">Save</button>
        </div>
    </div>
</div>
</template>
<script>
import {
  QLayout,
  QCarousel,
  QCheckbox
} from 'quasar'
import Head from '../common/head'
export default {
  data() {
    return {
      headTitle:'change profile picture',
      headright:false,
      curindex:1,
      imgData:[
      {
          url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },    {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
      },
      {
        url:"../../../statics/mobileImages/commerce/heard.png"
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

  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>