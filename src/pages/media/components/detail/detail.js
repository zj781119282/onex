import list_cn from './../../news/zh_CN/news'
import list_en from './../../news/en_US/news'

export default {
  name: 'media-detail',
  data() {
    return {
      title: '',
      detail: '',
      date: '',
    }
  },
  methods: {
    getNewsById(id) {
      this.list = localStorage._lang === 'en_US' ? list_en : list_cn;
      const article = this.list.filter(item => {
        return item.id == id;
      });
      this.title = article[0].title;
      this.detail = article[0].detail;
      this.date = article[0].date;
    },
  },
  mounted() {
    this.getNewsById(this.$route.query.id);
  },
}
