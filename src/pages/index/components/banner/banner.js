import download from 'comp/download/download.vue'
import { androidUrl, iosUrl, downloadApp } from 'comp/identify_device'
import QRcode from 'qrcode'

export default {
  name: 'banner',
  components: {
    download,
  },
  data() {
    return {
      isInnerBrowser: false,
    }
  },
  methods: {
    showQrcode() {
      QRcode.toCanvas(document.getElementById('android'), androidUrl);
      //QRcode.toCanvas(document.getElementById('ios'), this.iosUrl);
    },
    download() {
      downloadApp();
    },
  },
  mounted() {
    this.showQrcode();
  },
}
