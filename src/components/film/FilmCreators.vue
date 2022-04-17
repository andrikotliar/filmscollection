<template>
  <div class="film__creators" :class="className">
    <div class="film__creators-position">
      {{position}}
    </div>
    <div class="film__creators-names" v-if="typeof names == 'object'">
      <router-link
        class="film__creators-link"
        v-for="(name, index) in names"
        :to="`/?director=${name}`"
        :key="index"
      >
          <b>{{name}}</b>
          <span v-if="names.length > 1 && index != names.length - 1">, </span>
      </router-link>
    </div>
    <div class="film__creators-names" v-else>
      {{names}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilmCreators',
    props: {
      position: String,
      names: [String, Array],
      className: String
    }
  }
</script>
<style>
  .film__creators {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d2d2d2;
  }
  .film__creators-position {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    width: 180px;
    margin-top: 6px;
    flex-shrink: 0;
  }
  .film__creators-names {
    font-size: 18px;
    line-height: 25px;
  }
  .film__creators-link {
    color: var(--base-color);
  }
  .film__creators-link b {
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    .film__creators {
      flex-direction: column;
    }
    .film__creators-position {
      margin-bottom: 5px;
    }
  }
</style>
