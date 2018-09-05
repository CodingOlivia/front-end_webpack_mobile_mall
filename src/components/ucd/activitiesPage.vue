<template>
  <div class="activitiesPage">
    <div class="banner"></div>
    <div class="bannerContent">
        <div class="bannertext" v-for="(item,index) in bannerContent">{{item}}</div>         
    </div>
    <div class="wheelSeeding">
        <swiper :options="swiperOption" ref="myswiper">
            <swiper-slide v-for="(item,index) in imgList" :key="index">
                <img :src="item.imgUrl"/>              
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>  
    </div>
    <div class="flow">
        <div class="link3g" @click="link3g">
            <div class="linktext" v-for="(item,index) in linkText1" :key="index">{{item}}</div>
            <div class="linkimg">
            <div class="go">GO</div> 
            </div> 
        </div>
        <div class="link4g" @click="link4g">
            <div class="linktext" v-for="(item,index) in linkText2" :key="index">{{item}}</div>
            <div class="linkimg">
                <div class="go">GO</div>
            </div> 
        </div>
    </div>
    <div class="footer">
        <div class="footertext">Want to know your spending and our new</div>
        <div class="footertext">plans all the time</div>
        <div class="btnbox">
             <div class="btn1">download</div>or<div class="btn2">launch</div>our mobile app.
        </div>
    </div>
  </div>
</template>  
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){        
        return{           
            bannerContent:[
                 'We have launched new 4G plans',
                 'and now our customer can get best value',
                 'of the super fast 4G network'
            ],
            linkText1:[
                'Already have a',
                '3G SIM',
                'Upgrade now'
            ],
            linkText2:[
                'Need a new',
                '4G SIM,visit out',
                'dealer hearby'
            ],
            swiperOption:{
                initialSlide:1,
                notNextTick: true,
                loop:true,
                pagination: '.swiper-pagination',                            
                slidesPerView:1.2,
                spaceBetween:20,
                centeredSlides:20,                                         
            },

            imgList:[
                {
                    imgUrl:'../../statics/images/activities/4Gunlimited.png'
                },
                {
                    imgUrl:'../../statics/images/activities/4Gbasic.png'
                },
                {
                    imgUrl:'../../statics/images/activities/4Gpremium.png'
                },
            ]       
                     
        }
    },   
    components:{
        swiper,
        swiperSlide
    },
    mounted(){
    
    },     
    methods:{
        link3g(){
            this.$router.push('/3gto4g')
        },
        link4g(){
            this.$router.push('/redplan4gdata')
        },        
    }
}
</script>
