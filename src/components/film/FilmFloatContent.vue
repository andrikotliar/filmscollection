<template>
  <div class="film__float">
    <h4 class="film__data-title">Runtime</h4>
    <FilmRuntime :time="data.time" />
    <h4 class="film__data-title">Studios</h4>
    <FilmDataRow :data="data.production" property="production" />
    <h4 class="film__data-title">Countries of origin</h4>
    <FilmDataRow :data="data.countries" property="countries" />
    <h4 class="film__data-title">Collections</h4>
    <FilmDataRow :data="data.collections" property="collections" link="true" />
    <FilmMoney :budget="data.budget" :boxoffice="data.boxoffice" v-if="data.budget || data.boxoffice" />
  </div>
</template>
<script>
  import FilmDataRow from './FilmDataRow';
  import FilmRuntime from './FilmRuntime';
  import FilmMoney from './FilmMoney';
  export default {
    name: 'FilmFloat',
    props: {
      data: Object
    },
    components: {
      FilmRuntime,
      FilmDataRow,
      FilmMoney
    }
  }
</script>
<style>
  .film__float {
    position: absolute;
    left: 0;
    top: 580px;
    width: var(--sidebar);
  }
  @media (max-width: 1300px) {
    .film__float {
      top: 430px;
    }
  }
  @media (max-width: 760px) {
    .film__float {
      position: static;
      width: auto;
    }
  }
</style>
