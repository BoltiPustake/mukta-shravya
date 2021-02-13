<template>
      <div id="contentWrapper"  >
        <h1>{{$t('findABook')}}:</h1>
        <h2>({{$t('chooseCriteria')}})</h2>
        <form class="searchForm" action="searchResults.html" method="post">
          <span class="searchCriteria">
            <input type="checkbox" id="history" name="history" value="history">
            <label for="history">{{$t('history')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="novel" name="novel" value="novel">
            <label for="novel">{{$t('fiction')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="religious" name="religious" value="religious">
            <label for="religious">{{$t('religion')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="social" name="social" value="social">
            <label for="social">{{$t('social')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="biography" name="biography" value="biography">
            <label for="thoughts">{{$t('biography')}}</label>
          </span>
          <div>
            <button type="submit" class="button_1" name="submit">{{$t('Search')}}</button>
          </div>
        </form>
      <div id="searchResults" />
    </div>
</template>
<script>
  export default {
/*    data() {
      return {
        lang: this.$store.state.lang
      };
    },
    setup() {
      const {t, locale} = useI18n();
      return {t, locale};
    },
    computed: {
      language(){
        return this.$store.state.lang;
      }
    }
  */}
</script>
<style scoped>

</style>