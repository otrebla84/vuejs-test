<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
  
  import { mapGetters } from 'vuex'

  import TheHeader from './components/base/layout/TheHeader.vue'
  import TheSidebar from './components/base/layout/TheSidebar.vue'
  import TheFooter from './components/base/layout/TheFooter.vue'

  export default {
    name: 'App',
    components: { TheHeader, TheSidebar, TheFooter },
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
    --link-color: #b80404; /* #251faf #b80404 */
    --app-title-color: #b80404;
    --border-color: #b80404; /* #4e2ddd red */
    --link-hover-color: red;
    --app-title-hover-color: red;
    --layout-border-color: #eee;
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
    border-bottom: 1px solid var(--layout-border-color);
  }
  .border-right {
    border-right: 1px solid var(--layout-border-color);
  }
  .border-top {
    border-top: 1px solid var(--layout-border-color);
  }
  .btn-link {
    font-size: inherit;
    padding: 0;
    text-decoration: none;
  }
  a,
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
    border-bottom: 2px solid var(--border-color);
    color: var(--link-hover-color);
  }
  .pointer {
    cursor: pointer;
  }
  .pointer-none {
    pointer-events: none;
  }

  .app-main {
    width: calc(100% - 150px);
    height: calc(100vh - 240px);
    padding: 50px 50px 50px 100px;
    position: fixed;
    top: 80px;
    overflow-x: hidden;
  }

  .app-main::-webkit-scrollbar {
      width: 12px;     /* Tamaño del scroll en vertical */
      height: 12px;    /* Tamaño del scroll en horizontal */
  }
  .app-main::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
  }
  .app-main::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  .app-main::-webkit-scrollbar-thumb:active {
      background-color: #999999;
  }
  .app-main::-webkit-scrollbar-track {
      background: #e1e1e1;
      border-radius: 4px;
  }
  .app-main::-webkit-scrollbar-track:hover,
  .app-main::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }
  
  .main-title {
    border-bottom: 1px solid var(--layout-border-color);
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
    padding: 0 10px;
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
    border-bottom: 1px solid var(--layout-border-color);
    padding-bottom: 5px;
  }
  .section-title .title {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -1px;
    width: calc(100% - 100px);
    display: inline-block;
    padding: 0 10px;

  }

  .section-title .actions {
    display: inline-block;
    width: 100px;
    font-size: 20px;
  }

  .section-title .actions .action-icon {
    margin-left:15px;
  }

  p {
    color: #555;
    padding: 0 10px;
  }
</style>
