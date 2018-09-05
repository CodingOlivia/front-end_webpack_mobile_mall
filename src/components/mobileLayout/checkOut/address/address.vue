<template>
  <div class="addressDiv">
    <div class="address">
      <div class="main" v-for="(list, index) in addressList">
        <div class="left">
          <i :class="{'show':list.default.value, 'hide':!list.default.value}" @click="show(index)"></i>
          <div class="content">
            <div>
              <span class="name">{{list.sex.value===0?'Mr.':'Ms.'}} {{list.firstName.value}} {{list.lastName.value}}</span>&nbsp;/&nbsp;<span class="number">{{list.phone.value}}</span>
            </div>
            <div>
              <span class="address">{{list.address.value}}</span>
            </div>
          </div>
        </div>
        <i @click="edit(list)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: {},
      addressList: [
        {
          firstName: {
            active: false,
            value: 'Avery'
          },
          lastName: {
            active: false,
            value: 'Tian'
          },
          sex: {
            active: false,
            value: 0
          },
          phone: {
            active: false,
            value: '18688082158'
          },
          address: {
            active: false,
            value: '219 University Ave, Palo Alto, CA 94301'
          },
          street: {
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
          save: true
        },
        {
          firstName: {
            active: false,
            value: 'Avery'
          },
          lastName: {
            active: false,
            value: 'Tian'
          },
          sex: {
            active: false,
            value: 0
          },
          phone: {
            active: false,
            value: '18688082158'
          },
          address: {
            active: false,
            value: '306 University Ave, Palo Alto, CA 94301'
          },
          street: {
            active: false,
            value: ''
          },
          zipcode: {
            active: false,
            value: ''
          },
          default: {
            active: false,
            value: false
          },
          save: true
        }
      ]
    }
  },
  mounted () {
    this.socket.$on('view-address-list', function (val) {
      if (val.address === undefined || !val.save) return false
      let same = false
      this.addressList.map(function (l) {
        if (l === val) {
          same = true
        }
      })
      if (same) return false
    }.bind(this))
  },
  methods: {
    jump (val) {
      this.openGo = val
    },
    show (index) {
      this.addressList.map(function (res, i) {
        if (index === i) {
          res.default.value = true
        }
        else {
          res.default.value = false
        }
      })
    },
    handleBlur () {
      for (let _type in this.state) {
        for (let _name in this.state[_type]) {
          this.state[_type][_name].blur = true
          // for (let _attr in this.state[_type][_name]) {
          //   this.state[_type][_name].blur = false
          // }
        }
      }
    },
    edit (item) {
      this.socket.$emit('address-edit-list', item)
      this.$router.push('/Market/Checkout/Address/Table')
    }
  },
  watch: {
    openGo: function (val) {
      // this.dispatchData(val)
      this.socket.$emit('open-go', val)
    }
  }
}
</script>
