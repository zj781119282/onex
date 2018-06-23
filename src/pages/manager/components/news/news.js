import Ueditor from 'vue-ueditor-wrap'
import imageUploader from 'comp/image-uploader/image-uploader.vue'
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
      status: 1,
      imageUrl: '',
    }
  },
  methods: {
    getImage(src) {
      this.imageUrl = src;
    },
    uploadNews() {
      const title = this.title;
      const content = this.content;
      const description = this.desc;
      const status = this.status;
      const image = this.imageUrl;
      if (!title|| !description || !content || !image) return;

      const params = {
        title,
        content,
        description,
        status,
        image,
      };

      postData().addNews(params).then(res => {
        alert(res.message);
      });
    }
  },
  mounted() {
    const secret = this.$route.query.secret;
    if (secret === 'superadmin') {
      this.isManager = true;
    }
  }
}
