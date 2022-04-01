<template>
  <div class="search-results content">
    <Search class="search-results__field" />
    <h1 class="search-results__title">
      Results for <span>«{{title}}»</span>
    </h1>
    <p class="search-results__count">
      Found <b>{{searchResults.length}}</b> film<span v-if="searchResults.length > 1">s</span>
    </p>
    <FilmsList :list="searchResults" />
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import FilmsList from '@/components/interface/FilmsList';
  import Search from '@/components/interface/Search';
  export default {
    name: 'SearchResults',
    props: {
      title: String
    },
    components: {
      FilmsList,
      Search
    },
    computed: {
      ...mapState(['films']),
      searchResults() {
        const reg = new RegExp(this.title, "gi");
        return this.films.filter(film => reg.test(film.title));
      }
    },
    mounted() {
      document.title = "Results for: «" + this.title + "» – Films Collection";
      sessionStorage.pageTitle = document.title;
    }
  }
</script>
<style>
  .search-results__field {
    margin-bottom: 30px;
  }
  .search-results__title {
    color: #777;
    font-size: 25px;
  }
  .search-results__title span {
    color: var(--base-color);
  }
  .search-results__count {
    color: #ddd;
    margin: 10px 0 20px;
  }
  @media (max-width: 550px) {
    .search-results__title {
      font-size: 25px;
    }
  }
</style>
