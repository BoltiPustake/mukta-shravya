<template>
    <nav>
      <ul>
        <li><router-link to="/login"><span v-if="loginUser"> {{$t('loggedinVolunteer')}}: {{ loginUser }}</span> <span v-else>{{$t('volunteer')}} {{$t('login')}}</span> </router-link></li>
        <li><router-link to="/joinUs">{{$t('volunteerWithUs.header')}} </router-link></li>
        <li><router-link to="/about">{{$t('aboutUs')}} </router-link></li>
        <li><router-link to="/">{{$t('home')}}</router-link></li>

<!--          <li><router-link to="/login"><span v-if="loginUser"> {{t('loggedinVolunteer', {}, {locale: language})}}: {{ loginUser }}</span> <span v-else>{{t('volunteerLogin', {}, {locale: language})}}</span> </router-link></li>
        <li><a href="joinUs.html">{{t('volunteerWithUs', {}, {locale: language})}}</a></li>
        <li><router-link to="/about"  >{{t('aboutUs', {}, {locale: language})}}</router-link></li>
        <li><router-link to="/">{{t('home', {}, {locale: language})}}</router-link></li>
-->      </ul>
    </nav>
</template>
<script>
//import {mapGetters} from 'vuex';
export default {
  computed:  {
    loginUser(){
      return this.$store.getters.getUserName;
    }
  }
}
</script>
<style scoped>
  li:hover{
    transform: scale(1.3, 1.3);
  }

  li{transition: all 0.25s ease; cursor:pointer}
</style>