import Vue from 'vue';
import Riple from 'vue-ripple-directive';
import VueScrollProgress from "vue-scroll-progress";

import Btn from './components/buttons/btn.vue';
/* primary btn's */
import btnPrime from './components/buttons/primary/primary.vue';
import btnPrimeOut from './components/buttons/primary/outline.vue';
import btnPrimeFlat from './components/buttons/primary/flat.vue';
/* warning btn's */
import btnWarn from './components/buttons/warning/warning.vue';
import btnWarnOut from './components/buttons/warning/outline.vue';
import btnWarnFlat from './components/buttons/warning/flat.vue';
/* success btn's */
import btnSccss from './components/buttons/success/success.vue';
import btnSccssOut from './components/buttons/success/outline.vue';
import btnSccssFlat from './components/buttons/success/flat.vue';
/* success btn's */
import btnDang from './components/buttons/danger/danger.vue';
import btnDangOut from './components/buttons/danger/outline.vue';
import btnDangFlat from './components/buttons/danger/flat.vue';

import Slider from './components/slider.vue';

Vue.config.devtools = true;
Vue.directive('ripple', Riple);
Vue.use(VueScrollProgress);

const components = {
    Slider,
    /* primary btn */
    btnPrime,
    btnPrimeOut,
    btnPrimeFlat,
    /* warn btn */
    btnWarn,
    btnWarnOut,
    btnWarnFlat,
    /* success btn */
    btnSccss,
    btnSccssOut,
    btnSccssFlat,
    /* Danger btn */
    btnDang,
    btnDangOut,
    btnDangFlat,
};

let base = new Vue({
    el: '#app',
    data: {
        message: 'hello World!'
    },
    components: components,
    methods: {
        Type() {
            alert('Hello World!');
        }
    }
});