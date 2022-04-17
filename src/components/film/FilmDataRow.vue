<template>
  <div class="film__data-row">
    <div
      class="film__data-item"
      v-for="(item, index) in data"
      :key="index"
    >
      <router-link
        class="film__data-link"
        :to="`/?${property}=${item}`"
      >
        {{item}}
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilmDataRow',
    props: {
      data: Array,
      property: String
    },
    computed: {
      routeStyle() {
        if(this.link) {
          return `/${this.property}/`
        }
        return `/?${this.property}=`
      }
    }
  }
</script>
<style>
  .film__data-row {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  .film__data-row:last-child {
    border-bottom: 0;
  }
  .film__data-item {
    margin-bottom: 5px;
  }
  .film__data-item:last-child {
    margin-bottom: 0;
  }
  .film__data-link {
    color: var(--base-color);
    font-size: 18px;
  }
  .film__data-link:hover {
    text-decoration: underline;
  }
</style>
