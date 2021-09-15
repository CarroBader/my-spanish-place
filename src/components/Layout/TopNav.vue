<template>
    <b-navbar toggleable="md navbar-top">
      <img
        src="../../assets/logo.png"
        class="nav-logo-top" alt="Spanish flag"
      >
      <b-navbar-brand class="nav-title-top">Formula One</b-navbar-brand>

      <b-navbar-toggle class="place-toggle-button" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="nav-collapse-top" is-nav>
          <b-navbar-nav class="navbar-nav-top">
              <router-link
                v-for="route in routes"
                :key="route.path"
                :to="route.path"
                class="nav-link nav-link-top"
              >
                {{ route.name }}
              </router-link>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>

export default {
  name: `TopNav`,
  data() {
    return {

    }
  },
  methods: {
    // <router-link to="/">Home</router-link> |
    // <router-link to="/about">About</router-link>
  },
}
</script>

<style scoped lang="scss">

</style>
