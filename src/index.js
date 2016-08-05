import { alert,dropdown,datepicker } from 'vue-strap'
import { vshare } from './v-share.js'

console.log(alert)

new Vue({
    el: '#app',
    data: {
        showRight: false,
        value: '2016-08-04 12:00'
    },
    components: {
        'alert': alert,
        dropdown,
        datepicker
    },
    methods: {
        click_toggle: function() {
            this.showRight = !this.showRight;
        }
    }
});