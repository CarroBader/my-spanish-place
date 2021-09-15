<template>
  <div>
    <TopNav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopNav from './components/Layout/TopNav.vue'
import Footer from './components/Layout/Footer.vue'

export default {
  name: `App`,
  components: {
    TopNav,
    Footer,
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
