import Vuex from "vuex";
import Vue from "vue";
import orders from "./modules/orders";


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    orders
  }
});