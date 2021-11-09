<template>
  <div class="locale">
    <div class="dropup" @blur="showChangeLocale=false" tabindex="0">
      <button v-if="!showChangeLocale" @click="showLocalePanel()" class="btn btn-link dropdown-toggle" type="button" id="dropdownLocale" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <img class="lang-selected" :src="localeData.localeSrc" :title="localeData.locale"/>
        <span class="caret"></span>
      </button>
      <ul v-if="showChangeLocale" class="dropdown-menu" aria-labelledby="dropdownLocale">
        <li><button class="btn btn-link btn-lang" @click="setLocale('ES')" @blur="showChangeLocale=false"><img class="lang-selected" src="/img/lang/ES.png"/></button></li>
        <li><button class="btn btn-link btn-lang" @click="setLocale('EN')" @blur="showChangeLocale=false"><img class="lang-selected" src="/img/lang/EN.png"/></button></li>
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
        showChangeLocale: false,
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
    bottom: 15px;
    right: 30px;
    position: absolute;
  }
  .locale .dropdown-toggle {
    font-size: 2rem;
    font-weight: 800;
    border: 2px solid transparent;
    background: transparent;
  }
  .locale .dropdown-menu {
    min-width: auto;
    left: 12px;
    padding: 0;
  }
  .locale ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .locale li {
    margin: 0;
    float: left;
  }
  .locale li:first-child {
    margin-bottom: 0;
  }
  .locale li:last-child {
    margin-top: 0;
  }
  .locale .lang-selected {
    width: 40px;
    cursor: pointer;
  }
  .locale .dropdown-toggle:focus {
    outline: 0;
    border: 2px solid #7777d7;
  }
  .locale .dropdown-menu>li>a {
    padding: 0;
  }
  .locale .btn-lang {
    font-weight: 800;
    font-size: 2rem;
    border: 2px solid transparent;
    background: transparent
  }
  .locale .btn-lang:active,
  .locale .btn-lang:focus {
    outline: 0;
    border: 2px solid #7777d7;
  }
</style>