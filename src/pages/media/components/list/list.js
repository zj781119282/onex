import getData from 'service/getData'
import recommend from './../recommend/recommend.vue'
import { timeStampToDate } from 'service/timeTransfer'

export default {
  name: 'media-list',
  components: {
    recommend,
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getNewsList() {
      getData().getNewsList().then(res => {
        if (!res.result) {
          alert(res.message);
          return;
        }
        this.list = res.data.list;
      });
    },
    timeTransfer(time) {
      return timeStampToDate(time);
    },
    goDetail(id) {
      this.$router.push({
        path: '/media/detail',
        query: { id, },
      });
    },
  },
  mounted() {
    this.getNewsList();
  },
}
