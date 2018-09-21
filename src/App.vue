<template>
  <div>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">PlaySchool</router-link>
        <a role="button" class="navbar-burger burger" data-target="navMenu" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start" v-if="auth">
          <router-link v-for="item in menu" :key="item.id" class="navbar-item" :to="item.link">
            <span class="icon"><i :class="item.icon"></i></span>
            <span>{{item.title}}</span>
          </router-link>
        </div>
        <div class="navbar-end" v-if="auth">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" @click="">
              {{user.fio}}
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                <span class="icon"><i class="fa fa-cogs"></i></span>
                <span>Settings</span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">
                <span class="icon"><i class="fa fa-sign-out"></i></span>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end" v-if="!auth">
          <router-link class="navbar-item" to="/signup">
            <span class="icon"><i class="fa fa-refresh"></i></span>
            <span>SignUp</span>
          </router-link>
          <!-- <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button">
                    <span class="icon">
                      <i class="fas fa-twitter" aria-hidden="true"></i>
                    </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary">
                    <span class="icon">
                      <i class="fas fa-download" aria-hidden="true"></i>
                    </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters({
    user: 'auth/user',
    auth: 'auth/auth',
    menu: 'guard/getMenu'
  }),
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  },
  async created () {
    await this.$store.dispatch('reciveGroups')
    await this.$store.dispatch('reciveChildren')
  },
  name: 'App'
}
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #8c67ef;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;
</style>
