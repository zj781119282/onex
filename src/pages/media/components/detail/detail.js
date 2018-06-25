import getData from 'service/getData'
import { timeStampToDate } from 'service/timeTransfer'
import recommend from './../recommend/recommend.vue'

export default {
  name: 'media-detail',
  components: {
    recommend,
  },
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
