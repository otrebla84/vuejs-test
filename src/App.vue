<template>
  <h1>{{ $t('app.title') }}</h1>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    mounted: function () {
      this.$i18n.locale = 'EN'
    }
  }

</script>

<style>
</style>
