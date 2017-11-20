import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import vAudio from './components/audio/audio.vue'
import './assets/js/iconfont'
import {store} from './store/store'
// 调用方法:this.$axios
Vue.prototype.$axios=axios;
Vue.config.debug = true;
import util from './util/util'
Vue.use(util)

new Vue({
    el: '#root',
    router,
    store,
    template: '<App/>',
    components: { App ,vAudio }
})