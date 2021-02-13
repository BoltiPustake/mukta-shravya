const state={
      userName:"Not Logged In Yet"
};
const getters={
    userName (state) {
        console.log("in getter, returning:"+state.userName);
      return state.userName
    }
//    userName: (state) => state.userName
};
const actions={};
const mutations={
    setLoggedUser (state, loggedInUser){
        state.userName = loggedInUser;
        console.log("inside globalState, set username to "+state.userName)
    }

};

export default{
    state,
    getters,
    actions,
    mutations
};