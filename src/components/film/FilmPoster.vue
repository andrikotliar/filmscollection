<template>
  <div class="film__poster">
    <img :src="`/posters/${poster}.webp`" :alt="title">
  </div>
</template>

<script>
  export default {
    name: 'FilmPoster',
    props: {
      poster: String,
      title: String
    }
  }
</script>

<style>
.film__poster {
  flex-shrink: 0;
  width: 100%;
  font-size: 0;
  margin-bottom: 20px;
}
.film__poster img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
@media (max-width: 650px) {
  .film__poster {
    width: 100%;
  }
  .film__poster img {
    width: 100%;
  }
}
</style>
