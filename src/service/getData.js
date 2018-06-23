/**
 * 项目中所有get方式获取数据的方法
 */

import axios from 'axios';
import config from './config';

export default function () {
  const method = 'get';
  const urls = config.urls;
  const getFunction = (url, params = {}, withToken = false) => {
    let headers;
    if (withToken) {
      headers = { xtoken: Cookies.get('xtoken') };
    }
    return axios({
      method,
      url,
      headers,
      params,
    })
      .then(res => res.data);
  };
  return {
    getNewsList(page = 0) {
      return getFunction(urls.getNewsList, { page });
    },
    getNewsDetail(id) {
      return getFunction(urls.getNewsDetail, { id });
    }
  }
}
