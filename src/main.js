import Vue from 'vue'

window.axios = require('axios');

const templates = require.context('./', true, /\.vue$/i);
templates.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], templates(key).default));


const app  = new Vue({
    el: '#app',
});
window._vm = app;

