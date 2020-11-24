import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:null,
    err:null,
    order:null,
    success:false
  },
  getters: {
    err: state => state.err,
    menu: state => state.menu,
    order: state => state.order,
    success: state => state.success
  },
  mutations: {
    AddToOrder(state, data){

      state.order = data;

    },
    GetMenu(state,data){

      state.menu = data;

    },
    OrderComplete(state,data){

      state.success = data;

    },
    AddError(state,data){

      state.err = data;

    },
    clearError(state){

      state.err = null;
    },
  },
  actions: {
    get_menu({commit}){

      axios.get('https://fed12e045b55.ngrok.io/api/chellez/menu').then( response => {

          if(response != null){

            commit("GetMenu", response.data.menu)

          }

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })
    },
    place_order({commit}){

      axios.post('https://fed12e045b55.ngrok.io/api/chellez/place-order').then( response => {

          if(response != null){

            commit("OrderComplete", response.data.status)

          }

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })

    }
  }
})
