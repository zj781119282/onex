import list_cn from './../../news/zh_CN/news'
import list_en from './../../news/en_US/news'
import getData from 'service/getData'
import { timeStampToDate } from 'service/timeTransfer'

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
    getNewsDetail(id) {
      getData().getNewsDetail(id).then(res => {
        if (!res.result) {
          alert(res.message);
          return;
        }
        this.date = timeStampToDate(res.data.createDate);
        this.title = res.data.title;
        this.detail = res.data.content;
      });
    },
  },
  mounted() {
    this.getNewsDetail(this.$route.query.id);
  },
}
