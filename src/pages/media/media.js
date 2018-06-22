import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import loading from 'comp/loading/loading.vue'

export default {
  name: 'media',
  components: {
    headTop,
    foot,
    loading,
  },
  data() {
    return {
      loaded: true,
    }
  },
  mounted() {
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
}
