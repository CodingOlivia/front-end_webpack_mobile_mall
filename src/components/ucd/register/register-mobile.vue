<template>
    <div class="column register-page-mobile">
        <div class="flex r-mobileTop">
            <div class="r-otherHeardBox">
                <div class="r-head">
                    <i></i> 
                    <span>Sign Up</span> 
                    <i></i>
                </div>
            </div>        
        </div>
        <div class="flex r-mobileContent">
            <div class="r-signDiv">
                <div class="r-signUp">
                    <div class="main">
                      <div class="top">
                        <ul>
                          <li :class="{active: desc.tabIndex == 0}" @click="desc.tabIndex=0">Phone Number</li>
                          <li :class="{active: desc.tabIndex == 1}" @click="desc.tabIndex=1">Email</li>
                        </ul>
                      </div>
                      <div class="custom">
                        <div class="input-group">
                            <div class="input-item error">
                                <input type="text" placeholder="Phone Number" class="phone">
                            </div>
                            <p class="errMessage">the password is wrong</p>
                        </div>
                        <div class="input-group">
                            <div class="input-item error">
                                <input placeholder="Enter Verification Code" class="verification" :disabled = "desc.showInput">
                                <button class="sendVerification" @click="btnClick">
                                    <span>Send Verification Code</span>
                                </button>
                            </div>
                            <p class="errMessage">the password is wrong</p>
                        </div>
                        <div class="input-group">
                            <div class="input-item">
                                <input type="password" placeholder="Password" class="password"  @focus="desc.s4 = true" @blur="desc.s4 = false" />
                                <div class="points" v-if="desc.s4 == true">
                                    <div class="points-title">Password needs to be included:</div>
                                    <p :class="{active: desc.passwordValidate1==true}">
                                        <img :src="desc.iconRightHover" v-if="desc.passwordValidate1==true"/>
                                        <img :src="desc.iconRight" v-else />
                                        <span>Betweend 8 and 32 characters</span>
                                    </p>
                                    <p :class="{active: desc.passwordValidate2==true}">
                                        <img :src="desc.iconRightHover" v-if="desc.passwordValidate2==true" />
                                        <img :src="desc.iconRight" v-else/>
                                        <span>Capital letters and lowercase letters</span>
                                    </p>
                                    <p :class="{active: desc.passwordValidate3==true}">
                                        <img :src="desc.iconRightHover" v-if="desc.passwordValidate3==true" />
                                        <img :src="desc.iconRight" v-else/>
                                        <span>At least one number</span>
                                    </p>
                                </div> 
                            </div>
                            <p class="errMessage">the password is wrong</p>
                        </div>
                        <div class="input-group">
                            <div class="input-item">
                                <input placeholder="Confirm Password" class="confirmPassword">
                            </div>
                            <p class="errMessage">the password is wrong</p>
                        </div>
                        <a class="signIn"><span>SIGN UP</span></a>
                      </div>

                      <div class="signTip"><span>Forget Your Password?</span><span>SIGN IN<i></i></span></div>
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
                    s4: false,
                    passwordValidate1:true,
                    passwordValidate2:false,
                    passwordValidate3:false,
                    iconRightHover: '../../statics/images/login-mobile/icon-right-hover.png',
                    iconRight: '../../statics/images/login-mobile/icon-right.png',
                    passwordValidate: true,
                    tabIndex: 0,
                    arrow:'../../statics/images/login-mobile/arrow_R.png',
                    showInput: true

                }              
            }
        },
        methods: {
            btnClick: function(){
                this.desc.showInput = false;
            }
        }      
    }
</script>
<style lang="stylus">
        @import '~themes/app.variables'
                                                                                                                                                           
</style>