<template>
  <div class="parts">
    <h2 class="info-section-title">Prequels / Sequels</h2>
    <div class="parts__wrapper">
      <ul class="parts__list">
        <li class="parts__item" v-for="film in partsList.slice(0, filmsToShow)" :key="film.id">
          <router-link :to="`/film/${film.id}`" class="parts__poster">
            <img :src="`/posters/${film.poster}.webp`" alt="">
          </router-link>
        </li>
        <li class="parts__item parts__more" @click="showMoreParts" v-if="partsList.length > filmsToShow">
          {{partsList.length - filmsToShow}} <span>parts more</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilmParts",
    props: {
      data: Array,
      parts: Object
    },
    data() {
      return {
        filmsToShow: 19
      }
    },
    methods: {
      showMoreParts() {
        this.filmsToShow += 19;
      }
    },
    computed: {
      partsList() {
        return this.data.filter((film) => {
          if (film.parts != undefined) {
            return film.parts.title == this.parts.title;
          }
        }).sort((a, b) => a.parts.part > b.parts.part ? 1 : -1);
      }
    },
    watch: {
      $route(to, from) {
        if(to != from) {
          this.filmsToShow = 20;
        }
      }
    }
  };
</script>

<style>
  .parts {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    border-top: 1px solid #ddd;
  }
  .parts__wrapper {
    margin-bottom: 30px;
  }
  .parts__list {
    --itemMinWidth: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--itemMinWidth), 1fr));
    grid-gap: 15px;
    margin: 15px 0;
  }
  .parts__poster {
    width: 100%;
    aspect-ratio: 8 / 12;
    border-radius: 4px;
    overflow: hidden;
  }
  .parts__poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .parts__item a {
    display: block;
    border-radius: 4px;
    background-color: #f2f2f2;
  }
  .parts__more {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #777;
    font-size: 30px;
    font-weight: bold;
    aspect-ratio: 8 / 12;
    background-color: #f2f2f2;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 3px;
    transition: background-color 0.3s;
  }
  .parts__more span {
    font-size: 14px;
  }
  .parts__more:hover {
    background-color: #ddd;
  }
  .parts .router-link-active {
    opacity: 0.5;
    cursor: default;
  }
  @media (max-width: 500px) {
    .parts__list {
      --itemMinWidth: 60px;
    }
    .parts__more {
      font-size: 25px;
    }
    .parts__more span {
      font-size: 10px;
    }
  }
</style>
