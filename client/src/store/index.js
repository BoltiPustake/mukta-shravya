import Vue from "vue";
import Vuex from "vuex";
//import globalState from "./modules/globalState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName:''
  },
  mutations: {
      setLoggedUser (state, loggedInUser){
      state.userName = loggedInUser;
      console.log("inside globalState, set username to "+state.userName)
    }
  },
  getters: {
    getUserName: state => state.userName
  }
});
