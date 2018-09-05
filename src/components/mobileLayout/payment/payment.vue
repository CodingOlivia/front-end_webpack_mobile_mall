<template>
  <div>
  <div class="payment-top m-family-medium" >
      <div class="payment-title">The order <span>10000160000005</span> has been created.</div>
      <div class="payment-detail">
          In order to complete the order successfully, 
          please finish payment after check out in 24 hour.
      </div>
  </div>
  <div class="paymentDiv">
    <div class="checkOutMain">
      <div class="top">
        <ul>
          <li class="active">Payment Method</li>
        </ul>
      </div>
      <!-- <ul>
        <li>The order <span class="uuid">1006000005</span> has been created.</li>
        <li>Remaining payment time <span class="time">23:59:25</span></li>
      </ul> -->
    </div>
    <div class="checkOutOther">
      <ul class="menu">
        <li v-for="card, index in payStyle.cards" v-if="index<payStyle.max">
          <div>
            <div class="left"><i :style="{background: `url(${card.icon}) left center / 100% no-repeat`}"></i><span>{{card.name}}</span></div>
            <div class="right" @click="payStyle.active=card.uuid"><i v-bind:class="{'active':payStyle.active===card.uuid}"></i></div>
          </div>
          <div class="extend" v-if="card.extends.length>0" v-for="extend in card.extends">
            <div class="right"><span>{{extend.name}}</span><i></i></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="checkOutMore" v-if="payStyle.max!==payStyle.cards.length" @click="payStyle.max=payStyle.cards.length">
      <span>MORE</span><i></i>
    </div>
    <div class="payBtn">
      <div class="left">
        <span>Total:</span>
        <span class="total">${{'1161.00'}}</span>
      </div>
      <div class="right">
        <router-link to="/Market/Payment">PAY</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      payStyle: {
        active: '003000',
        max: 4,
        cards: [
          {
            uuid: '001000',
            icon: 'statics/mobileImages/payment/ico_card.png',
            name: 'Credit Card /Debit Card',
            extends: [
              {
                uuid: '001001',
                name: 'CMB Credit Card (9808)'
              }
            ]
          },
          {
            uuid: '002000',
            icon: 'statics/mobileImages/payment/ico_apple.png',
            name: 'Apple Pay',
            extends: []
          },
          {
            uuid: '003000',
            icon: 'statics/mobileImages/payment/ico_paypal.png',
            name: 'Paypal',
            extends: []
          },
          {
            uuid: '004000',
            icon: 'statics/mobileImages/payment/ico_bitcoin.png',
            name: 'Bitcoin Pay',
            extends: []
          },
          {
            uuid: '005000',
            icon: 'statics/mobileImages/payment/ico_apple.png',
            name: 'Apple Pay',
            extends: []
          },
          {
            uuid: '006000',
            icon: 'statics/mobileImages/payment/ico_paypal.png',
            name: 'Paypal',
            extends: []
          }
        ]
      },
      checkOut: {
        data: [
          {
            isCombo: true,
            children: [
              {
                image: 'statics/mobileImages/checkOut/1.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: '1290',
                type: 'Device',
                more: {
                  memory: '256 GB',
                  primary: '198 Bundle',
                  color: 'Space gray'
                }
              },
              {
                image: 'statics/mobileImages/checkOut/2.jpg',
                name: '198 Bundle',
                number: 1,
                price: '198.00 /mo.',
                type: 'Plans',
                more: {
                  voice: '300min',
                  SMS: 'unlimited',
                  data: '20GB'
                }
              }
            ]
          },
          {
            isCombo: false,
            children: [
              {
                image: 'statics/mobileImages/checkOut/3.jpg',
                name: 'Plwats Please E-Book',
                number: 1,
                price: '12.00',
                type: 'E-books',
                more: {
                  author: 'Potter, Beatrix',
                  publisher: 'Lerner Publishing Group'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>