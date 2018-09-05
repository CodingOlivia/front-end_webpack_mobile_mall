<template>
  <div class="gallery">
    <q-gallery-carousel
        horizontal-quick-view
        infinite
        autoplay
        fullscreen  
        :src="slider" 
        class="imagesbox" />
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
      slider: [
        'statics/mobileImages/products/GalleryBanner1.jpg',
        'statics/mobileImages/products/GalleryBanner2.jpg',
        'statics/mobileImages/products/GalleryBanner3.jpg',
        'statics/mobileImages/products/GalleryBanner4.jpg'
      ]
    }
  }
}
</script>