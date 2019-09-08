import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Shopcar from '../views/Shopcar.vue'
import Search from '../views/Search.vue'
import Newslist from '../views/Newslist.vue'
import News from '../views/News.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home
        },
        {
            path: '/member',
            component: Member
        },
        {
            path: '/shopcar',
            component: Shopcar
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/newslist',
            component: Newslist
        }, {
            path: '/news/detail/:id',
            component: News
        }

    ]
})