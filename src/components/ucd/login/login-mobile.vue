<template>
    <div class="column sign-page-mobile">
        <div class="flex r-mobileTop">
            <div class="r-otherHeardBox">
                <div class="r-head">
                    <img class="back" :src="desc.icoBack" alt=""></img>
                    <span>Sign In</span> 
                    <i></i>
                </div>
            </div>        
        </div>
        <div class="flex r-mobileContent">
            <div class="r-div">
                <div class="r-div-item">
                    <div class="main">
                        <div class="custom">
                            <div class="hint-img">
                                <div class="msg-error">
                                    <b><img :src="desc.btnRrror" alt=""></b>
                                    <span>The user is locked, you can click to forget the password on the page, or 20 minutes to try again.</span>
                                </div>
                            </div>                            
                            <div class="input-group">
                                <div class="input-item">
                                    <input type="text" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="input-item">
                                    <input placeholder="Confirm Password" class="confirmPassword">
                                </div>
                            </div>                        
                            <div class="input-group">
                                <div class="input-item">
                                    <input type="text" v-model="desc.VCode" placeholder="Verification Code"/>
                                    <div class="code"><img :src="desc.codeImg" alt=""/></div>                                
                                </div>
                            </div>
                            <a class="btn-forgotpsw" @click="continueStepOne()">
                                <span>Sign In</span>
                            </a>
                            <div class="signTip">
                                <span>Forget Your Password?</span>
                                <span>Sign Up
                                    <img :src="desc.icoArrow" alt="">
                                </span>
                            </div>
                            <div class="bottom">
                                <div class="bottomDesc">
                                    <i></i>
                                    <span>Or sign in via</span>
                                    <i></i>
                                </div>
                                <div class="bottomImage">
                                    <img :src="desc.weixin" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                desc: {
                    codeImg: '../../statics/images/login-mobile/code.png',
                    icoBack: '../../statics/images/login-mobile/ico_back.png',
                    btnRrror: '../../statics/images/login-mobile/btn_errorInfo.png',
                    icoArrow: '../../statics/images/login-mobile/ico_arrow.png',
                    weixin: '../../statics/images/login-mobile/weixin.png'
                }            
            }
        },
        methods: {}          
    }
</script>
<style lang="stylus">
        @import '~themes/app.variables'
                                                                                                                                              
</style>