import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Vant from 'vant'
import axios from 'axios'
import Header from './views/common/Header.vue'
import Footer from './views/common/Footer.vue'
import 'vant/lib/index.css'
// import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Vant)

// 注册组件到全局
Vue.component('Header', Header)
Vue.component('Footer', Footer)

Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.filter('dateFormatNotTime', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d}`
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')