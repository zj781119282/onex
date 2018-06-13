import identify, { downloadApp } from 'comp/identify_device'

export default {
  name: 'download',
  methods: {
    download() {
      if (identify.isWx() || identify.isQQ()) {
        this.$emit('tip');
        return;
      }
      downloadApp();
    },
    goAnchor(id) {
      const ele = document.querySelector(id);
      const content = document.querySelector('.content');
      if (identify.isMobile()) {
        content.scrollTop = ele.offsetTop;
      } else {
        document.documentElement.scrollTop = ele.offsetTop;
      }
      this.navShow = false;
    },
  },
}
