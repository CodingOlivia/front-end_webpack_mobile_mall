import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Platform } from 'quasar'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/', // 首页
      redirect: '/Home',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'Home', component: load('mobileLayout/home/home') }
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Search',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'Search', component: load('mobileLayout/search/search') }, // 搜索页
        { path: 'Commerce', component: load('mobileLayout/commerce/commerce') }, // 个人中心页
        { path: 'Shoppingbag', component: load('mobileLayout/shoppingBag/shoppingBag') }, // 购物车页
        { path: 'Checkout', component: load('mobileLayout/checkOut/checkOut') } // 商品确认页
        // { path: 'Payment', component: load('mobileLayout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/',
      redirect: '/Sign',
      component: load('mobileLayout/view/layout/layout2'),
      children: [
        { path: 'Sign', component: load('mobileLayout/sign/sign') } // 登陆注册页
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Commerce/MyOrder',
      component: load('mobileLayout/view/layout/layout2'),
      children: [
        { path: 'Commerce/MyOrder', component: load('mobileLayout/commerce/order/order') }, // 个人订单页
        { path: 'Checkout/Address', component: load('mobileLayout/checkOut/address/address') }, // 添加地址
        { path: 'Checkout/Address/Table', component: load('mobileLayout/checkOut/address/address-table/address-table') }, // 添加地址
        { path: 'Checkout/Address/Map', component: load('mobileLayout/checkOut/address/address-map/address-map') }, // 添加地址
        { path: 'Payment', component: load('mobileLayout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/', // 商品详情页
      redirect: '/Products',
      component: load('mobileLayout/view/layout/layout3'),
      children: [
        { path: 'Products', component: load('mobileLayout/products/products') }
      ]
    },
    // {
    //   path: '/ProductMenu', // 商品菜单页
    //   redirect: '/ProductMenu/Overview',
    //   component: load('mobileLayout/view/layout/layout3'),
    //   children: [
    //     // { path: 'ProductMenu', component: load('mobileLayout/products/productMenu/productMenu') },
    //     { path: 'Overview', component: load('mobileLayout/products/overview/overview') },
    //     { path: 'Gallery', component: load('mobileLayout/products/gallery/gallery') },
    //     { path: 'Techspec', component: load('mobileLayout/products/techSpec/techSpec') },
    //     { path: 'Reviews', component: load('mobileLayout/products/reviews/reviews') }
    //   ]
    // },
    // ucd 的路由配置
    { path: '/login-mobile', component: load('ucd/login/login-mobile') },
    { path: '/forgotPassword-mobile', component: load('ucd/forgotPassword/forgotPassword-mobile') },
    { path: '/register-mobile', component: load('ucd/register/register-mobile') },
    { path: '/Rechange', component: load('ucd/common/Rechange') },
    { path: '/myBusiness', component: load('ucd/common/myBusiness') },
    { path: '/confirm-information', component: load('ucd/confirm-information') },
    { path: '/credit-information', component: load('ucd/credit-information') },
    { path: '/deliveryDetail', component: load('ucd/deliveryDetail') },
    { path: '/filling-info', component: load('ucd/filling-info/filling-info') },
    { path: '/filling-info-bill', component: load('ucd/filling-info/filling-info-bill') },
    { path: '/filling-info-basic',component: load('ucd/filling-info/filling-info-basic') },
    { path: '/filling-index',component: load('ucd/filling-info/filling-index') },
    { path: '/filling-index-supplement',component: load('ucd/filling-info/filling-index-supplement') },
    { path: '/myAssets', component: load('ucd/myAssets') },
    { path: '/orderDetail', component: load('ucd/orderDetail') },
    { path: '/wishlist', component: load('ucd/common/wishlist') },
    { path: '/recommendation', component: load('ucd/common/recommendation') },
    { path: '/mybrowsinghistory', component: load('ucd/common/mybrowsinghistory') },
    { path: '/head', component: load('ucd/common/head') },
    { path: '/changeprofile', component: load('ucd/basicInfo/change-profile') },
    { path: '/setting', component: load('ucd/setting') },
    { path: '/basicinfo', component: load('ucd/basicInfo/basic-info') },
    { path: '/changenickname', component: load('ucd/basicInfo/change-nickname') },
    { path: '/accountsecurity', component: load('ucd/accountSecurity/account-security') },
    { path: '/bindemail', component: load('ucd/accountSecurity/bind-email') },
    { path: '/bindmobilenumber', component: load('ucd/accountSecurity/bind-mobile-number') },
    { path: '/changemobilenumber', component: load('ucd/accountSecurity/change-mobile-number') },
    { path: '/unbundledmobilenumber', component: load('ucd/accountSecurity/unbundled-mobile-number') },
    { path: '/changepassword', component: load('ucd/accountSecurity/change-password') },
    { path: '/orderReivew', component: load('ucd/orderReivew/orderReivew') },
    { path: '/deliveryAddress', component: load('ucd/delivery-address') },
    { path: '/viewreview', component: load('ucd/view-review') },
    { path: '/orderReivew-success', component: load('ucd/orderReivew/orderReivew-success') },
    { path: '/productdetails', component: load('ucd/product-details') },
    { path: '/productdetailstop', component: load('ucd/product-details-top') },  

    { path: '/shareFrom', component: load('ucd/shareFrom') },

    { path: '/activitiesPage', component: load('ucd/activitiesPage') },
    




    { path: '/redplan4gdata', component: load('ucd/red-plan-4g-data') },
    { path: '/3gto4g', component: load('ucd/3G-to-4G') },
    { path: '/edit-4GData', component: load('ucd/edit-4GData') },
    // { path: '/change-success', component: load('ucd/change-success') },
    {
      path: '/', // 商品详情页
      redirect: '/change-success',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'change-success', component: load('ucd/change-success') }
      ]
    },

    
    
    

    




    
   
    
    
 

    
    
    
    
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
