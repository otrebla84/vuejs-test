<template>
  <router-view></router-view>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    mounted: function () {
      this.$i18n.locale = 'ES'
    }
  }

</script>

<style>
</style>
