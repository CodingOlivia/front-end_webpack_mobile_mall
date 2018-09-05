<template>  
    <div class='zldeliveryadresses'>
        <div class='zlhead'>
            <i class="icon-back"></i>
            <span class="m-weight-bold">Delivery Addresses</span>
            <i class="icon-add"></i>
        </div>
        <div class='zlmain'>
            <div class="zlcard-wrapper" v-for="(item,index) in addressData">
                <div class='zlcard'  :class="{active:curIndex==index}">
                    <div class='mymain' @click="curIndex=index">
                        <div class='myinfo'>
                            <h2 class="m-weight-bold">{{item.name}}</h2>
                            <p class="m-family-medium">{{item.address1}}</p>
                            <p class="m-family-medium">{{item.address2}}</p>
                            <p class="m-family-medium">{{item.tel}}</p>
                        </div>
                        <div class='mystar' v-if="item.selectionDefault"></div>
                    </div>
                    <div class='mysave'>
                        <div class='mysavem'>
                            <div class='left' @click="selectDefaultHandler(index)">
                                <i :class="{'active':item.selectionDefault}"></i>
                                <span class="m-family-medium m-size24 m-ytx-ml m-allcolor1">Save as Default</span>
                            </div>
                            <div class='right'>
                                <i class="edit-icon m-ytx-xxx-mr"></i>
                                <i class="del-icon" @click="delCardHandler(index)"></i>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ytx-m-no-data" v-if="this.addressData.length==0">
            <div class="img-wrap">
                <img src="../../statics/no-data.png" alt="">
                <p>No Address</p> 
            </div> 
        </div>
    </div>
</template>
<script>
import {QRadio} from 'quasar'
export default {
    data() {
        return {
           
           curIndex:'-1',
           addressData:[
               {
                   id:'0',
                   name:'Haitao Wang',
                   address1:'Software Avenae #101,',
                   address2:'JIangning District, Nanjing, jIangSu',
                   tel:'+86 185 518 8810',
                   selectionDefault:true,
               },
               {
                    id:'1',
                    name:'Haitao Wang',
                    address1:'Software Avenae #101,',
                    address2:'JIangning District, Nanjing, jIangSu',
                    tel:'+86 185 518 8810',
                    selectionDefault:false,
                }
           ]
        }
    },
    components:{
        QRadio
    },
    methods:{
        delCardHandler:function(idx){
            console.log(this.addressData.slice(idx,1))
            this.addressData.splice(idx,1)
        },
        selectDefaultHandler:function(idx){
            for(var i = 0; i<this.addressData.length;i++){
                this.addressData[i].selectionDefault=false
            }
            this.addressData[idx].selectionDefault=true
        }
    }
}
</script>
<style lang='stylus'>
   
</style>
