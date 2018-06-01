import { switchLanguage, getQuery } from '@/i18n/i18n.config';
import identifyDevice from 'comp/identify_device'

export default {
  name: 'head-top',
  data() {
    return {
      currLang: localStorage._lang || 'zh_CN',
      withQuery: getQuery() && getQuery().includes('lang'),
      showHeader: !identifyDevice.isWx() && !identifyDevice.isQQ(),
    };
  },
  methods: {
    switchLang(id) {
      switchLanguage(id);
    }
  },
};
