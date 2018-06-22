import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import index from 'page/index/index.vue';
import help from 'page/help/help.vue';
import media from 'page/media/media.vue';
import fee from 'page/help/components/fee/fee.vue';
import mnemonic from 'page/help/components/mnemonic/mnemonic.vue';
import agreement from 'page/help/components/agreement/agreement.vue';
import privacy from 'page/help/components/privacy/privacy.vue';
import support from 'page/help/components/support/support.vue';
import transactionFail from 'page/help/components/transaction-fail/transaction-fail.vue';
import list from 'page/media/components/list/list.vue'
import detail from 'page/media/components/detail/detail.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      children: [
        {
          path: '/help',
          redirect: '/help/agreement',
        },
        {
          path: '/help/fee',
          name: 'fee',
          component: fee,
        },
        {
          path: '/help/mnemonic',
          name: 'mnemonic',
          component: mnemonic,
        },
        {
          path: '/help/agreement',
          name: 'agreement',
          component: agreement,
        },
        {
          path: '/help/privacy',
          name: 'privacy',
          component: privacy,
        },
        {
          path: '/help/support',
          name: 'support',
          component: support,
        },
        {
          path: '/help/transaction-fail',
          name: 'transaction-fail',
          component: transactionFail,
        },
      ],
    },
    {
      path: '/media',
      name: 'media',
      component: media,
      children: [
        {
          path: '/media',
          redirect: '/media/list',
        },
        {
          path: '/media/list',
          name: 'media-list',
          component: list,
        },
        {
          path: '/media/detail',
          name: 'media-detail',
          component: detail,
        },
      ],
    }
  ],
});

export default router;
