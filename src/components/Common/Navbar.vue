<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark" color-on-scroll="300">
    <div class="container">
      <div class="navbar-translate">
        <router-link class="navbar-brand" to="/" rel="tooltip" data-placement="bottom">
          {{ appName }}
        </router-link>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div v-if="$auth.check()" class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="navbar-nav">
          <common_search></common_search>

          <li class="nav-item dropdown">
            <a class="nav-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="nc-icon nc-single-02"> username</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
              <router-link @click.prevent="onShowLanguageSelectionModal" class="dropdown-item" to="">Language</router-link>
<!--              <router-link class="dropdown-item" to="">Notifications</router-link>-->
              <router-link @click.prevent="onLogout" class="dropdown-item" to="">Logout</router-link>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    appName: {
      type: String,
      required: false,
    },
  },
  methods: {
    onShowLanguageSelectionModal() {
      console.log('language modal')
    },
    onLogout() {
      this.$auth.logout({
        makeRequest: true,
        redirect: {name: 'Login'}
      })
    },
  },
}
</script>

