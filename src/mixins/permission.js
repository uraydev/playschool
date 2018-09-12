export default {
  methods: {
    hasPermission (role) {
      return this.$store.getters['guard/hasPermission'](role)
    }
  }
}
