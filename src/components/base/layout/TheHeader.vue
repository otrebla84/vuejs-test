<template>
  <header class="app-header border-bottom">
    <div class="logo">     
      <router-link to="/" class="logo-link">
        <img :src="headerData.logo" class="image" alt="logo"/>
        <h1 class="app-title">{{ headerData.title.i18n !== undefined ? $t(headerData.title.i18n) : headerData.title.text }}</h1>
      </router-link>
    </div>
  </header>
</template>

<script>

  import header from '../../../config/header.js';

  export default {
    name: 'app-header',
    data() {
      return {
        headerData: header.header
      }
    },
    components: {
    },
  }

</script>

<style scoped>
  .app-header { 
    height: 80px;
    margin: 0;
    padding: 0 20px;
    display: flex;
    align-content: flex-start;
    align-items: center;
  }
  .app-header {
    background: rgb(242,242,242);
    background: linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(245,245,245,1) 25%, rgba(253,253,253,1) 75%, rgba(255,255,255,1) 100%);
  }
  
  .logo {
    height: 80px;
    max-width: 50%;
    display: inline-block;
    padding: 0;
  }
  .logo .logo-link {
    height: calc(80px - 4px);
    border: 2px solid transparent;
    display: flex;
    align-content: flex-start;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
  }
  .logo .logo-link:active,
  .logo .logo-link:focus {
    border: 2px solid #7777d7;
  }
  .logo .image {    
    height: 75px;
    margin: 0 25px 0 0;       
  }
  .logo .app-title {  
    margin: 20px 0;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 2.5rem;
    display: inline-block;
    vertical-align: middle;
    letter-spacing: -2px;
    color: #b80404;
    color: #251faf;
  }
  .logo .app-title:active,
  .logo .app-title:focus ,
  .logo .app-title:hover {  
    color:red;
    color: #4e2ddd;
  }

</style>