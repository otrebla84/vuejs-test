<template>
  <div class="base-panel">
    <h3 v-if="this.title !== ''" class="panel-title">
      <span class="title">{{this.title}}</span>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: false, default: '' }
    }
  }
</script>

<style>
  .base-panel {
    padding: 1.2rem 2rem;
    border-radius: 5px;
    margin: 2rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
  }
  .panel-title {
    margin-top: 0;
    margin-bottom: 20px;    
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .panel-title .title {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -1px;
    width: calc(100% - 100px);
    display: inline-block;
    color: var(--title-color);
  }
</style>