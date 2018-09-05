<template>
  <div class="edit-data-wrap">  
      <div class=""></div>
      <div class="edit-data-title">SMS verification code has been sent to <span>18654414452</span></div>
      <div class="mobile-y-inp " :class="{'m-error':code.val!=getData.code&&code.showTip==true}">
        <input type="text" v-model="code.val"  placeholder="Please Enter SMS Verification Code" @blur="code.showTip=true" ><i v-if="code.showTip" :class="{'error':code.val!=getData.code,'success':code.val==getData.code}"></i>
      </div>
      <div class="mobile-y-inp m-ytx-mt " :class="{'m-error':phoneNum.val!=getData.phoneNum&&phoneNum.showTip==true}">
        <input type="text" v-model="phoneNum.val"  placeholder="Please Enter Sharer's Phone Number" @blur="phoneNum.showTip=true"><i v-if="phoneNum.showTip" :class="{'error':phoneNum.val!=getData.phoneNum,'success':phoneNum.val==getData.phoneNum}"></i>
      </div>
      <div class="edit-errorMessage m-ytx-mt" ><template v-if="code.val!=getData.code||phoneNum.val!=getData.phoneNum">Please enter the operator's number</template></div>
      <div class="m-btn-large m-ytx-mt " :class="{'disabled':code.val!=getData.code||phoneNum.val!=getData.phoneNum}"  @click="submitData()">
           SUBMIT
      </div>
  </div>
</template>

<script>
import {
  QIcon
} from 'quasar'
export default {
  components: {
    QIcon
  },
  data () {
    return {
         getData:{
           code:'5248',
           phoneNum:'15856582545',
         },
         code:{
            val:'',
            showTip:false
         },
         phoneNum:{
            val:'',
            showTip:false
         },
      }
    
  },
  methods: {
    submitData:function(){

    }
  }
}
</script>


