import getData from 'service/getData'
import { timeStampToDate } from 'service/timeTransfer'

export default {
  name: 'recommend',
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getRecommendList() {
      getData().getRecommendList().then(res => {
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
    this.getRecommendList();
  },
}
