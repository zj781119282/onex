import Ueditor from 'vue-ueditor-wrap'
import imageUploader from 'comp/image-uploader/image-uploader.vue'
import getData from 'service/getData'
import postData from 'service/postData'

export default {
  name: 'news',
  components: {
    Ueditor,
    imageUploader,
  },
  data() {
    return {
      isManager: false,
      title: '',
      content: '',
      desc: '',
      recommend: -1,
      status: 1,
      imageUrl: '',
      id: '',
    }
  },
  methods: {
    getEditNews() {
      const id = this.$route.query.id;
      if (!id) return;

      getData().getNewsDetail(id).then(res => {
        if (!res.result) return;
        const data = res.data;
        this.title = data.title;
        this.desc = data.description;
        this.content = data.content;
        this.status = data.status;
        this.recommend = data.recommend;
        this.imageUrl = data.image;
      });
    },
    cancel() {
      this.$router.push({
        path: '/manager/news-table',
        query: {
          secret: 'superadmin',
        },
      });
    },
    uploadNews() {
      const title = this.title;
      const content = this.content;
      const description = this.desc;
      const status = this.status;
      const recommend = this.recommend;
      const image = this.imageUrl;


      if (!title|| !description || !content || !image) return;

      const params = {
        title,
        content,
        description,
        status,
        recommend,
        image,
      };

      if (this.id) {
        params.id = this.id;
      }

      postData().addNews(params).then(res => {
        alert(res.message);
        this.cancel();
      });
    }
  },
  mounted() {
    const secret = this.$route.query.secret;
    const id = this.$route.query.id;
    if (secret === 'superadmin') {
      this.isManager = true;
    }
  },
}
