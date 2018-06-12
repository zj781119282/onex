import { switchLanguage, getQuery } from '@/i18n/i18n.config';
import { downloadApp } from 'comp/identify_device'

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
      downloadApp();
    },
  },
};
