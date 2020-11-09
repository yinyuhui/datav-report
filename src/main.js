import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './plugins/element.js'
import './plugins/vcharts.js'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
Vue.component('v-chart', VueECharts)

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
