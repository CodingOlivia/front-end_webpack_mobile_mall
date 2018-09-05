<template>
  <div class="overview">
    <img v-for="gallery in Gallery" :src=gallery.src class="responsive">
  </div>
</template>
<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      Gallery: [
        {'src': 'statics/mobileImages/products/Overview1.jpg'},
        {'src': 'statics/mobileImages/products/Overview2.jpg'}
      ]
    }
  }
}
</script>