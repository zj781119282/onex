import list_cn from './../../news/zh_CN/news'
import list_en from './../../news/en_US/news'
import getData from 'service/getData'

export default {
  name: 'media-list',
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
        console.log(this.list)
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
