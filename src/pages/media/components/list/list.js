import getData from 'service/getData'
import recommend from './../recommend/recommend.vue'

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
