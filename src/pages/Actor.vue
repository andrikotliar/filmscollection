<template>
  <div class="actor content">
    <div class="actor__header">
      <div class="actor__photo">
        <img :src="`/photos/${actorImage(name)}.jpg`" :alt="name">
      </div>
      <h1 class="actor__name">
        {{name}}
      </h1>
    </div>
    <FilmsList :list="filmsByActor" />
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import FilmsList from '@/components/interface/FilmsList';
  export default {
    name: 'FilmsListByActor',
    props: {
      name: String
    },
    components: {
      FilmsList
    },
    methods: {
      actorImage(str) {
        return str.replace(/[\s-]/g, "_").replace(/[.']/g, "");
      }
    },
    computed: {
      ...mapState(['films']),
      filmsByActor() {
        const actorFilms = [];
        if(this.films.length) {
          const filmsCopy = JSON.parse(JSON.stringify(this.films));
          const actorName = this.name;
          filmsCopy.map(film => {
            film.actors = film.actors.find(actor => actor.name === actorName);
            if(film.actors != null) {
              actorFilms.push(film);
            }
          })
        }
        return actorFilms;
      }
    }
  }
</script>
<style>
  .actor__header {
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  .actor__photo {
    width: 80px;
    flex-shrink: 0;
  }
  .actor__photo img {
    width: 100%;
    border-radius: 3px;
  }
  .actor__name {
    color: var(--base-color);
    padding-left: 10px;
  }
  @media (max-width: 400px) {
    .actor__name {
      font-size: 20px;
    }
  }
</style>
