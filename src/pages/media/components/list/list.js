import list_cn from './../../news/zh_CN/news'
import list_en from './../../news/en_US/news'

export default {
  name: 'media-list',
  data() {
    return {
      list: [],
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: '/media/detail',
        query: { id, },
      });
    },
  },
  mounted() {
    this.list = localStorage._lang === 'en_US' ? list_en : list_cn;
  },
}
