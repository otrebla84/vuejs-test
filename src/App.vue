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
        sessionStorage.setItem('locale', locale)
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
    font-size: 15.5px;
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
    width: calc(100% - 100px);
    height: calc(100vh - 240px);
    padding: 50px;
    position: fixed;
    top: 80px;
    overflow-x: hidden;
  }

  .main-title {
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 30px;
  }
  .main-title .title {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -2px;
    display: inline-block;
    width: calc(100% - 100px);
  }
  .main-title .actions {
    display: inline-block;
    width: 100px;
  }
  .icon-action,
  .main-title .actions .action-icon {
    margin-left:15px;
  }

  .section-title {
    margin-top: 30px;
    margin-bottom: 15px;    
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
  }
  .section-title .title {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -1px;
    width: calc(100% - 100px);
    display: inline-block;
  }

  .section-title .actions {
    display: inline-block;
    width: 100px;
    font-size: 20px;
  }

  .section-title .actions .action-icon {
    margin-left:15px;
  }

</style>
