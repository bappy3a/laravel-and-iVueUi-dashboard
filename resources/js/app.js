
require('./bootstrap');

window.Vue = require('vue');

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('mainapp', require('./components/mainapp.vue').default)


const app = new Vue({
    el: '#app',
});
