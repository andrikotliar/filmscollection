<template>
  <article class="film" v-if="film != undefined">
    <div class="container">
      <div class="film__container">
        <div class="film__sidebar">
          <FilmPoster :poster="film.poster" :title="film.title" />
        </div>
        <div class="film__content">
          <h1 class="film__title">{{ film.title }}</h1>
          <FilmTop :year="film.year" :genres="film.genres" />
          <p class="film__synopsis">
            {{film.synopsis}}
          </p>
          <div class="film__creators-wrapper">
            <FilmCreators
              position="Directed by"
              :names="film.director"
              className="film__creators--single"
              v-if="!film.type.includes('Series')"
            />
            <FilmCreators
              position="Creators"
              :names="film.director"
              className="film__creators--single"
              v-else
            />
            <FilmCreators
              position="Writtens by"
              :names="film.writtens"
            />
            <FilmCreators
              position="Produced by"
              :names="film.producers"
            />
            <FilmCreators
              position="Music by"
              :names="film.music"
            />
            <FilmCreators
              position="Cinematography by"
              :names="film.cinema"
              v-if="film.cinema"
            />
          </div>
          <FilmFloatContent :data="film" />
          <FilmTrailer :trailer="film.trailer" v-if="!film.type.includes('Series')" />
          <SeriesSeasons :seasons="film.seasons" v-if="film.type.includes('Series')" />
          <FilmCast :actors="film.actors" />
          <FilmCharacters :poster="film.poster" :characters="film.characters" v-if="film.characters" />
          <FilmAwards :awards="film.awards"  v-if="film.awards" />
        </div>
      </div>
      <FilmParts :data="films" :parts="film.parts" v-if="film.parts" />
    </div>
  </article>
</template>

<script>
  import { mapState } from 'vuex';

  import FilmPoster from "@/components/film/FilmPoster";
  import FilmTop from "@/components/film/FilmTop";
  import FilmFloatContent from '@/components/film/FilmFloatContent';
  import FilmCreators from "@/components/film/FilmCreators";
  import FilmCast from '@/components/film/FilmCast';

  export default {
    names: 'Film',
    props: {
      id: String
    },
    computed: {
      ...mapState(['films']),
      film() {
        return this.films.find(film => film['id'] === parseInt(this.id));
      }
    },
    mounted() {
      if(sessionStorage.pageTitle) {
        document.title = sessionStorage.pageTitle;
      } else {
        document.title = 'Films Collection';
      }
      if(this.film != undefined) {
        document.title = this.film.title + ' – Films Collection';
        sessionStorage.pageTitle = document.title;
      }
    },
    watch: {
      $route(to, from) {
        if(to != from) {
          document.title = this.film.title + ' – Films Collection';
        }
      }
    },
    components: {
      FilmPoster,
      FilmTop,
      FilmFloatContent,
      FilmCreators,
      FilmCast,
      FilmTrailer: () => import('@/components/film/FilmTrailer'),
      SeriesSeasons: () => import('@/components/film/SeriesSeasons'),
      FilmCharacters: () => import('@/components/film/FilmCharacters'),
      FilmAwards: () => import('@/components/film/FilmAwards'),
      FilmParts: () => import('@/components/film/FilmParts')
    }
  }
</script>
<style>
  .film {
    min-height: 100vh;
  }
  .film__container {
    --sidebar: 350px;
    --cols: var(--sidebar) minmax(0, 1fr);
    position: relative;
    display: grid;
    grid-template-columns: var(--cols);
    grid-column-gap: 30px;
    padding-top: 30px;
  }
  .film__title {
    color: var(--base-color);
    font-size: 40px;
    line-height: 1;
  }
  .film__data-title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .film__synopsis {
    line-height: 1.5;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  @media (max-width: 1300px) {
    .film__container {
      --sidebar: 250px;
    }
  }
  @media (max-width: 760px) {
    .film__container {
      --cols: minmax(0, 1fr);
    }
  }
</style>
