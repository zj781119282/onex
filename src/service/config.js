/**
 * 项目全局配置
 */

const host = 'http://api.coolbit.pro';

export default {
  host,
  urls: {
    getNewsList: '/article/list',
    getNewsDetail: '/article/get',
    addNews: '/article/add',
    setNewsStatus: '/article/status',
  },
}
