<template>
  <div class="ui-input" :class="{ 'label-top': labelAlign === 'top', 'label-left': labelAlign === 'left'}">
    <label v-if="label" :for="id" class="label">{{label}}</label>
    <div>
      <span class="input-placeholder">{{placeholderText}}</span>
      <span class="fa fa-open-file icon-upload"></span>
      <input class="input" @change="change" type="file" :name="name" :id="id"  :disabled="disabled" :readonly="readonly"/>
      <input autocomplete="off" class="input" type="text" readonly :value="filename"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: { type: String, required: true },
      name: { type: String, required: false },
      label: { type: String, required: false },
      labelAlign: { type: String, required: false, default: 'top' },
      value: { type: String, required: false, default: '' },
      modelValue: { type: File },
      readonly: { type: Boolean, required: false, default: false },
      disabled: { type: Boolean, required: false, default: false },
      placeholder: { type: String, required: false, default: '' }
    },
    data() {
      return {
        file: null,
        filename: ''
      };
    },
    computed: {
      placeholderText() { 
        if (this.filename) {
          return this.filename === '' ? this.placeholder : ''
        } else {
          return this.filename === '' ? this.placeholder : ''
        }
      } 
    },
    methods: {
      change(event) {
        var files = event.target.files || event.dataTransfer.files;
        this.file = files[0]
        this.filename = this.file.name
        // this.$emit('input', this.file)
        this.$emit('update:modelValue', this.file)
      }
    }
  }
</script>

<style scoped>

  @import './forms.css';

  .ui-input div {
    position: relative;
    display: inline-block;
    width: calc(100% - 200px);
  }
  .ui-input.label-top div {
    width: calc(100%);
  }
  .ui-input.label-left .input{
    display: inline-block;
    width: calc(100% - 30px);
  }
  .ui-input .input[type=file] {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
  .ui-input .input[type=file]:hover {
    cursor: pointer
  }

</style>