<template>
  <div class="content">
    <h1 class="page-title top10-title">
      <span>Top 10</span>
    </h1>
    <FilmsList :list="filmsByTop" class="top-list" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import FilmsList from '@/components/interface/FilmsList';

  export default {
    name: 'Top',
    components: {
      FilmsList
    },
    computed: {
      ...mapState(['films']),
      filmsByTop() {
        return this.films.filter(film => film.top != undefined).sort((a, b) => a.top > b.top ? 1 : -1);
      }
    },
    mounted() {
      document.title = 'Top 10 – Films Collection';
      sessionStorage.pageTitle = document.title;
    }
  }
</script>

<style>
  .top10-title {
    text-transform: uppercase;
  }
  .top-list .list-film {
    position: relative;
  }
  .top-list .list-film::before {
    content: attr(data-num);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    background-color: var(--base-color);
    padding: 5px 10px;
    z-index: 10;
    border-radius: 2px 0 2px 0;
  }
</style>