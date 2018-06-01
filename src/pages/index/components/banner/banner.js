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
      androidUrl: 'https://onex-file.oss-ap-southeast-1.aliyuncs.com/ONEX-ONEXGoldWebRelease-1.22-2018-06-01.apk',
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
