<template>
    <header>
      <img src="../assets/BoltiPustakeSmall.jpg" alt="logo">
      <div class="locale-changer">
        <span>Choose Language:</span>
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.short">
            {{ lang.long }}
          </option>
        </select>
      </div>
      <h1><span class="highlight"> {{$t('boltiPustake')}} : </span> Indian Audio Books</h1>
      <h2>{{$t('headerTagLine')}}</h2>

  <!--      <a href="#" @click="toggleLanguage">{{t('langChange', {}, {locale: language})}}</a>
      <h1><span class="highlight"> {{t('boltiPustake', {}, {locale: language})}} : </span> Marathi Audio Books</h1>
      <h2>{{t('headerTagLine', {}, {locale: language})}}</h2>
-->    </header>
</template>

<script>

    export default{
    data () {
      return { langs:
        [
          {short:'en', long:'English'},
          {short:'mr', long:'मराठी'},
          {short:'hi', long:'हिंदी'}
        ]
      }
    }
/*            const {t, locale} = useI18n();
            return{
                lang: this.$store.state.lang,
                useI18n: {t, locale}
            }
        },
        methods:{
          changeLanguage(event) {
            i18n.locale = event.value;
          }
        },
        computed: {
          language(){
            return this.$store.state.lang;
          }
        }
  */  }

</script>
<style scoped>

</style>