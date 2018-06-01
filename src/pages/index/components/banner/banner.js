import download from 'comp/download/download.vue'
import identifyDevice from 'comp/identify_device'

export default {
  name: 'banner',
  components: {
    download,
  },
  data() {
    return {
      isInnerBrowser: false,
      mobile: window.innerWidth <= 768,
      androidUrl: 'http://file.onex.cool/ONEX-ONEXGoldWebRelease-1.20-2018-05-30.apk',
    }
  },
  methods: {
    download() {
      if (identifyDevice.isWx() || identifyDevice.isQQ()) {
        this.isInnerBrowser = true;
        return;
      }

      window.open(this.androidUrl);
    },
  },
}
