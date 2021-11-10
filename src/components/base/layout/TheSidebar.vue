<template>
  <nav id="app-sidebar" class="app-sidebar border-right">
    <ul class="sidebar" role="menu">
      <li v-for="item in appMenu" :key="item.id" class="menu-item" :class="{ 'submenu': item.submenu !== undefined}">
        <router-link v-if="item.link !== undefined" :to="item.link" >
          <span class="fa sidebar-icon" :class="item.icon" aria-hidden="true" :title="item.i18n ? $t(item.i18n) : item.text"></span>
        </router-link>
        <span v-if="item.submenu !== undefined && item.submenu.length > 0" class="fa sidebar-icon" :class="item.icon" aria-hidden="true" :title="item.i18n ? $t(item.i18n) : item.text"></span>
        <ul v-if="item.submenu !== undefined && item.submenu.length > 0" class="dropdown-menu submenu">
          <li v-for="sub in item.submenu" :key="sub.id" :class="{ 'submenu': sub.submenu !== undefined }">
            <router-link v-if="sub.link !== undefined" :to="sub.link">{{ sub.i18n ? $t(sub.i18n) : sub.text }}</router-link>
            <span v-if="sub.submenu !== undefined && sub.submenu.length > 0" class="submenu-item">{{ sub.i18n ? $t(sub.i18n) : sub.text }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  
  import menu from '../../../config/menu.js';

  export default {
    props: {
    },
    data() {
      return {
        appMenu: menu.items
      }
    },
    mounted: function () {
    }
  }   

</script>

<style scoped>

  .app-sidebar {
    position: fixed;
    left: 0;
    top: 80px;
    width: 70px;
    height: calc(100% - 140px);
    background: white;
    z-index: 10;
    padding-top:20px;
  }

  .sidebar {
    padding: 0;
    margin: 0;
  }
  .sidebar-icon {
    font-size: 2.5em;
    width: 50px;
    height: 50px;
    padding: 5px 15px;
    background: transparent;
  }
  .sidebar a {
    text-decoration: none;
  }
  .sidebar li.menu-item>a,
  .sidebar li.menu-item>span {
    display: inline-block;
    color: #000;
    cursor: pointer;
  }
  .sidebar li.menu-item>a:hover,
  .sidebar li.menu-item>a:active,
  .sidebar li.menu-item>a:focus,
  .sidebar li.menu-item>span:hover,
  .sidebar li.menu-item>span:active,
  .sidebar li.menu-item>span:focus {
    border: 0 solid #b80404;
    color: var(--link-hover-color);
  }

  .menu-item ul {
    display: none;
    list-style: none;
  }
  .menu-item.submenu ul {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.25);
  }
  .menu-item.submenu ul li { 
    line-height: 30px;
    padding: 0 20px;    
    width: 200px;
  }
  .menu-item.submenu ul li:hover { 
    background:#fafafa;
    cursor:pointer;
  }
  .menu-item.submenu ul li a:hover { 
    border-bottom: 0;
  }
  .menu-item.submenu:hover ul {
    border:1px solid var(--layout-border-color);    
    display: inline;
    width: auto;
    z-index: 10;
    position: absolute;
    margin-top: -70px;
    left: 70px;
    background: #fff;
    border: 1px solid var(--layout-border-color);
    border-radius: 5px;
  }
</style>