<template>
<div class="m-head">
    <div class="head-wrap">
        <i></i>
        <span class="h2-title">{{headtitle}}</span>
        <span v-if="headright" class="head-right">          
            <a href="javascript:;"  @click="clickBt()" v-if="!clickTf">Edit</a>
            <a href="javascript:;"  @click="clickBt()" v-if="clickTf">done</a>
        </span>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      clickTf:false,
      selectItem:[],
    }
  },
  props:{
      headtitle:String,
      headright:{
          type:Boolean,
          default:false,
      }
  },
  mouted() {

  },
  methods:{
    clickBt:function () {
      this.clickTf=!this.clickTf
    },
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/

</style>