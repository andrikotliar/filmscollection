<template>
  <div class="collection content">
    <h1 class="page-title">
      Collection: <span>{{collection}}</span>
    </h1>
    <FilmsList :list="filmsByCollection" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import FilmsList from '@/components/interface/FilmsList';

  export default {
    name: 'Collection',
    props: {
      collection: String
    },
    computed: {
      ...mapState(['films']),
      filmsByCollection() {
        return this.films.filter(film => film.collections.includes(this.collection));
      }
    },
    components: {
      FilmsList
    }
  }
</script>
<style>
  .collection__more {
    margin-bottom: 20px;
  }
</style>