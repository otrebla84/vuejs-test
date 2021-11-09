<template>
  <router-view></router-view>
</template>

<script>
  
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    components: {},
    methods: {
      setLocale(locale) {
      this.$i18n.locale = locale
      this.$store.dispatch('setLocale', locale)
      }
    },
    mounted: function () {
      this.setLocale('EN')
    },
    computed: {
      ...mapGetters(['getLocale']),
    }
  }

</script>

<style>
</style>
