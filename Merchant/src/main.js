import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import App from "./App.vue";
import "./assets/css/custome.css";
import "./assets/css/popup.css";
import "./assets/css/style.css";
import router from "./router.js";
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);


Vue.use(BootstrapVue);
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
