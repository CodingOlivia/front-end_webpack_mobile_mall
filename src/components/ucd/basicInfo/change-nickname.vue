<template>
<div>
    <div class="ytx-m-change-nickname">
        <v-head :headtitle="headTitle" :headright="headright"></v-head>
        <div class="cn-content">
            <div class="content-wrapper">
                <div class="ytx-m-input">
                    <input type="text" placeholder="Nickname" @focus="isshow=true" ref="nkn"> 
                    <i class="none" v-if="isshow" @click="clearHandle"></i>
                </div>
                <button class="m-btn-large">SAVE</button>
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
      headTitle:'change nickname',
      headright:false,
      isshow:false
    }
  },
  components:{
    'v-head':Head
  },
  mouted() {

  },
  methods:{
    clearHandle:function(){
        this.$refs.nkn.value="";
    }
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>