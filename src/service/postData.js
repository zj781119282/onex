/**
 * 项目中所有发送post请求的方法
 */

import axios from 'axios';
import config from './config';

export default function () {
  const method = 'post';
  const urls = config.urls;
  const postFunction = (url, params, withToken = false) => {
    let headers;
    const data = new URLSearchParams();
    Object.keys(params).forEach(key => {
      data.append(key, params[key]);
    });
    if (withToken) {
      headers = { xtoken: Cookies.get('xtoken') };
    }
    return axios({
      method,
      url,
      headers,
      data,
    })
        .then(res => res.data);
  };
  return {
    addNews(params) {
      return postFunction(urls.addNews, params);
    },
    setNewsStatus(params) {
      return postFunction(urls.setNewsStatus, params);
    },
    setNewsRecommend(params) {
      return postFunction(urls.setNewsRecommend, params);
    },
    deleteNews(params) {
      return postFunction(urls.deleteNews, params);
    },
  };
};
