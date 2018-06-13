import identify, { androidUrl, iosUrl, downloadApp } from 'comp/identify_device'
import QRcode from 'qrcode'

export default {
  name: 'banner',
  data() {
    return {
      qrCode: false,
    }
  },
  methods: {
    drawQrcode() {
      QRcode.toCanvas(document.getElementById('android'), androidUrl);
      QRcode.toCanvas(document.getElementById('ios'), iosUrl);
    },
    showQrCode(type) {
      if (type) {
        this.qrCode = type;
        return;
      }
      this.qrCode = false;
    },
    download() {
      if (identify.isWx() || identify.isQQ()) {
        this.$emit('tip');
        return;
      }
      downloadApp();
    },
  },
  mounted() {
    const _this = this;
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('click', () => {
      _this.qrCode = false;
    });
    this.drawQrcode();
  },
}
