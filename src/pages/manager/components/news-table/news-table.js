import getData from 'service/getData'
import postData from 'service/postData'

export default {
  name: 'news-table',
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getAllNews() {
      getData().getAllNews().then(res => {
        this.list = res.data.list;
      });
    },
    changeStatus(id, status) {
      const params = {
        id,
        status,
      };
      postData().setNewsStatus(params).then(res => {
        alert(res.message);
      });
    },
    changeRecommend(id, recommend) {
      const params = {
        id,
        recommend,
      };
      postData().setNewsRecommend(params).then(res => {
        alert(res.message);
      });
    },
    editNews(id) {
      this.$router.push({
        path: '/manager/news',
        query: {
          id,
          secret: 'superadmin',
        },
      });
    },
    deleteNews(id) {
      const params = {
        id,
      };
      postData().deleteNews(params).then(res => {
        alert(res.message);
        location.reload();
      });
    },
  },
  mounted() {
    const secret = this.$route.query.secret;
    if (secret === 'superadmin') {
      this.isManager = true;
    }
    this.getAllNews();
  },
}
