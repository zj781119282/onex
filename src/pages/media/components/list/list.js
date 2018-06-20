import list_cn from './../../news/zh_CN/news'
import list_en from './../../news/en_US/news'

export default {
  name: 'media-list',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.list = localStorage._lang === 'en_US' ? list_en : list_cn;
    console.log(this.list)
  },
}
