<template>
  <div class="content">
    <PageTitle title="Directed by" :value="$route.query.director" v-if="$route.query.director" />
    <PageTitle title="Results for" :value="$route.query.title" v-if="$route.query.title" />
    <PageTitle title="Collection: " :value="$route.query.collections" v-if="$route.query.collections" />
    <FilmsList :list="films" />
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  import FilmsList from '@/components/interface/FilmsList';

  export default {
    name: 'Films',
    computed: {
      ...mapState(['films'])
    },
    components: {
      FilmsList,
      PageTitle: () => import('@/components/interface/PageTitle')
    },
    mounted() {
      document.title = "Films Collection";
      sessionStorage.pageTitle = document.title;
    }
  }
</script>
<style>
  .list-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }
  .list-header__buttons-group {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 450px) {
    .list-header__collections {
      width: 100%;
      justify-content: center;
    }
    .list-header__buttons-group {
      width: 100%;
    }
    .list-header__link {
      justify-content: center;
    }
    .list-header__cup {
      flex-grow: 1;
    }
  }
</style>