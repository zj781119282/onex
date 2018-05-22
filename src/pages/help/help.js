import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import loading from 'comp/loading/loading.vue'

export default {
  name: 'help',
  components: {
    headTop,
    foot,
    loading,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
}
