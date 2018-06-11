import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

const index = () => import('page/index/index.vue');
const help = () => import('page/help/help.vue');
const fee = () => import('page/help/components/fee/fee.vue');
const mnemonic = () => import('page/help/components/mnemonic/mnemonic.vue');
//const privateKey = () => import('page/help/components/private-key/private-key.vue');
const agreement = () => import('page/help/components/agreement/agreement.vue');
const privacy = () => import('page/help/components/privacy/privacy.vue');
const support = () => import('page/help/components/support/support.vue');
const transactionFail = () => import('page/help/components/transaction-fail/transaction-fail.vue');
const userAgent = () => import('page/user-agent/user-agent.vue');

Vue.use(Router);

const router = new Router({
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
    {
      path: '/ua',
      name: 'ua',
      component: userAgent,
    },
  ],
});

export default router;
