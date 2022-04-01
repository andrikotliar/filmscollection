<template>
  <div class="content">
    <h1 class="page-title">Directed by <span>{{director}}</span></h1>
    <FilmsList :list="filmsByDirector" />
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  import FilmsList from '@/components/interface/FilmsList';

  export default {
    name: 'Director',
    props: {
      director: String
    },
    computed: {
      ...mapState(['films']),
      filmsByDirector() {
        return this.films.filter(film => film.director.includes(this.director))
      }
    },
    components: {
      FilmsList
    },
    mounted() {
      document.title = `Directed by ${this.director} – Films Collection`;
      sessionStorage.pageTitle = document.title;
    }
  }
</script>