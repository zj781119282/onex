import download from 'comp/download/download.vue'
import identifyDevice from './identify_device'

export default {
  name: 'banner',
  components: {
    download,
  },
  data() {
    return {
      isInnerBrowser: false,
      mobile: window.innerWidth <= 768,
      androidUrl: 'http://image.enyes.net/onex.apk',
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
