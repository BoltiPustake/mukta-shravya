<template>
      <div id="contentWrapper"  >
        <h2>{{$t('leftNav.BooksList')}}</h2>
        <ul>
          <li
          v-for="(book, index) in books"
          v-bind:item="book"
          v-bind:index="index"
          v-bind:key="book._id"
          >
            <a v-if="language==book.Language" href="book.html">{{book.VernacularHeader.Title}} ({{$t('leftNav.ReadBy')}}: {{book.VernacularHeader.Reader}})</a>
            <a v-else href="book.html">{{book.EnglishHeader.Title}}( {{$t('leftNav.ReadBy')}} {{book.EnglishHeader.Reader}})</a>
          </li>
        </ul>
      </div>
</template>

<script>
import BookService from '../BookService';
//import {useI18n} from "vue-i18n";

export default {
  name: 'LeftNav',
  data() {
    return {
      books: [], //This will be filled by the API calls later
      title: '',
      vernacularTitle:'',
      reader: '',
      vernacularReader:''
    }
  },
  async created(){
    try{
      this.books=await BookService.getBooks();

    } catch(err){
      this.error = err.message;
    }
  },
  computed: {
    language(){
      return this.$i18n.locale;
    }
  }
/*  setup() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
