<template>
  <div class="film__top">
    <router-link :to="`/?year=${year}-${year}`" class="film__year film__link">
      {{year}}
    </router-link>
    <div class="film__genres-list">
      <router-link v-for="(genre, index) in genres" :to="`/?genres=${genre}`" class="film__genre film__link" :key="index">
        {{genre}}
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilmTop',
    props: {
      year: Number,
      genres: Array
    }
  }
</script>
<style>
  .film__top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  .film__link {
    --bg: #f2f2f2;
    border-radius: 4px;
    padding: 5px 15px;
    background-color: var(--bg);
    transition: background-color 0.3s;
  }
  .film__year {
    --bg: var(--base-color);
    color: #fff;
  }
  .film__year:hover {
    --bg: #004471;
  }
  .film__genres-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .film__genre {
    --bg: #ffe6b3;
  }
  .film__genre:hover {
    --bg: #ffd681;
  }
</style>
