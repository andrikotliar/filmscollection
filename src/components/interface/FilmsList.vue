<template>
  <div class="data">
    <div class="list">
      <router-link
        class="list-film"
        v-for="(film, index) in filmsWithPagination"
        :to="`/film/${film.id}`"
        :key="film.id"
        :data-num="index + 1"
      >
        <div class="list-film__cover">
          <img
            :src="`/posters/${film.poster}.webp`"
            :alt="film.title"
          />
          <p class="list-film__character" v-if="$route.name == 'actor'">
            as {{film.actors.character}}
          </p>
        </div>
        <h3 class="list-film__title">
          {{film.title}}
        </h3>
        <p class="list-film__subtitle">
          ({{film.year}})
        </p>
      </router-link>
    </div>
    <span v-if="!list.length">Films not found</span>
    <ListPagination :count="filteredFilms.length" :perPage="perPage" />
  </div>
</template>
<script>
  import ListPagination from '@/components/list/ListPagination';

  export default {
    name: 'FilmsList',
    props: {
      list: Array
    },
    data() {
      return {
        perPage: 24
      }
    },
    components: {
      ListPagination
    },
    methods: {
      paginate(films) {
        let page;
        if (this.$route.query.page) {
          page = this.$route.query.page;
        } else {
          page = 1;
        }
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        return films.slice(from, to);
      },
      filterFilms(list) {
        let newList = [];
        let params = Object.assign({}, this.$route.query);
        delete params.page;
        list.filter((film) => {
            let match = Object.keys(params).every(property => {
              let res = null;
              if(typeof film[property] == 'object') {
                res = film[property].some(item => params[property].includes(item));
              }
              else if(typeof film[property] == 'string') {
                const reg = new RegExp(params[property], "gi");
                res = reg.test(film[property]);
              }
              else if(film.year) {
                let min = Number(params.year.split('-')[0]);
                let max = Number(params.year.split('-')[1]);

                res = film.year >= min && film.year <= max;
              }
              return res;
            });
            if(match) {
              newList.push(film);
            }
        });
        return newList;
      }
    },
    computed: {
      filteredFilms() {
        return this.filterFilms(this.list);
      },
      filmsWithPagination() {
        return this.paginate(this.filteredFilms);
      }
    }
  }
</script>
<style>
  .list {
    --cols: 6;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-gap: 25px;
    align-items: start;
    margin-bottom: 20px;
  }
  .list-film {
    display: block;
    width: 100%;
  }
  .list-film__cover {
    position: relative;
    width: 100%;
    aspect-ratio: 11/16;
    border-radius: 2px;
    overflow: hidden;
    background-color: #f2f2f2;
  }
  .list-film__cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .list-film__title {
    text-align: center;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    transition: color 0.3s;
  }
  .list-film__title {
    margin-top: 5px;
  }
  .list-film:hover .list-film__title {
    color: var(--base-color);
  }
  .list-film__subtitle {
    text-align: center;
    font-size: 12px;
    color: #777;
  }
  .list-film__character {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  @media (max-width: 1100px) {
    .list {
      --cols: 4;
    }
  }
  @media (max-width: 785px) {
    .list {
      --cols: 3;
    }
  }
  @media (max-width: 400px) {
    .list {
      grid-gap: 15px;
    }
    .list-film__title,
    .list-film__subtitle {
      display: none;
    }
  }
</style>
