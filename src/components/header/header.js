import { switchLanguage, getQuery } from '@/i18n/i18n.config';

export default {
  name: 'head-top',
  data() {
    return {
      currLang: localStorage._lang || 'zh_CN',
      withQuery: getQuery() && getQuery().includes('lang'),
    };
  },
  methods: {
    switchLang(id) {
      switchLanguage(id);
    }
  },
};
