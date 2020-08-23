import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/style.css";
import "./styles/font-awesome.css";
import responsive from "vue-responsive";

Vue.config.productionTip = false;
Vue.use(responsive);

new Vue({
  render: h => h(App)
}).$mount("#app");
