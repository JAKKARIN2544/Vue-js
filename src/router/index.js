import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import workshop1 from '../components/workshop1.vue'
import workshop2 from '../components/workshop2.vue'
import workshop3 from '../components/workshop3.vue'
import grade from '../components/grade.vue'
import multi from '../components/multi.vue'
import person from '../components/person.vue'
import users from '../components/showUser.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/workshop1',
        name: 'workshop1',
        component: workshop1
    },
    {
        path: '/workshop2',
        name: 'workshop2',
        component: workshop2
    },
    {
        path: '/workshop3',
        name: 'workshop3',
        component: workshop3
    },
    {
        path: '/multi',
        name: 'multi',
        component: multi
    },
    {
        path: '/grade',
        name: 'grade',
        component: grade
    },
    {
        path: '/person',
        name: 'person',
        component: person
    },
    {
        path: '/users',
        name: 'users',
        component: users
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router