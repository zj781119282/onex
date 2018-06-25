/**
 * 项目全局配置
 */

const host = 'http://api.coolbit.pro';

export default {
  host,
  urls: {
    getNewsList: '/article/list',
    getAllNews: '/article/list_all',
    getRecommendList: '/article/list_recommend',
    getNewsDetail: '/article/get',
    addNews: '/article/add',
    setNewsStatus: '/article/status',
    setNewsRecommend: '/article/recommend',
    deleteNews: '/article/delete',
  },
}
