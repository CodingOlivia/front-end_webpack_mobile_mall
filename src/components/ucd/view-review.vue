<template>
<div class="view-review">
  <div class="container">
    <reviewTop></reviewTop>
    <div class="card-wrapper m-ytx-xxxx-mt" v-for="(item,index) in ratingListsData" :key="index" ref="zlviewreviewbox" :id="index">
        <div class="card-top">
          <div class="left">
            <img :src="item.protrait">
          </div>
          <div class="right">
            <p class="label m-size28 m-weight-bold m-allcolor1">Product Rating</p>
            <q-rating v-model="item.ratingModel" :max='5' class="rating-icon"></q-rating>
            <p class="date m-size28 m-allcolor3">{{item.date}}</p>
          </div>
        </div>
        <i class="status status1" v-if="item.status==0"><em>UNRE-VIEWED</em></i>
        <i class="status status2" v-if="item.status==1"><em>PASS</em></i>
        <i class="status status3" v-if="item.status==2"><em>REJECT</em></i>
        <p class="m-size28 rating-desc m-allcolor1">{{item.desc}}</p>       
        <ul class="list-box m-ytx-clearfix" :data-count="index">
          <li class="list-item" v-for="(list,index) in item.imglists" >
            <div class="img-wrap" @click="imgSwitch" :data-count="index">
              <img :src="list.imgUrl">
            </div>
          </li>
        </ul>
        <div class="text-desc m-ytx-clearfix">
          <div class="m-size26 txt label m-ytx-s-mr m-weight-bold m-allcolor1 comments-title" v-if="item.status==2">{{item.ratingTitle}}</div>
          <div class="m-size26 txt label m-ytx-s-mr m-weight-bold m-allcolor1" v-else>{{item.ratingTitle}}</div>
          <div class="m-size26 txt comments-content">{{item.ratingText}}</div>
        </div>       
    </div>
  </div>    
  <div class='zl-preview'v-show="flag" ref="swipers" @touchmove.prevent>
    <div class="currentpage" ref="countter">{{bannerIndex}}/{{this.total}}</div>
    <swiper :options="swiperOption" ref="myswiper">
      <swiper-slide v-for="(item,index) in imglist" :key="index">
        <img :src="item.imgUrl"/>
      </swiper-slide>      
    </swiper>   
    <div class="commentcontent" ref='commentcontent'>{{comment}}</div>
  </div> 
</div>
</template>
<script>
import { QRating
} from 'quasar'
import Head from './common/head'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import reviewTop from './orderReivew/orderReivew-top'
export default {  
  data() { 
    const self = this   
    return {
      headTitle:'View Review',
      headright:false,
      flag:false,
      bannerIndex:"",     
      total:0,
      countter:0,
      activeIndex:1,
      imglist:[],
      sign:0,
      comment:'',
      swiperOption:{
        initialSlide:1,
        notNextTick: true,               
        onSlideChangeEnd:function(swiper){
             self.bannerIndex=swiper.activeIndex+1
             var countmin=0
             var countmax=0;
             for(var i = 0;i<self.countter;i++){
                countmin+=self.ratingListsData[i].imglists.length
             }
             for(var i = 0;i<self.countter+1;i++){
              countmax+=self.ratingListsData[i].imglists.length
           }
           if(self.bannerIndex<countmin+1){
            self.countter--
           }else if(self.bannerIndex>countmax){
            self.countter++ 
           }
           self.comment = self.ratingListsData[self.countter].desc  
        }       
      },        
      ratingListsData:[
        {
          status:'0',
          ratingModel:4,
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.',
          ratingTitle:'by custormer service',
          ratingText:'jquery vuejs reactjs webpack4.0 nodejs',
          imglists:[
            
          ],
          hintText:false
        },
        {
          status:'1',
          ratingModel:2,
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.',
          ratingTitle:'',
          ratingText:'',
          imglists:[
            {
              imgUrl:'../../statics/images/techspec/1.png'
            },
            {
              imgUrl:'../../statics/images/techspec/2.png'
            },
            {
              imgUrl:'../../statics/images/techspec/3.png'
            },            
          ],
          hintText:false
        },
        {
          status:'2',
          ratingModel:3,
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'amagin amagin amagin amagin amagin amagin amagin amagin amagin',
          ratingTitle:'Comments contain uncivilized content',
          ratingText:'AD',
          imglists:[
            {
              imgUrl:'../../statics/images/techspec/1.png'
            },
            {
              imgUrl:'../../statics/images/techspec/2.png'
            },
            {
              imgUrl:'../../statics/images/techspec/3.png'
            },
            {
              imgUrl:'../../statics/images/techspec/4.png'
            },
            {
              imgUrl:'../../statics/images/techspec/1.png'
            },
          ],
          hintText:true
        },
      ]
    }
  },
  components:{
    'v-head':Head,
    reviewTop,
    QRating,
    swiper,
    swiperSlide
  },
  mouted() {
    
  },
  computed:{
    swiper(){
     return this.$refs.myswiper.swiper
    },    
  }, 
  methods:{
    imgSwitch(ev){
      this.flag = true            
      for(var i = 0; i<ev.path[4].id;i++){
        this.sign += this.ratingListsData[i].imglists.length 
      }
      this.swiperOption.initialSlide = parseInt(ev.path[1].dataset.count,10)+this.sign  
      console.log(this.sign)
      this.swiper.init()
      this.ratingListsData.forEach((item)=>{
        item.imglists.forEach((item)=>{
          this.imglist.push(item)
        })
      })
      this.total = this.imglist.length
      this.sign=0
      this.countter=parseInt(ev.path[4].id) 
      this.comment = this.ratingListsData[this.countter].desc  
      this.setHeight()
      
    },
    setHeight(){          
      var myswiperHeight=parseFloat(window.getComputedStyle(this.$refs.myswiper.$el).height)   
      var countterHeight = parseFloat(window.getComputedStyle(this.$refs.countter).height)     
      this.$refs.commentcontent.style.height=(window.innerHeight-myswiperHeight-countterHeight)+'px'
    }  
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/


</style>