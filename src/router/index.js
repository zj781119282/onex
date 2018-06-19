import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import index from 'page/index/index.vue';
import help from 'page/help/help.vue';
import fee from 'page/help/components/fee/fee.vue';
import mnemonic from 'page/help/components/mnemonic/mnemonic.vue';
import agreement from 'page/help/components/agreement/agreement.vue';
import privacy from 'page/help/components/privacy/privacy.vue';
import support from 'page/help/components/support/support.vue';
import transactionFail from 'page/help/components/transaction-fail/transaction-fail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
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
          redirect: '/help/fee',
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
        //{
        //  path: '/help/private-key',
        //  name: 'private-key',
        //  component: privateKey,
        //},
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
  ],
});

export default router;
