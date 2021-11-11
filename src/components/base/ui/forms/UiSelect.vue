<template>
  <div v-if="!search" class="ui-select" :class="{ 'label-top': labelAlign === 'top', 'label-left': labelAlign === 'left'}">
    <label v-if="label" :for="id" class="label" >{{label}}</label>
    <div>
      <span class="input-placeholder">{{placeholderText}}</span>
      <span v-if="inputSelect === ''" class="fa fa-chevron-down icon-arrow pointer-none"></span>
      <span v-if="inputSelect !== ''" class="fa fa-times icon-arrow pointer" @click="cleanSelect"></span>
      <input autocomplete="off" class="select-input" readonly type="text" name="" :id="id" v-model="inputSelect"/>
      <ul class="select-list">
        <li v-for="item in list" @mousedown="selectItemSelect(item)" class="list-item" :key="item.value" >{{item.label}}</li>
      </ul>
    </div>
  </div>
  <div v-else  class="ui-select-search" :class="{ 'label-top': labelAlign === 'top', 'label-left': labelAlign === 'left'}">
    <label v-if="label" :for="id" class="label">{{label}}</label>
    <div>
      <span class="input-placeholder">{{placeholderText}}</span>
      <span v-if="inputSearch === ''" class="fa fa-chevron-down icon-arrow pointer-none"></span>
      <span v-if="inputSearch !== ''" class="fa fa-times icon-arrow pointer" @click="cleanSelect"></span>
      <input autocomplete="off" class="select-input" @keyup="keyupInput"  type="text" name="" :id="id" v-model="inputSearch"/>
      <ul class="select-list">
        <li v-for="item in filteredList" @mousedown="selectItemSearch(item)" class="list-item" :key="item.value" >{{item.label}}</li>
        <li v-if="filteredList.length === 0" @mousedown="noData"  class="list-item" key="-1" >No data</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: { type: String, required: true },
      name: { type: String, required: false },
      modelValue: { type: Object },
      list: { type: Array, required: true, default:  function () { return [] } },
      placeholder: { type: String, required: false, default: '' },
      search: { type: Boolean, required: false, default: false },
      drop: { type: String, required: false, default: 'down' },
      label: { type: String, required: false },
      labelAlign: { type: String, required: false, default: 'top' }
    },
    data() {
      return {
        inputSearch: '',
        inputSelect: '',
        selectList: this.list,
        selectedInputSearch: { label: '', value: ''},
        selectedInputSelect: { label: '', value: ''}
      };
    },
    computed: {
      filteredList() { 
        if (this.inputSearch === '') { 
          return this.list 
        } else { 
          return this.list.filter( (item) => item.label.toLowerCase().includes(this.inputSearch.toLowerCase()) ) 
        }  
      } ,
      placeholderText() { 
        if (this.search) {
          return this.inputSearch === '' ? this.placeholder : ''
        } else {
          return this.inputSelect === '' ? this.placeholder : ''
        }
      } 
    },
    mounted() {
    },
    methods: {
      noData() {
        this.inputSearch = ''
        this.inputSelect = ''
        this.selectedInputSearch = {}
        this.selectedInputSelect = {}
        this.$emit('update:modelValue', { label: '', value: ''})
      },
      keyupInput() { 
        if (this.inputSearch === '') { 
          this.selectList = this.list 
        } else { 
          this.selectList = this.list.filter( (item) => item.label.toLowerCase().includes(this.inputSearch.toLowerCase()) ) 
        }
      },
      selectItemSearch(item) {
        this.selectedInputSearch = item
        this.inputSearch = item.label
        this.$emit('update:modelValue', item)
      },
      selectItemSelect(item) {
        this.selectedInputSelect = item
        this.inputSelect = item.label
        this.$emit('update:modelValue', item)
      },
      cleanSelect() {
        this.inputSearch = ''
        this.inputSelect = ''
        this.selectedInputSearch = {}
        this.selectedInputSelect = {}
        this.$emit('update:modelValue', { label: '', value: ''})
      }
    },
    created: function () {
      this.inputSelect = this.modelValue.label
      this.inputSearch = this.modelValue.label
      this.selectedInputSelect = this.modelValue
      this.selectedInputSearch = this.modelValue
      this.$emit('update:modelValue', this.modelValue)
    },
    watch: {
      modelValue() {
        console.log(this.modelValue)
        this.selectedInputSelect = this.modelValue
        this.selectedInputSearch = this.modelValue
        this.inputSelect = this.modelValue.label
        this.inputSearch = this.modelValue.label
      }
    }
  }
</script>

<style scoped>

  @import './forms.css';

  .ui-select,
  .ui-select-search {
    position: relative;
  }
  .ui-select div,
  .ui-select-search div {
    display: inline-block;
    width: calc(100% - 200px);
  }
  .ui-select.label-top div,
  .ui-select-search.label-top div {
    position: relative;
    display: inline-block;
    width: calc(100%);
  }
  .ui-select .select-input {
    cursor: pointer;
  } 
  
  .ui-select .select-list,
  .ui-select-search .select-list {
    list-style: none;
    padding: 0;
    background: white;
    border: 1px solid #d3d0f9;
    border-radius:5px;
    position: absolute;
    top: 25px;
    z-index:2;
  }
  .ui-select.label-top .select-list,
  .ui-select-search.label-top .select-list {
    top: 23px;
    width: 100%;
  }

  .ui-select .select-list,
  .ui-select-search .select-list {
    display: none;
  }
  .ui-select .select-input:focus+.select-list,
  .ui-select-search .select-input:focus+.select-list {
    display: block;
  }

  .ui-select .select-list .list-item,
  .ui-select-search .select-list .list-item {
    padding: 5px 15px;
  }
  .ui-select .select-list .list-item:hover,
  .ui-select-search .select-list .list-item:hover {
    background: #f8f6ff;
    cursor: pointer;
  }

</style>