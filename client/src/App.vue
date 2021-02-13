<template>
    <div>
      <div id="wrapper">
        <Header/>
        <NavBar/>
        <main>
          <LeftNav/>
          <router-view/> 
        </main>
        <Footer/>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import LeftNav from '@/components/LeftNav.vue';
import Footer from '@/components/Footer.vue';
/*import {useI18n} from "vue-i18n";*/
export default {
  name: 'app',
/*  data() {
      const {t, locale} = useI18n();
      return {t, locale};
  },*/
  components: {
    Header,
    NavBar,
    LeftNav,
    Footer
  }
}
</script>

<style>
  @import "css/main.css";
</style>
