<template>
  <section id="examples-panels" class="app-main">

    <h2 class="main-title">
      <span class="title">{{$t('sidebar.exampleButtons')}}</span>
    </h2>

    <p class="buttons-left">
      <ui-button css="">Default</ui-button>
      <ui-button css="btn-primary">Primary</ui-button>
    </p> 

    <p class="buttons-left">
      <ui-button css="">Button</ui-button>
      <ui-button css="">Button</ui-button>
      <ui-button css="">Button</ui-button>
    </p> 

    <p class="buttons-right">
      <ui-button css="">Button</ui-button>
      <ui-button css="">Button</ui-button>
      <ui-button css="">Button</ui-button>
    </p> 
    
  </section>
</template>

<script>
export default {
  name: 'ExampleButtons',
  components: {  }
}
</script>

<style scoped>
</style>
