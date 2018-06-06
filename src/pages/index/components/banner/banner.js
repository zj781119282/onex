import download from 'comp/download/download.vue'
import identifyDevice from 'comp/identify_device'
import QRcode from 'qrcode'

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
      iosUrl: 'https://www.pgyer.com/xonex',
      isMobile: identifyDevice.isIphone() || identifyDevice.isAndroid(),
    }
  },
  methods: {
    showQrcode() {
      QRcode.toCanvas(document.getElementById('android'), this.androidUrl);
      QRcode.toCanvas(document.getElementById('ios'), this.iosUrl);
    },
    download() {
      if (!this.isMobile) return;
      if (identifyDevice.isWx() || identifyDevice.isQQ()) {
        this.isInnerBrowser = true;
        setTimeout(() => {
          this.isInnerBrowser = false;
        }, 2000);
        return;
      }

      window.open(identifyDevice.isIphone() ? this.iosUrl : this.androidUrl);
    },
  },
  mounted() {
    this.showQrcode();
  },
}
