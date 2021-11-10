<template>
  <div class="locale">
    <div class="dropup">
      <button v-if="!showChangeLocale" @click="showLocalePanel()" class="btn btn-link locale-selector" type="button">
        <img class="lang-selected" :src="localeData.localeSrc" :title="localeData.locale"/>
        <span class="caret"></span>
      </button>
      <ul v-if="showChangeLocale" class="locale-list">
        <li><button class="btn btn-link btn-lang" @click="setLocale('ES')"><img class="lang-selected" src="/img/lang/ES.png"/></button></li>
        <li><button class="btn btn-link btn-lang" @click="setLocale('EN')"><img class="lang-selected" src="/img/lang/EN.png"/></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        localeData: {
          locale: sessionStorage.getItem('locale'),
          localeSrc: '/img/lang/' + sessionStorage.getItem('locale') + '.png'
        },
        showChangeLocale: true,
        timeout: null
      }
    },
    props: {
    },
    components: {
    },
    methods: {
      setLocale(locale) {
        this.localeData.locale = locale.toUpperCase()
        this.localeData.localeSrc = '/img/lang/' + locale.toUpperCase() + '.png'
        sessionStorage.setItem('locale', locale.toUpperCase())
        this.$i18n.locale = locale
        this.showChangeLocale = false
      },
      showLocalePanel() {
        var me = this
        this.showChangeLocale = true
        if (this.timeout) {
          window.clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(function(){ me.showChangeLocale = false; }, 5000);
      }
    }
  }   
</script>

<style scoped>
  .locale {
    max-width: 50%;
    float: right;
    margin: 0;
    bottom: 6px;
    right: 30px;
    position: absolute;
  }
  .locale .locale-selector {
    border: 2px solid transparent;
    background: transparent;
    height: 40px;
  }
  .locale .locale-list {
    min-width: auto;
    padding: 0;
    position: relative;
    bottom: 4.5px;
  }
  .locale ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .locale li {
    margin: 0;
    float: left;
    height: 40px;
  }
  .locale li:first-child {
    margin-bottom: 0;
  }
  .locale li:last-child {
    margin-top: 0;
  }
  .locale .lang-selected {
    width: 50px;
    cursor: pointer;
  }
  .locale .locale-selector:focus {
    outline: 0;
    border: 2px solid #7777d7;
  }
  .locale .locale-list>li>a {
    padding: 0;
  }
  .locale .btn-lang {
    border: 2px solid transparent;
    background: transparent;
    height: 40px;
  }
  .locale .btn-lang:active,
  .locale .btn-lang:focus {
    outline: 0;
    border: 2px solid #7777d7;
  }
</style>