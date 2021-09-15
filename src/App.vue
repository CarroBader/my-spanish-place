<template>
  <div class="default-background-center">
    <TopNav />

    <Footer />
  </div>
</template>

<script>
import TopNav from './components/General/TopNav.vue'
import Footer from './components/General/Footer.vue'

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
