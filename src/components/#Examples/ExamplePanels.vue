<template>
  <section id="examples-panels" class="app-main">

    <h2 class="main-title">
      <span class="title">{{$t('sidebar.examplePanels')}}</span>
    </h2>

    <base-panel title="Title (prop)">
      <span>Lorem Ipsum dolor sit amet... </span>
    </base-panel>

    <base-panel>
      <h3 class="panel-title">
        <span class="title">Title</span>
      </h3>
      <span>Lorem Ipsum dolor sit amet... </span>
    </base-panel>
    
  </section>
</template>

<script>
export default {
  name: 'ExamplePanels',
  components: {  }
}
</script>

<style scoped>
</style>
