<template>
  <footer id="app-footer" class="footer border-top">
    <div class="container-fluid" :class="{  'text-center': footerStyle === undefined,
                                            'text-center': footerStyle !== undefined && footerStyle.textAlign === 'center' ,
                                            'text-left': footerStyle !== undefined && footerStyle.textAlign === 'left' ,
                                            'text-right': footerStyle !== undefined && footerStyle.textAlign === 'right' }">
      <ul v-if="footerLinks !== undefined && footerLinks.length > 0" class="list-group">
        <li class="list-group-item"><router-link v-for="link in footerLinks" :key="link.url" :to="link.url" class="link">
          {{link.i18n !== undefined ? $t(link.i18n) : link.text}}</router-link>
        </li>
      </ul>
    </div>
    <locale></locale>
  </footer>
</template>

<script>

  import footer from '../../../config/footer.js';

  import Locale from '../common/Locale.vue';

  export default {
    name: 'app-footer',
    components: { Locale },
    data() {
      return {
        footerLinks: footer.footer.links,
        footerStyle: footer.footer.style
      }
    }
  }

</script>

<style scoped>
  .footer {
    position: fixed;
    z-index: 10;
    height: 40px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: rgb(242,242,242);
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(245,245,245,1) 25%, rgba(253,253,253,1) 75%, rgba(255,255,255,1) 100%);
    padding: 10px 0;
  }
  .footer .text-center {
    text-align: center;
  }
  .footer .text-left {
    text-align: left;
  }
  .footer .text-right {
    text-align: right;
  }
  .footer .list-group {
    margin: 10px 0 0 0;
    padding: 0;
  }
  .footer  .list-group-item {
    display: inline-block;
    margin: 0 5px;
    border-right-width: 0;
    background-color: transparent;
    border: 0;
    font-size: .95rem;
    font-weight: 500;
    letter-spacing: -1px;
  }
  .footer .list-group-item a {
    margin: 0 20px;
  }
  .footer .list-group-item:first-child {
    border-top-right-radius:0;
    border-bottom-left-radius:4px;
  }
  .footer .list-group-item:last-child {
    border-top-right-radius:4px;
    border-bottom-left-radius:0;
    border-right-width: 1px;
  }
</style>