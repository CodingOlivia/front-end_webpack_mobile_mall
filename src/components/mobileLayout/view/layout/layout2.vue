<template>
  <!-- layout2 -->
  <div class="column mobileBox">
    <div class="flex mobileTop"><r-other-heard :type.sync="type" /></div>
    <div class="flex mobileContent"><router-view /></div>
  </div>
</template>

<script>
import ROtherHeard from 'components/mobileLayout/otherHeard/otherHeard'
export default {
  components: {
    ROtherHeard
  },
  data () {
    return {
      type: 'order',
      newAddress: {}
    }
  },
  mounted () {
    // 新增
    this.socket.$on('address-add-list', function (val) {
      this.newAddress = val
    }.bind(this))
    // 修改
    this.socket.$on('address-edit-list', function (val) {
      if (val.address === undefined) return
      this.newAddress = val
    }.bind(this))
    // address-table中转数据
    this.socket.$on('address-table-list', function (val) {
      if (val.address === undefined) return
      this.newAddress = val
    }.bind(this))
    // address-table保存数据
    this.socket.$on('address-table-save-list', function (val) {
      if (val.address === undefined) return
      this.newAddress = val
    }.bind(this))
    // address-map中转数据
    this.socket.$on('address-map-list', function (val) {
      if (val.address === undefined) return
      this.newAddress = val
    }.bind(this))
    // console.log(this.$route)
    if (this.$route.path.toUpperCase() === '/SIGN') {
      this.type = 'sign'
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS') {
      this.type = 'address'
      setTimeout(function () {
        this.socket.$emit('view-address-list', this.newAddress)
      }.bind(this), 300)
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS/TABLE') {
      // this.newAddress = {}
      this.type = 'address-table'
      this.newAddress.save = false
      setTimeout(function () {
        this.socket.$emit('view-address-map-list', this.newAddress)
      }.bind(this), 300)
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS/MAP') {
      this.type = 'address-map'
      setTimeout(function () {
        this.socket.$emit('view-address-table-list', this.newAddress)
      }.bind(this), 300)
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/PAYMENT') {
      this.type = 'payment'
    }
    else {
      this.type = 'order'
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      if (to.path.toUpperCase() === '/SIGN') {
        this.type = 'sign'
      }
      else if (to.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS') {
        this.type = 'address'
        setTimeout(function () {
          this.socket.$emit('view-address-list', this.newAddress)
        }.bind(this), 300)
      }
      else if (to.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS/TABLE') {
        // this.newAddress = {}
        this.type = 'address-table'
        this.newAddress.save = false
        setTimeout(function () {
          this.socket.$emit('view-address-map-list', this.newAddress)
        }.bind(this), 300)
      }
      else if (to.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS/MAP') {
        this.type = 'address-map'
        setTimeout(function () {
          this.socket.$emit('view-address-table-list', this.newAddress)
        }.bind(this), 300)
      }
      else if (to.path.toUpperCase() === '/MARKET/PAYMENT') {
        this.type = 'payment'
      }
      else {
        this.type = 'order'
      }
    }
  }
}
</script>
