<template>
  <button :disabled="disabled" v-if="!link" class="btn" :class="css">
    <slot></slot>
  </button>
  <router-link v-else class="btn" :class="css" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      css: { type: String, required: false, default: null },
      link: { type: Boolean, required: false, default: false },
      to: { type: String, required: false, default: '/' },
      disabled: { type: Boolean, required: false, default: false }
    }
  }
</script>

<style >

  .btn {
    background: white;
    border: 1px solid var(--btn-border-color);
    border-radius:3px;
    padding: 5px 10px;
    font-size: inherit;
    font-family: inherit;  
  }
  .btn-primary {
    background: var(--btn-primary-background);
    border: 1px solid var(--btn-primary-border);
  }
  .btn:hover,
  .btn:focus {
    cursor: pointer;
    outline: 0;
    outline-offset: 0;
    background: var(--btn-hover-background);
    border: 1px solid var(--btn-hover-border-color);
  }

  .btn:disabled {
    cursor: not-allowed;
  }
  .btn:disabled:hover,
  .btn:disabled:focus {
    background: white;
    border: 1px solid var(--btn-border-color);
  }

  .buttons-left {
    text-align: left;
  }

  .buttons-right {
    text-align: right;
  }

  .buttons-left .btn {
    margin-right: 5px;
  }

  .buttons-right .btn {
    margin-left: 5px;
  }

</style>