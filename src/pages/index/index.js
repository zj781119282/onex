import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import loading from 'comp/loading/loading.vue'
import banner from './components/banner/banner.vue'
import product from './components/product/product.vue'
import service from './components/service/service.vue'
import tech from './components/tech/tech.vue'
import promise from './components/promise/promise.vue'
import download from './components/download/download.vue'
import tip from 'comp/download/download.vue'

export default {
  name: 'index',
  components: {
    headTop,
    foot,
    loading,
    banner,
    product,
    service,
    tech,
    promise,
    download,
    tip,
  },
  data() {
    return {
      loaded: true,
      showTip: false,
    }
  },
  mounted() {
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
  methods: {
    showDownloadTip() {
      const _this = this;
      this.showTip = true;
      setTimeout(function() {
        _this.showTip = false;
      }, 3000);
    },
  },
}
