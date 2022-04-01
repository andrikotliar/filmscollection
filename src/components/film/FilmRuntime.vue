<template>
  <div class="film__runtime">
    <b>{{time}}</b> <span>min</span> / <b>{{timeInHours}}</b> <span>hours</span>
  </div>
</template>
<script>
  export default {
    name: 'FilmRuntime',
    props: {
      time: Number
    },
    computed: {
        timeInHours() {
          const hours = Math.trunc(this.time / 60);
          const minutes = this.time % 60;
          const showMinutes = minutes > 10 ? minutes : '0' + minutes
          return hours + ':' + showMinutes;
        }
    }
  }
</script>
<style>
  .film__runtime {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  .film__runtime b {
    font-size: 20px;
  }
  .film__runtime span {
    color: #777;
    font-size: 14px;
  }
</style>
