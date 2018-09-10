<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered" style="padding-top: 50px;">
        <a class="button is-large is-success" @click="login('u1')">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <span>Sign Up Clerk</span>
        </a>
        <a class="button is-large is-success" @click="login('u2')">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <span>Sign Up Doctor</span>
        </a>
        <a class="button is-large is-success" @click="login('u3')">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <span>Sign Up Supplier</span>
        </a>
        <a class="button is-large is-success" @click="login('u4')">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <span>Sign Up Teacher</span>
        </a>
        <a class="button is-large is-success" @click="login('u5')">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <span>Sign Up Admin</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login (id) {
      this.$store.dispatch('auth/login', id)
    }
  }
}
</script>

