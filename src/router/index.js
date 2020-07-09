import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../views/UserProfile.vue'
import Home from '../views/Home'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [

        { path: '/', component: Home },
        { path: '/user', component: User, name: User }
    ]
})
export default router