<template>
  <teleport to="body">
    <div v-if="show" class="dialog-backdrop" @click="$emit('close')"></div>
    <transition name="dialog">
      <dialog open class="base-dialog" v-if="show">
        <header>
          <slot name="header">
            <h2 class="dialog-title">
              <span v-if="icon==='ok'" class="fa fa-check dialog-icon icon-ok"></span>   
              <span v-if="icon==='warning'" class="fa fa-exclamation dialog-icon icon-warning"></span>    
              <span v-if="icon==='info'" class="fa fa-info dialog-icon icon-info"></span>     
              <span v-if="icon==='error'" class="fa fa-times dialog-icon icon-error"></span>              
              <span class="title">{{ title }}</span>
            </h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu class="dialog-buttons">
          <slot name="actions">
            <base-button @click="$emit('close')">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true },
    title: { type: String, required: false },
    icon: { type: String, required: false, default: '' }
  },
  computed: {
  },
  emits: ['close']
};
</script>

<style>

  .base-dialog {
    position: fixed;
    top: 20vh;
    width: 80%;
    z-index: 100;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    margin: 0 auto;
    overflow: hidden;
    animation: dialog 0.3s ease-out ; 
  }
  .base-dialog .dialog-icon {
    font-size:20px;
    margin-right: 10px; 
    vertical-align: middle;
  }
  .base-dialog .dialog-icon.icon-warning {
    color: #bc7a00;
  }
  .base-dialog .dialog-icon.icon-info {
    color: #0c00a0;
  }
  .base-dialog .dialog-icon.icon-error {
    color: #b80404;
  }
  .base-dialog .dialog-icon.icon-ok {
    color: #4cae4c;
  }
  .base-dialog .dialog-title {
    margin-top: 0;
    margin-bottom: 20px;    
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .base-dialog .dialog-title .title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -1px;
    display: inline-block;
  }
  .base-dialog .dialog-buttons .btn {
    margin-left: 10px;
  }

  .dialog-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

header {
  width: 100%;
}

header h2 {
  margin: 0;
}

section {
}

menu {
  display: flex;
  justify-content: flex-end;
  margin: 0;
}



.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
.dialog-enter-active {
  transition: all 0.5s ease-out;
}
.dialog-leave-active {
  transition: all 0.2s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
}

</style>