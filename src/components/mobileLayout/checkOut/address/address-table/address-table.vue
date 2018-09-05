<template>
  <div class="addressTableDiv">
    <!-- <div>
       <button @click="addhtml()" valut="button" style="width:100Px; height:38px;"/>
       <div id="a"></div>
    </div> -->
    <div class="checkHr"><span></span></div>
    <div class="table">
      <div class="main">

        <!-- <div>
          <input type="text" v-model="newAddress.firstName.value" @focus="newAddress.firstName.active=true" @blur="newAddress.firstName.active=false" placeholder="First Name"><i v-if="newAddress.firstName.value.length>0&&newAddress.firstName.active" @click="newAddress.firstName.value=''">close</i>
          <span class="help is-danger">12112312312313123</span>
        </div> -->
        <div>
          <input type="text" v-model="newAddress.lastName.value" @focus="newAddress.lastName.active=true" @blur="newAddress.lastName.active=false" placeholder="Last Name"><i v-if="newAddress.lastName.value.length>0&&newAddress.lastName.active" @click="newAddress.lastName.value=''">close</i>
        </div>
        <div class="select-sex">
          <div><i v-bind:class="{'active':newAddress.sex.value === 0}" @click="newAddress.sex.value = 0"></i><span>Mr.</span></div>
          <div><i v-bind:class="{'active':newAddress.sex.value === 1}" @click="newAddress.sex.value = 1"></i><span>Ms.</span></div>
        </div>
        <div>
          <input type="telephone" v-model="newAddress.phone.value" @focus="newAddress.phone.active=true" @blur="newAddress.phone.active=false" placeholder="Mobile Phone"><i v-if="newAddress.phone.value.length>0&&newAddress.phone.active" @click="newAddress.phone.value=''">close</i>
        </div>
      </div>
      <div class="main">
        <div class="mapBtn">
          <div class="name">
            <i></i>
            <span>Map</span>
          </div>
          <div class="btn">
            <q-toggle color="secondary" v-model="map.checked" @focus="jump('/Market/Checkout/Address/Map', 450)" />
          </div>
        </div>
        <div>
            <div class="mobile-select row items-center" @click="showDrop(selectOptions.countries,'countries','countries')">
              <div class="col text-black">
                {{selectOptions.countries.selectLabel}}
                <input v-model="selectOptions.countries.select"  type="hidden" />
              </div>
              <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
            </div>
        </div>
        <div>
            <div class="mobile-select row items-center" @click="showDrop(selectOptions.province,'provice','province')">
              <div class="col text-black">
                {{selectOptions.province.selectLabel}}
                <input v-model="selectOptions.province.select"  type="hidden" />
              </div>
              <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
            </div>
        </div>
        <div>
            <div class="mobile-select row items-center" @click="showDrop(selectOptions.city,'city','city')">
              <div class="col text-black">
                {{selectOptions.city.selectLabel}}
                <input v-model="selectOptions.city.select"  type="hidden" />
              </div>
              <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
            </div>
        </div>
        <div>
            <div class="mobile-select row items-center" @click="showDrop(selectOptions.district,'district','district')">
              <div class="col text-black">
                {{selectOptions.district.selectLabel}}
                <input v-model="selectOptions.district.select"  type="hidden" />
              </div>
              <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
            </div>
        </div>
        <!-- <div>
          <q-dialog-select 
                
                v-model="selectOptions.countries.select"
                :options="selectOptions.countries.options"
              />
        </div>
        <div>
          <q-dialog-select
            v-model="selectOptions.province.select"
            :options="selectOptions.province.options"
          />
        </div>
        <div>
          <q-dialog-select
            v-model="selectOptions.city.select"
            :options="selectOptions.city.options"
          />
        </div>
        <div>
          <q-dialog-select
            v-model="selectOptions.district.select"
            :options="selectOptions.district.options"
          />
        </div> -->
        <div>
          <input type="text" v-model="newAddress.street.value" @focus="newAddress.street.active=true" @blur="newAddress.street.active=false" placeholder="Shipping address"><i v-if="newAddress.street.value.length>0&&newAddress.street.active" @click="newAddress.street.value=''">close</i>
        </div>
        <div>
          <input type="text" v-model="newAddress.address.value" @focus="newAddress.address.active=true" @blur="newAddress.address.active=false" placeholder="Apt,Suite,Blog,Gate Code. (optional)"><i v-if="newAddress.address.value.length>0&&newAddress.address.active" @click="newAddress.address.value=''">close</i>
        </div>
        <div>
          <input type="text" v-model="newAddress.zipcode.value" @focus="newAddress.zipcode.active=true" @blur="newAddress.zipcode.active=false" placeholder="ZIP Code (optional)"><i v-if="newAddress.zipcode.value.length>0&&newAddress.zipcode.active" @click="newAddress.zipcode.value=''">close</i>
        </div>
      </div>
      <div class="check-default"><i v-bind:class="{'active':newAddress.default.value}" @click="newAddress.default.value=!newAddress.default.value">check</i><span>Save as Default Address</span></div>
      <div class="btn-save" @click="save()">SAVE</div>
    </div>
    <q-modal ref="modifyModal" content-css="padding: 50px"  position="bottom">
         <div class="mobile-select-model">
               <div class="mobile-select-title">{{selectIndex.title}}
                   <span class="model-select-close" @click="$refs.modifyModal.close()"></span>
               </div>
               <div class="mobile-select-con">
                   <div class="mobile-select-item " :class="{'active':selectIndex.select==item.value}"  v-for="(item,index) in selectIndex.options" @click="setData(item)"   >{{item.label}}</div>
               </div>
          </div>
    </q-modal>
  </div>
