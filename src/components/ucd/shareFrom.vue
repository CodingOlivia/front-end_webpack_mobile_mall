<template>
  <div >
    <div class="checkShare-wrap">
        <div class="check-hr"></div>
        <div class="checkShare-inner m-ytx-xxxx-mt">
            <div class="row">
              <div class="col-12">
                  <div class="mobile-y-inp">
                    <input type="text" v-model="share.value" @focus="share.active=true" @blur="share.active=false" placeholder="Enter the sharer's mobile number"><i v-if="share.value.length>0&&share.active" @click="share.value=''">close</i>
                  </div>
              </div>
              
            </div>
        </div>
        <div class="share-footer">
          <div class="btn" >SAVE</div>
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
      share: {
        active: false,
        value: ''
      }

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

