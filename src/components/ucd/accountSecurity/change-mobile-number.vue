<template>
<div>
    <div class="ytx-m-bind-email">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="be-content">
            <div class="content-box" v-show="!issuccess">
                <div v-show="!isshow">
                    <div class="ytx-input">
                        <input class="ytx-input-disabled" type="text" placeholder="15266645002" disabled>
                    </div>
                    <div class="ytx-input m-ytx-relative">
                        <input type="password" placeholder="password">
                        <i class="eye-password" :class="{'active':eyeIconActive}" @click="eyeIconActive=!eyeIconActive"></i>
                    </div>
                </div>
                <div v-show="isshow">
                    <div class="ytx-input">
                        <input type="text" placeholder="New Mobile Number" >
                    </div>
                    <div class="ytx-send m-ytx-flex">
                        <input type="text" placeholder="Verification Code" >
                        <button class="s-btn">Send</button>
                    </div>
                </div>
                <div class="m-ytx-xx-mb m-ytx-x-mt">
                    <a class="m-fontcolor4 m-size24 ">Forget Password</a>
                </div>
                <button class="m-btn-large" v-show="!isshow" @click="isshow=true">NEXT</button>
                <button class="m-btn-large" v-show="isshow" @click="issuccess=true">COMFIRM</button>
                <button class="m-btn-large m-ytx-btn-white m-ytx-x-mt">CANCEL</button>
            </div>
            <div v-show="issuccess">
                <div class="bind-email-suc m-ytx-xx-pb m-ytx-flex-column">
                    <img src="../../../statics/success.png" alt="">
                    <div class="m-size28 m-weight-bold m-ytx-xxx-mt">change mobile number Successfully.</div>
                    <div class="m-size24 m-ytx-mt m-ytx-xxx-mb div-width m-allcolor3">You can use the new mobile number to login.</div>
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
      headTitle:'change mobile number',
      headright:false,
      eyeIconActive:false,
      isshow:false,
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
</style>