</template>

<script>
import {
  QToggle,
  QDialogSelect,
  QField,
  QIcon,
  QModal
} from 'quasar'
export default {
  components: {
    QToggle,
    QDialogSelect,
    QField,
    QIcon,
    QModal
  },
  data () {
    return {
      opened:false,
      newAddress: {
        firstName: {
          active: false,
          value: ''
        },
        lastName: {
          active: false,
          value: ''
        },
        sex: {
          active: false,
          value: 0
        },
        phone: {
          active: false,
          value: ''
        },
        street: {
          active: false,
          value: ''
        },
        address: {
          active: false,
          value: ''
        },
        zipcode: {
          active: false,
          value: ''
        },
        default: {
          active: false,
          value: true
        },
        save: false
      },
      map: {
        checked: false
      },
      selectIndex:{
         selectData:'',
         select: '0',
         selectLabel:'',
         title:'',
         options: []
      },
      selectOptions: {
        countries: {
          select: '0',
          selectLabel:'Countries',
          options: [
            {
              label: 'Countries',
              value: '0'
            },
            {
              label: 'Countrie1',
              value: '1'
            },
            {
              label: 'Countrie2',
              value: '2'
            },
            {
              label: 'Countrie3',
              value: '3'
            }
          ]
        },
        province: {
          select: '0',
          selectLabel:'Province',
          options: [
            {
              label: 'Province',
              value: '0'
            },
            {
              label: 'Province1',
              value: '1'
            },
            {
              label: 'Province2',
              value: '2'
            },
            {
              label: 'Province3',
              value: '3'
            }
          ]
        },
        city: {
          select: '0',
          selectLabel:'City',
          options: [
            {
              label: 'City',
              value: '0'
            },
            {
              label: 'city1',
              value: '1'
            },
            {
              label: 'city2',
              value: '2'
            },
            {
              label: 'city3',
              value: '3'
            }
          ]
        },
        district: {
          select: '0',
           selectLabel:'District',
          options: [
            {
              label: 'District',
              value: '0'
            },
            {
              label: 'District1',
              value: '1'
            },
            {
              label: 'District2',
              value: '2'
            },
            {
              label: 'District3',
              value: '3'
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.socket.$on('view-address-map-list', function (val) {
      if (val.address === undefined) return
      this.newAddress = val
    }.bind(this))
  },
  methods: {
    addhtml(){
        var divMain=document.getElementById('a');
        divMain.innerHTML='<span class="is-danger">56565656565</span>'
    },
    jump (to, time) {
      if (time) {
        setTimeout(function () {
          this.socket.$emit('address-table-list', this.newAddress)
          this.$router.push(to)
        }.bind(this), time)
      }
      else {
        this.socket.$emit('address-table-list', this.newAddress)
        this.$router.push(to)
      }
    },
    save () {
      this.newAddress.save = true
      this.socket.$emit('address-table-save-list', this.newAddress)
      this.$router.push('/Market/Checkout/Address')
    },
    showDrop(data,title,name){
      this.selectIndex.options=data.options;
      this.selectIndex.select=data.select;
      this.selectIndex.title=title;
      this.selectIndex.selectData=name;
      this.selectIndex.selectLabel=data.selectIndex;
      //this.opened=true;
      this.$refs.modifyModal.open();
    },
    setData(item){
       this.selectIndex.select=item.value;
       this.selectIndex.selectLabel=item.label;
       this.selectOptions[this.selectIndex.selectData].select=item.value;
       this.selectOptions[this.selectIndex.selectData].selectLabel=item.label;
       //this.opened=false;
       this.$refs.modifyModal.close()
    }
  }
}
</script>

