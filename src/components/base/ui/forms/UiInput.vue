<template>
  <div class="ui-input">
    <label v-if="label" :for="id" class="label" :class="{ 'label-top': labelAlign === 'top', 'label-left': labelAlign === 'left'}">{{label}}</label>
    <input autocomplete="off" v-model="val" class="input" @input="$emit('update:modelValue', $event.target.value)"
      :type="type" :name="name" :id="id" 
      :disabled="disabled" :readonly="readonly" :minlength="minlength" :maxlength="maxlength"/>
  </div>
</template>

<script>
  export default {
    props: {
      type: { type: String, required: true, default: 'text' },
      id: { type: String, required: true },
      name: { type: String, required: false },
      label: { type: String, required: false },
      labelAlign: { type: String, required: false, default: 'top' },
      modelValue: { type: String },
      readonly: { type: Boolean, required: false, default: false },
      disabled: { type: Boolean, required: false, default: false },
      minlength: { type: Number, required: false },
      maxlength: { type: Number, required: false }
    },
    data() {
      return {
      };
    },
    computed: {
      val() { return this.modelValue }
    },
    methods: { 
    },
    created: function () {
      this.$emit('update:modelValue', this.modelValue)
    }
  }
</script>

<style scoped>

  @import './forms.css';

  


</style>