import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import banner from './components/banner/banner.vue'
import decenter from './components/decenter/decenter.vue'
import multiple from './components/multiple/multiple.vue'
import oneStop from './components/one-stop/one-stop.vue'
import wallet from './components/wallet/wallet.vue'
import safety from './components/safety/safety.vue'
import undertake from './components/undertake/undertake.vue'
import alipay from './components/alipay/alipay.vue'
import loading from 'comp/loading/loading.vue'

export default {
  name: 'index',
  components: {
    headTop,
    foot,
    banner,
    decenter,
    multiple,
    oneStop,
    wallet,
    safety,
    undertake,
    alipay,
    loading,
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
