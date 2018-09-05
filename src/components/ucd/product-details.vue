<template>
<div class="product-details">
  <div class="container">
    <productDetail></productDetail>
    <div class="card-wrapper m-ytx-xxxx-mt" v-for="(item,index) in ratingListsData" :key='item.status' ref="zlviewreviewbox" :id="index">
        <div class="card-top">
          <div class="left">
            <img :src="item.protrait">
          </div>
          <div class="right">
            <p class="label m-size28 m-weight-bold m-allcolor1">{{item.account}}</p>
            <q-rating readonly v-model="ratingModel" :max='5' class="rating-icon"></q-rating>
            <p class="date m-size28 m-allcolor3">{{item.date}}</p>
          </div>
        </div>
        <p class="m-size28 rating-desc m-allcolor1">{{item.desc.substring(0,item.count)}}<span :ref="'more'+item.status" @click='loadmore(Number(item.status))'>加载更多...</span></p>
        <div class="text-desc m-ytx-clearfix">
            <div class="m-size26 txt label m-ytx-s-mr m-weight-bold m-allcolor1">by custormer service:</div>
            <div class="m-size26 txt">{{item.ratingText}}</div>        
        </div>
        <ul class="list-box m-ytx-clearfix" :data-count="index">
          <li class="list-item" v-for="(list,index) in item.imglists"  :key='index'>
            <div class="img-wrap" @click="imgSwitch" :data-count="index">
              <img :src="list.imgUrl">
            </div>
          </li>
        </ul>
        <div class="attr-wrapper">
          <span class="attr-tag m-size24 m-weight-bold m-allcolor3s" v-for="value in item.attrs">{{value}}</span>
        </div>
    </div>
  </div>
  <button round v-back-to-top.animate="{offset:500,duration:200}" class="fixed-bottom-right back-to-top-style" style="margin:0 0.3rem 0.3rem 0"></button>
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
import { QRating,QBtn,BackToTop
} from 'quasar'
import Head from './common/head'
import productDetail from './product-details-top'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    const self = this  
    return {
      headTitle:'View Review',
      headright:false,
      ratingModel:4,
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
          account:'251824653@qq.com',
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'amagin amagin amagin amagin amagin amagin amagin amagin amagin',
          ratingText:'jquery vuejs reactjs webpack4.0 nodejs',
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
          ],
          attrs:['Black','64G'],
          count:30,
          num:30,
          flag:true,
        },
        {
          status:'1',
          account:'251824653@qq.com',
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'We have launched new and of the super now our customer',
          ratingText:'jquery vuejs reactjs webpack4.0 nodejs',
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
          ],
          attrs:['Black','64G'],
          count:9,
          num:9,
          flag:true
        },
        {
          status:'2',
          account:'251824653@qq.com',
          protrait:'../../statics/images/Reviews/avatar1.png',
          date:'2018-3-6',
          desc:'摸透Vue.js，无论是桌面端还是移动端, 让你从容面对！',       
                   ratingText:'jquery vuejs reactjs webpack4.0 nodejs',
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
          ],
          attrs:['Black','64G'],
          count:25,
          num:25,
          flag:true
        },
      ]
    }
  },
  components:{
    'v-head':Head,
    productDetail,
    QRating,
    QBtn,
    swiper,
    swiperSlide
  },
  mouted() {

  },
  directives:{BackToTop},
  methods:{
    loadmore(index){           
      if(this.ratingListsData[index].flag){
        this.ratingListsData[index].count = this.ratingListsData[index].desc.length
        this.$refs['more'+this.ratingListsData[index].status][0].innerText='收起'
      }else{
        this.ratingListsData[index].count = this.ratingListsData[index].num
        this.$refs['more'+this.ratingListsData[index].status][0].innerText='加载更多...'
      }
      this.ratingListsData[index].flag=!this.ratingListsData[index].flag
    },
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
     
    },
    
  },
  computed:{
    swiper(){
     return this.$refs.myswiper.swiper
    },    
  }, 
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>