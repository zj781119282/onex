import headTop from 'comp/header/header.vue'
import foot from 'comp/footer/footer.vue'
import loading from 'comp/loading/loading.vue'

export default {
  name: 'manager',
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
    }, 1500);
  },
}
