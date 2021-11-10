<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
  
  import { mapGetters } from 'vuex'

  import TheHeader from './components/base/layout/TheHeader.vue'
  import TheFooter from './components/base/layout/TheFooter.vue'

  export default {
    name: 'App',
    components: { TheHeader, TheFooter },
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale
        this.$store.dispatch('setLocale', locale)
      }
    },
    mounted: function () {
      this.setLocale('ES')
    },
    computed: {
      ...mapGetters(['getLocale']),
    }
  }

</script>

<style>

  :root {
    --link-color: #251faf;
  }

  body {
    height: 100vh;
    width: 100%;
    font-family: 'Open Sans';
    font-size: 16px;
    text-align: justify;
    overflow: auto; 
    margin: 0;
    padding: 0;
  }
  .border-bottom {
    border-bottom: 1px solid #eee;
  }
  .border-right {
    border-right: 1px solid #eee;
  }
  .border-top {
    border-top: 1px solid #eee;
  }
  .btn-link {
    font-size: inherit;
    padding: 0;
    text-decoration: none;
  }
  .a,
  .link,
  .btn-link .link {
    color: var(--link-color);
    cursor: pointer;
    text-decoration: none;
  }
  .btn-link {
    border-bottom: 2px solid transparent;
  }
  a:hover, 
  a:focus, 
  a:active
  .link:hover, 
  .link:focus, 
  .link:active,
  .btn-link:hover, 
  .btn-link:focus, 
  .btn-link:active {
    outline: 0;
    outline-offset: 0;
    text-decoration: none;
    border-bottom: 2px solid #b80404;
    border-bottom: 2px solid #251faf;
    color:red;
    color: #4e2ddd;
  }
  .pointer {
    cursor: pointer;
  }
  .pointer-none {
    pointer-events: none;
  }

  .app-main {
    padding: 100px 50px 80px 50px;
  }
</style>
