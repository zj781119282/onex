import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import loading from 'comp/loading/loading.vue'
import banner from './components/banner/banner.vue'
import product from './components/product/product.vue'
import about from './components/about/about.vue'
import service from './components/service/service.vue'
import promise from './components/promise/promise.vue'
import download from './components/download/download.vue'

export default {
  name: 'index',
  components: {
    headTop,
    foot,
    loading,
    banner,
    product,
    about,
    service,
    promise,
    download,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
}
