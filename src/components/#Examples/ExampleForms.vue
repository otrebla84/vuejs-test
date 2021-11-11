<template>
  
  <div class="app-main">

    <h2 class="main-title"><span class="title">Forms</span></h2>
    
    <h3 class="section-title"><span class="title">Inputs, select, textarea</span></h3>
    <p>
      <ui-input id="input" v-model="form.input" type="text" label="Input" :labelAlign="labelAlign"></ui-input>      
      <ui-fileinput id="file1" v-model="form.file" placeholder="Select file" label="File" :labelAlign="labelAlign"></ui-fileinput>     
      <ui-select id="select1" v-model="form.select" :list="list" placeholder="Select item" label="Select" :labelAlign="labelAlign"></ui-select>      
      <ui-select id="select2" v-model="form.selectSearch" :list="list" search placeholder="Type to search" label="Select search" :labelAlign="labelAlign"></ui-select>      
      <ui-textarea id="textarea1" v-model="form.textarea" label="Textarea" :labelAlign="labelAlign"></ui-textarea>
    </p>

    <h3 class="section-title"><span class="title">Readonly & disabled</span></h3>
    <p>
      <ui-input id="inputReadonly" type="text" readonly label="Input (readonly)" :labelAlign="labelAlign" v-model="form.inputReadonly"></ui-input>      
      <ui-input id="inputDisabled" type="text" disabled label="Input (disabled)" :labelAlign="labelAlign" v-model="form.inputDisabled"></ui-input>      
      <ui-textarea id="textareaReadonly" label="Textarea (readonly)" :labelAlign="labelAlign" readonly v-model="form.textareaReadonly"></ui-textarea>      
      <ui-textarea id="textareaDisabled" label="Textarea (disabled)" :labelAlign="labelAlign" disabled v-model="form.textareaDisabled"></ui-textarea>
    </p>

        <base-button css="btn-primary" @click="setData">Set data</base-button>

  </div>

</template>

<script>
export default {
  name: 'ExampleForms',
    components: {  },
    data() {
      return {
        labelAlign: 'left',
        list: [{ value: 1, label: 'Option 1'}, { value: 2, label: 'Option 2'}, { value: 3, label: 'Item 3'}, { value: 4, label: 'Item 4'}, { value: 5, label: 'Select-item 5'}],
        form: {
          input: 'Pepe',
          inputReadonly: 'Readonly input',
          inputDisabled: 'Disabled input',
          file: null,
          textarea: 'Pepe',
          textareaReadonly: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          textareaDisabled: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          select: { label: 'Option 1', value: '1' },
          selectSearch: { label: 'Option 2', value: '2' }
        }
      };
    },
    computed: {
    },
    methods: {
      setData() {
        this.form.input = 'input'
        this.form.textarea = 'textarea'
        this.form.select = { label: 'Option 1', value: '1' }
        this.form.selectSearch = { label: 'Option 2', value: '2' }
      }
    }
  }
  </script>

<style scoped>
</style>
