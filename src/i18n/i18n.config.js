import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 引入英文文件
import header_en from './en_US/header.json'
import index_en from './en_US/index.json'
import help_en from './en_US/help.json'
import support_en from './en_US/support.json'
import transaction_en from './en_US/transaction.json'
import media_en from './en_US/media.json'
import manager_en from './en_US/manager.json'
// 引入中文文件
import header_cn from './zh_CN/header.json'
import index_cn from './zh_CN/index.json'
import help_cn from './zh_CN/help.json'
import support_cn from './zh_CN/support.json'
import transaction_cn from './zh_CN/transaction.json'
import media_cn from './zh_CN/media.json'
import manager_cn from './zh_CN/manager.json'

Vue.use(VueI18n);

export function getQuery() {
  return location.hash.split('?')[1];
}

export function queryLanguage() {
  const query = getQuery();
  const queryArray = (query && query.includes('lang')) ? query.split('&') : null;
  let lang = '';
  if (!queryArray) {
    lang = localStorage._lang === 'zh_CN' ? 'zh_CN' : 'en_US';
  } else {
    queryArray.forEach(item => {
      if (item.includes('lang')) {
        lang = item.split('=')[1];
      }
    });
    if (lang.substring(0, 2) === 'en') {
      lang = 'en_US';
    } else if (lang.substring(0, 2) === 'zh') {
      lang = 'zh_CN';
    } else {
      lang = 'en_US';
    }
  }
  localStorage.setItem('_lang', lang);

  return lang;
}

export const i18n = new VueI18n({
  locale: queryLanguage(),
  messages: {
    'zh_CN': Object.assign(
      header_cn,
      index_cn,
      media_cn,
      help_cn,
      support_cn,
      transaction_cn,
      manager_cn,
    ),
    'en_US': Object.assign(
      header_en,
      index_en,
      media_en,
      help_en,
      support_en,
      transaction_en,
      manager_en,
    ),
  }
});

/**
 * 切换语言并刷新页面
 * @param id {string}
 */
export const switchLanguage = (id) => {
  i18n.locale = id;
  localStorage.setItem('_lang', id);
  location.reload();
}
