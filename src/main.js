import Vue from 'vue'
import App from './App.vue'
import './assets/css/animate.min.css';
import './assets/css/reset.css';
import './assets/js/rem.js';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import router from './router.js';
import './eventbus.js';
import './axios.js';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')