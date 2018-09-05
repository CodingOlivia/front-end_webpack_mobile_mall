<template>
  <div class="addressMapDiv">
    <div class="map">
      <div class="title"><i class="none">none</i><div><i>tab</i><span>ShenZhen</span></div><i @click="hideMap">down</i></div>
      <div class="gdmap transition" v-bind:class="{'hide-map':!showMap}"></div>
      <div class="address-lists" v-bind:class="{'hide-map':!showMap}">
        <div class="left" v-for="(list, index) in mapLists" @click="clickAddress(index)">
          <i v-bind:class="{'active':list.active}"></i>
          <div class="content">
            <div>
              <span class="name">{{list.name}}</span>
            </div>
            <div>
              <span class="address">{{list.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMap: true,
      newAddressList: {},
      mapLists: [
        {
          active: true,
          name: 'Huawei',
          address: '219 University Ave, Palo Alto, CA 94301'
        },
        {
          active: false,
          name: 'Sample address',
          address: '306 University Ave, Palo Alto, CA 94301'
        },
        {
          active: false,
          name: 'Sample address',
          address: '308 University Ave, Palo Alto, CA 94301'
        },
        {
          active: false,
          name: 'Sample address',
          address: '326 University Ave, Palo Alto, CA 94301'
        }
      ]
    }
  },
  mounted () {
    this.socket.$on('address-map-search', function (val) {
      this.search(val)
    }.bind(this))
    this.socket.$on('view-address-table-list', function (val) {
      if (val.address === undefined) return
      this.newAddressList = val
      let a = false
      let index = 0
      this.mapLists.map(function (l, i) {
        if (l.address === val.address.value) {
          a = true
          index = i
        }
      })
      if (a) {
        this.mapLists[0].active = false
        this.mapLists[index].active = true
      }
    }.bind(this))
  },
  methods: {
    search (val) {
      console.log(val)
    },
    hideMap () {
      this.showMap = !this.showMap
    },
    clickAddress (index) {
      this.mapLists.map(function (l, i) {
        l.active = false
        if (i === index) {
          l.active = true
          this.newAddressList.address.value = l.address
        }
      }.bind(this))
      this.socket.$emit('address-map-list', this.newAddressList)
      this.$router.push('/Market/Checkout/Address/Table')
    }
  }
}
</script>
