<template>
  <div class="base-form">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
    }
  }
</script>

<style>
  .base-form {
    border-radius: 5px;
  }
  .base-form .form-title {
    margin-top: 0;
    margin-bottom: 20px;    
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .base-form .form-title .title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -1px;
    width: calc(100% - 100px);
    display: inline-block;
  }
  
  .base-form label {
    color: #444;
    font-size: 100%;
    font-weight: 400;
    line-height: 24px;
    padding: 5px 0;
    margin-bottom: 0;
    display: inline-block;
  }
  .base-form .checkbox > label,
  .base-form .checkbox-inline > label,
  .base-form .radio > label, 
  .base-form .radio-inline  > label {
    color: #444;
    padding-left: 2rem;
  }
  .base-form .checkbox, 
  .base-form .checkbox-inline, 
  .base-form .radio, 
  .base-form .radio-inline {
    padding: 0;
  }
  .base-form .checkbox, 
  .base-form .radio {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  .base-form .checkbox+.checkbox, 
  .base-form .radio+.radio {
    margin-top: -5px;
  }
  .base-form .checkbox-inline,
  .base-form .radio-inline {
    margin-right:20px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .base-form .checkbox label, 
  .base-form .radio label {
    padding-left: 2rem;
  }
  .base-form .checkbox input[type=checkbox], 
  .base-form .checkbox-inline input[type=checkbox], 
  .base-form .radio input[type=radio], 
  .base-form .radio-inline input[type=radio] {
    margin-left: -2rem;
    margin-top: 5px;
  }
  .base-form .form-buttons {
    text-align: right;
    display: block;
    margin-top: 20px;
  }
  .base-form .form-buttons .btn {
    margin-left: 10px;
  }

  .base-form .form-textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
  }

  .base-form .row {
    padding-top: 3px;
  }

  .base-form .form-control {
    background-color: #fdfdff;
    border: 0;
    border-bottom: 1px solid #d3d0f9;
    border-radius: 0;
  }
  .base-form .label {
    width: 100%;
    text-align: left;
  }
</style>