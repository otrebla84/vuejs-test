import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js';
import i18n from './i18n.js';
import store from './store.js';

import BasePanel from './components/base/ui/BasePanel.vue';
import BaseButton from './components/base/ui/BaseButton.vue';
import BaseForm from './components/base/ui/BaseForm.vue';
import BaseDialog from './components/base/ui/BaseDialog.vue';
import UiInput from './components/base/ui/forms/UiInput.vue';
import UiFileinput from './components/base/ui/forms/UiFileinput.vue';
import UiTextarea from './components/base/ui/forms/UiTextarea.vue';
import UiSelect from './components/base/ui/forms/UiSelect.vue';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(store);

app.component('base-panel', BasePanel);
app.component('base-button', BaseButton);
app.component('base-form', BaseForm);
app.component('base-dialog', BaseDialog);
app.component('ui-input', UiInput);
app.component('ui-fileinput', UiFileinput);
app.component('ui-textarea', UiTextarea);
app.component('ui-select', UiSelect);

app.mount('#app');
