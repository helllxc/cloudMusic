import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../components/home/home.vue'

const router = new Router({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            component:Home
        }
    ]
})

export default router