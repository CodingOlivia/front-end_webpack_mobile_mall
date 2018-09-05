<template>
  <div class="commerceDiv">
    <div class="commerceMain">
      <div class="mySelfDiv">
        <div>
          <i class="heardImage" :style="{ background: 'url(statics/mobileImages/commerce/heard.png) center top / 100% no-repeat' }"></i>
          <div class="info">
            <div><span class="infoName">Sample Userid</span><span class="inforank">LV5</span></div>
            <div><span class="rankProgress transition" :style="{width: '60%'}"></span></div>
          </div>
        </div>
        <i :style="{ background: 'url(statics/mobileImages/commerce/ico_setting.png) center / 100% no-repeat' }"></i>
      </div>
      <ul class="menu">
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_complete.png) center / 100% no-repeat' }"></i>
          <router-link to="/market/Commerce">
            <span class="left">Contracts Expiration</span>
            <span class="right"><span>2018/04/01</span><i>></i></span>
          </router-link>
        </li>
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_order.png) center / 100% no-repeat' }"></i>
          <router-link to="/Market/Commerce/MyOrder">
            <span class="left">My Order</span>
            <span class="right"><span class="node"></span><i>></i></span>
          </router-link>
        </li>
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_message.png) center / 100% no-repeat' }"></i>
          <router-link to="/market/Commerce">
            <span class="left">Favorites</span>
            <span class="right"><span class="msg">20</span><i>></i></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="commerceOther">
        <ul class="menu">
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_favourite.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Favorites</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_history.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Browsing History</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_comments.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">My Comments</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_costomer.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Customer Service</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
        </ul>
    </div>
    <router-link to="/Sign" class="signOut"><span>Sign out</span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>