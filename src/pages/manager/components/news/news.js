import Ueditor from 'vue-ueditor-wrap'
import imageUploader from 'comp/image-uploader/image-uploader.vue'

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
      const status = this.status;
      const image = this.imageUrl;
      if (!title || !content || !image) return;

      const params = {
        title,
        content,
        status,
        image,
      };
    }
  },
  mounted() {
    const secret = this.$route.query.secret;
    if (secret === 'superadmin') {
      this.isManager = true;
    }
  }
}
