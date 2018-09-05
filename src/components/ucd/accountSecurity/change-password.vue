<template>
<div>
    <div class="ytx-m-bind-email">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="be-content">
            <div class="content-box" v-if="!issuccess">
                <div >
                    <div class="ytx-input m-ytx-relative">
                        <input type="password" placeholder="Old Password">
                        <i class="eye-password" :class="{'active':eyeIconActive}" @click="eyeIconActive=!eyeIconActive"></i>
                    </div>
                    <div class="ytx-input m-ytx-relative">
                        <input type="password" placeholder="New Password">
                        <i class="eye-password" :class="{'active':eyeIconActive}" @click="eyeIconActive=!eyeIconActive"></i>
                    </div>
                    <div class="ytx-input">
                        <input  type="text" placeholder="Comfirm Password" >
                    </div>
                </div>           
                <button class="m-btn-large m-ytx-xxxx-mt" @click="issuccess=true ">COMFIRM</button>
                <button class="m-btn-large m-ytx-btn-white m-ytx-x-mt">CANCEL</button>
            </div>
            <div v-show="issuccess">
                <div class="bind-email-suc m-ytx-xx-pb m-ytx-flex-column">
                    <img src="../../../statics/success.png" alt="">
                    <div class="m-size28 m-weight-bold m-ytx-xxx-mt m-ytx-xxx-mb">Change Password Successfully.</div>
                    <!-- <div class="m-size24 m-ytx-mt m-ytx-xxx-mb div-width m-allcolor3">You can use the new mobile number to login.</div> -->
                </div>
                <div class="btn-wrap">
                    <button class="m-btn-large" >CLOSE</button>
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
      headTitle:'change password',
      headright:false,
      eyeIconActive:false,
      issuccess:false
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
</style>s