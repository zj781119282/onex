import { switchLanguage, getQuery } from '@/i18n/i18n.config';
import identify, { downloadApp } from 'comp/identify_device'

export default {
  name: 'head-top',
  data() {
    return {
      currLang: localStorage._lang || 'zh_CN',
      withQuery: getQuery() && getQuery().includes('lang'),
      navShow: false,
    };
  },
  methods: {
    switchLang(id) {
      switchLanguage(id);
    },
    toggleNav() {
      this.navShow = !this.navShow;
    },
    download() {
      this.navShow = false;
      if (identify.isWx() || identify.isQQ()) {
        this.$emit('tip');
        return;
      }
      downloadApp();
    },
    goAnchor(id) {
      const ele = document.querySelector(id);
      const content = document.querySelector('.content');
      if (location.pathname !== '/') {
        this.$router.push('/');
        return;
      }
      if (identify.isMobile()) {
        content.scrollTop = ele.offsetTop;
      } else {
        document.documentElement.scrollTop = ele.offsetTop;
      }
      this.navShow = false;
    },
  },
};
