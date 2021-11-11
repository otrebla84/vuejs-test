<template>
  <div class="ui-textarea">
    <label v-if="label" :for="id" class="label" :class="{ 'label-top': labelAlign === 'top', 'label-left': labelAlign === 'left'}">{{label}}</label>
    <textarea v-model="textarea" class="textarea" :name="name" :id="id" :disabled="disabled" :readonly="readonly"
              @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
  export default {
    props: {
      id: { type: String, required: true },
      name: { type: String, required: false },
      label: { type: String, required: false },
      labelAlign: { type: String, required: false, default: 'top' },
      readonly: { type: Boolean, required: false, default: false },
      disabled: { type: Boolean, required: false, default: false },
      modelValue: { type: String }
    },
    data() {
      return {
      };
    },
    computed: {
      textarea() { return this.modelValue }
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
  
  .ui-textarea .textarea {  
    min-width: calc(100% - 30px);
    max-width: calc(100% - 30px);
    min-height: 70px;
  }

  .ui-textarea .label-left {
    min-height: 70px;
    vertical-align: top;
  }
  .ui-textarea .label-left+.textarea {
    max-width: calc(100% - 232px);
    min-width: calc(100% - 232px);
  }


</style>