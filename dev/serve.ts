import Vue, { VNode } from 'vue';
import VueCompositionAPI from "@vue/composition-api";
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import VCodyhouseComponents from '@/entry.esm';
import "../src/styles/style.scss";

Vue.use(VueCompositionAPI);
Vue.use(VCodyhouseComponents);
Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
