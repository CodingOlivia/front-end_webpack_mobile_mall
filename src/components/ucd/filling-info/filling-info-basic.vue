<template>
  <div >
    <div class="fillingBox-mobile">
      <div class="fillHr"><span></span></div>
      <div class="main">
        <div class="deliveryDetails">
          <div class="contain">
            <div class="panel">
              <div class="panel-con m-ytx-xxxx-mt">
                  <div class="row">
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.firstName.value" @focus="newAddress.firstName.active=true" @blur="newAddress.firstName.active=false" placeholder="First Name"><i v-if="newAddress.firstName.value.length>0&&newAddress.firstName.active" @click="newAddress.firstName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.middleName.value" @focus="newAddress.middleName.active=true" @blur="newAddress.middleName.active=false" placeholder="Middle Name"><i v-if="newAddress.middleName.value.length>0&&newAddress.middleName.active" @click="newAddress.middleName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.lastName.value" @focus="newAddress.lastName.active=true" @blur="newAddress.lastName.active=false" placeholder="Last Name"><i v-if="newAddress.lastName.value.length>0&&newAddress.lastName.active" @click="newAddress.lastName.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                      <q-field class="field-inp  m-top-1"
                          :error="error4"
                          error-label="Please enter!"
                        >
                          <!-- <q-input class="field-view-inp" stack-label="" v-model="baseInfo[3]" /> -->
                          <q-datetime
                            class="field-view-inp "
                            stack-label=""
                            placeholder="Date of Birth"
                            :class="{'dateEmpty':baseInfo[0]==''}"
                            v-model="baseInfo[0]"
                        />
                        </q-field>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.contactNumber.value" @focus="newAddress.contactNumber.active=true" @blur="newAddress.contactNumber.active=false" placeholder="Contact Number"><i v-if="newAddress.contactNumber.value.length>0&&newAddress.contactNumber.active" @click="newAddress.contactNumber.value=''">close</i>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-y-inp m-top-1">
                          <input type="text" v-model="newAddress.emailAddress.value" @focus="newAddress.emailAddress.active=true" @blur="newAddress.emailAddress.active=false" placeholder="Email Address"><i v-if="newAddress.emailAddress.value.length>0&&newAddress.emailAddress.active" @click="newAddress.emailAddress.value=''">close</i>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="filling-mobile-footer">
          <div class="filling-footer ">
            <div class="btn" >SUBMIT</div>
          </div>
       </div>
      </div>
    </div>
   
</div>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QField,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon,
  QItemTile,
  QInput,
  QDatetime,
  QRadio,
  QToggle,
  QModal
} from 'quasar'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
    QInput,
    QDatetime,
    QRadio,
    QToggle,
    QModal
  },
  data () {
    return {
      error4:false,
      baseInfo:['1988-2-24'],
      newAddress: {
        firstName: {
          active: false,
          value: 'Stevent'
        },
        middleName: {
          active: false,
          value: 'Paul'
        },
        lastName: {
          active: false,
          value: 'Jobs'
        },
        contactNumber: {
          active: false,
          value: '1856552214'
        },
        emailAddress: {
          active: false,
          value: 'xx@gmail.com'
        },
        save: false
      },

    }
  },
  methods:{

  },
  mounted () {

  },
  watch: {
  }
}
</script>

