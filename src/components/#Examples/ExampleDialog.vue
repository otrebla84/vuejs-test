<template>
  <section id="examples-dialog" class="app-main">
    <h2 class="main-title">
      <span class="title">{{$t('sidebar.exampleDialogs')}}</span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque eget tellus ut auctor. 
      Nam et quam odio. In hac habitasse platea dictumst. Morbi convallis velit in nunc aliquam porttitor. 
      Morbi nec facilisis velit. Integer egestas semper risus, vitae vulputate lectus placerat a. Proin iaculis lacus non consequat varius.
    </p>
    <p class="buttons-left">
      <ui-button css="btn-default" @click="openDialogDefault">Default</ui-button>
      <ui-button css="btn-info" @click="openDialogInfo">Info</ui-button>
      <ui-button css="btn-success" @click="openDialogOk">OK</ui-button>
      <ui-button css="btn-warning" @click="openDialogWarning">Warning</ui-button>
      <ui-button css="btn-danger" @click="openDialogError">Error</ui-button>
    </p>  
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque eget tellus ut auctor. 
      Nam et quam odio. In hac habitasse platea dictumst. Morbi convallis velit in nunc aliquam porttitor. 
      Morbi nec facilisis velit. Integer egestas semper risus, vitae vulputate lectus placerat a. Proin iaculis lacus non consequat varius.
    </p>
    <p class="buttons-left">
      <ui-button css="btn-default" @click="openDialog">Open dialog</ui-button>
    </p>  
  </section>
  
  <base-dialog :show="showDialog" title="Dialog title" @close="closeDialog">
    <template #default>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque eget tellus ut auctor. 
        Nam et quam odio. In hac habitasse platea dictumst. Morbi convallis velit in nunc aliquam porttitor. 
        Morbi nec facilisis velit. Integer egestas semper risus, vitae vulputate lectus placerat a. Proin iaculis lacus non consequat varius.
      </p>
    </template>
    <template #actions>
      <ui-button css="btn-default" @click="closeDialog">Cancelar</ui-button>
      <ui-button css="btn-primary" @click="closeDialog">Aceptar</ui-button>
    </template>
  </base-dialog>

</template>

<script>
  export default {
    name: 'ExampleDialog',
    components: {  },
    data() {
      return {
        showDialog: false
      };
    },
    computed: {
      getDialog() { return this.$store.getters['getDialog'] }
    },
    methods: {
      openDialogDefault() {
        this.$store.dispatch('setDialog', { title: 'Default', message: 'Lorem ipsum dolor sit amet...' }) 
      },
      openDialogInfo() {
        this.$store.dispatch('setDialog', { icon: 'info', title: 'Info', message: 'Lorem ipsum dolor sit amet...' }) 
      },
      openDialogOk() {
        this.$store.dispatch('setDialog', { icon: 'ok', title: 'OK', message: 'Lorem ipsum dolor sit amet...' }) 
      },
      openDialogWarning() {
        this.$store.dispatch('setDialog', { icon: 'warning', title: 'Warning', message: 'Lorem ipsum dolor sit amet...' }) 
      },
      openDialogError() {
        this.$store.dispatch('setDialog', { icon: 'error', title: 'Error', message: 'Lorem ipsum dolor sit amet...' }) 
      },
      openDialog() {
        this.showDialog = true
      },
      closeDialog() {
        this.showDialog = false
      }
    }
  }
</script>

<style scoped>
</style>
