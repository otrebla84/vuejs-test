<template>
  <footer id="app-footer" class="footer border-top">
    <div class="container-fluid" :class="{  'text-center': footerStyle === undefined,
                                            'text-center': footerStyle !== undefined && footerStyle.textAlign === 'center' ,
                                            'text-left': footerStyle !== undefined && footerStyle.textAlign === 'left' ,
                                            'text-right': footerStyle !== undefined && footerStyle.textAlign === 'right' }">
      <ul v-if="footerLinks !== undefined && footerLinks.length > 0" class="list-group list-group-horizontal">
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
      background: rgb(242,242,242);
      background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(245,245,245,1) 25%, rgba(253,253,253,1) 75%, rgba(255,255,255,1) 100%);
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      color: #000;
      padding: 10px 0;
      height: 60px;
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
  .footer .list-group-horizontal.list-group {
      margin-bottom: 0;
  }
  .footer .list-group-horizontal .list-group-item {
    display: inline-block;
      margin: 0 5px;
      border-right-width: 0;
      background-color: transparent;
      border: 0;
  }
  .footer .list-group-horizontal .list-group-item:first-child {
    border-top-right-radius:0;
    border-bottom-left-radius:4px;
  }
  .footer .list-group-horizontal .list-group-item:last-child {
    border-top-right-radius:4px;
    border-bottom-left-radius:0;
    border-right-width: 1px;
  }
  .footer a {
      font-weight: 500;
      margin: 0 20px;
  }
</style>