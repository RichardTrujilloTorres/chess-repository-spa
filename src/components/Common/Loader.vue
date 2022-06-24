<template>
  <clip-loader :loading="loading" class="loader" :color="color" size="100px"></clip-loader>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import {mapGetters} from "vuex";

export default {
  name: 'Navbar',
  components: {
    ClipLoader,
  },
  computed: {
    ...mapGetters({
      loading: 'isLoading',
    }),
    color() {
      return `#9A9A9A`
    },
  },
  methods: {
  },
}
</script>

<style scoped>
.loader {
  left: 50%;
  margin-left: -4em;
  position: fixed;
  top: 50%;
  z-index: 9999999999;
  overflow: hidden;
  /*background: #fff;*/
}
</style>
