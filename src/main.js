import {createApp} from 'vue'

let App = {
    data() {
        return {}
    }
}

const vueApp    = createApp(App)
const templates = require.context('./', true, /\.vue$/i);
templates.keys().map(key => vueApp.component(key.split('/').pop().split('.')[0], templates(key).default));

vueApp.mount("#app");
window.axios = require('axios');

