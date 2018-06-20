// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MetaInfo from 'vue-meta-info';
import App from './App';
import router from './router';

import { i18n } from './i18n/i18n.config.js';

import 'swiper/dist/css/swiper.min.css';
import './style-sheets/global.scss';
import './style-sheets/common.scss';
import './style-sheets/media-lg.scss';
import './style-sheets/media-xs.scss';

Vue.use(MetaInfo);

document.addEventListener('DOMContentLoaded', () => {

  Vue.config.productionTip = false;

  const root = new Vue({
    router,
    i18n,
    render: h => h(App),
  });

  root.$mount('#app');
});
