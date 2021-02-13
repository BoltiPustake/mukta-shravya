<template>
  <div id="contentWrapper">
    <h1>{{$t('volunteer')}} {{$t('login')}}</h1>
    <button @click="handleClickGetAuth" :disabled="loginUser">get auth code</button>
    <button @click="handleClickSignIn" v-if="!loginUser" >{{$t('login')}}</button>
    <button @click="handleClickSignOut" v-if="loginUser" >{{$t('logout')}}</button>
  </div>
</template>

<script>
/** 
* You should first need to place these 2 lines of code in your APP ENTRY file, e.g. src/main.js
*
* import GAuth from 'vue-google-oauth2'
* Vue.use(GAuth, {clientId: '4584XXXXXXXX-2gqknkvdjfkdfkvb8uja2k65sldsms7qo9.apps.googleusercontent.com'})
* 
*/
export default {
  name: 'test',
  data: () => {
    return {
      isInit: false,
      isSignIn: false,
      user: ''
    }
  },
  computed:  {
    loginUser(){
      return this.$store.getters.getUserName;
    }
  },
  methods: {
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
      })
/*      .then(response => {
        // And then
      })
      .catch(error => {
        // On fail do something
      })*/
    },

    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        this.user = googleUser.getBasicProfile().getName();
        this.$store.commit("setLoggedUser", this.user);
        this.isSignIn = true;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.user = "";
        this.$store.commit("setLoggedUser", this.user);
        console.log("committed user to state:"+this.user);
        this.isSignIn = false;
      } catch (error) {
        console.error(error);
      }
    },
    mounted(){
      let that = this
      let checkGauthLoad = setInterval(function(){
        that.isInit = that.$gAuth.isInit
        that.isSignIn = that.$gAuth.isAuthorized
        if(that.isInit) clearInterval(checkGauthLoad)
      }, 1000);

      this.user = this.$store.getters.getUserName;
    }
  }
  
}
</script>