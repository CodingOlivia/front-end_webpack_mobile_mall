<template>
<div>
    <div class="ytx-m-bind-mobile-number">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="bmn-content">
            <div class="content-box m-ytx-xx-pb m-ytx-flex-column">
                <img src="../../../statics/icon_phone.png" alt="">
                <div class="m-size28 m-weight-bold m-ytx-xxx-mt">13505164991</div>
                <div class="m-size24 m-ytx-mt m-ytx-xxx-mb div-width m-allcolor3">You can Use it to login, reset passwords and 
                        verify identity</div>
            </div>
            <div class="btn-wrap">
            <router-link to="./changemobilenumber">
                <button class="m-btn-large" >ChANGE</button>
            </router-link>
                <button class="m-btn-large m-ytx-btn-white m-ytx-xx-mt" @click="isdisplay=true">UNBUNDLED</button>
            </div>
            <div class="unbundled-warning-bg" v-if="isdisplay">
                <div class="unbundled-warning">
                    <img src="../../../statics/success.png" alt="">
                    <div class="m-size26 m-weight-bold m-ytx-xxx-mt warn-text">After unbundling, you will not be able to sign in 
                            Commerce using the original mobile number.</div>
                    <div class="m-ytx-flex m-ytx-flex-align btn-spacing">
                        <button class="m-btn-large m-ytx-btn-white m-ytx-mr" @click="isdisplay=false">CANCEL</button>
                        <router-link to="./unbundledmobilenumber" style="width:100%">
                            <button class="m-btn-large " >UNBUNDLED</button>
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
      headTitle:'bind mobile number',
      headright:false,
      eyeIconActive:false,
      isshow:false,
      issuccess:false,
      isdisplay:false
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