<template>

  <base-dialog :show="getDialog.message!==''" :title="getDialog.title" :icon="getDialog.icon" @close="closeDialog">
    <template #default>
      <p>{{getDialog.message}}</p>
    </template>
    <template #actions>
      <ui-button css="btn-primary" @click="closeDialog">{{$t('buttons.accept')}}</ui-button>
    </template>
  </base-dialog>

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
      },
      closeDialog() {
        this.$store.dispatch('setDialog', { icon: '', title: '', message: '' }) 
      }
    },
    mounted: function () {
      this.setLocale('ES')
    },
    computed: {
      ...mapGetters(['getLocale', 'getDialog']),
    }
  }

</script>

<style>

  :root {
    --link-color: #251faf; /* #251faf #b80404 */
    --app-title-color: #251faf;
    --border-color: #251faf; /* #4e2ddd red */
    --link-hover-color: #4e2ddd;
    --app-title-hover-color: #4e2ddd;
    --layout-border-color: #eee;
    --btn-border-color: #ccc;
    --btn-hover-border-color: #251faf;
    --btn-hover-background: #e1dcff;
    --btn-primary-background: #f3f1ff;
    --btn-primary-border: #afa4f1;
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
    width: calc(100% - 130px);
    height: calc(100vh - 240px);
    padding: 50px 30px 50px 100px;
    position: fixed;
    top: 80px;
    overflow-x: hidden;
  }

  *::-webkit-scrollbar {
    width: 12px;     
    height: 12px;    
  }
  *::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
    margin-right: 2px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
  *::-webkit-scrollbar-thumb:active {
    background: #f0f0f0;
  }
  *::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-track:hover,
  *::-webkit-scrollbar-track:active {
    background: #f0f0f0;
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
