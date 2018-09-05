<template>
    <div>
        <div class="mobile-select-wrap">
            <div class="mobile-select row items-center" @click="opened=true">
              <input v-model="selectOptions.countries.select" class="col"/>
              <q-icon name="arrow_drop_down" class="q-if-control col-auto" />
            </div>
        </div>
        <q-modal v-model="opened" content-css="padding: 50px"  position="bottom">
          12122
       </q-modal>
    </div>
     
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QSearch,
  QField,
  QInput,
  QChipsInput,
  QTransition,
  QModal
} from 'quasar'
// import Recommendation from 'data/Recommendation.json'
// import commerce from 'data/commerce.json'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QSearch,
    QField,
    QInput,
    QChipsInput,
    QTransition,
    QModal
  },
  data () {
    return {
      opened:false,
    }
  },
  methods: {
  }
}
</script>


