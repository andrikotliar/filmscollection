<template>
  <div class="awards">
    <h2 class="info-section-title">Awards</h2>
    <div class="awards__list">
      <div
        class="award"
        v-for="award in awards"
        :key="award.title"
      >
        <h3 class="award__title">
          {{award.title}}
        </h3>
        <ul class="award__nominations">
          <li
            v-for="nomination in award.nominations"
            :key="nomination"
          >
            {{nomination}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { scroll } from "@/mixins/scroll";
  export default {
    name: "FilmAwards",
    mixins: [scroll],
    props: {
      awards: Array
    },
    mounted() {
      this.scroll(".awards__list");
    }
  };
</script>
<style>
  .awards__list {
    display: flex;
    gap: 20px;
    margin-top: 15px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    overflow-x: auto;
    cursor: grab;
    scrollbar-width: none;
  }
  .awards__list::-webkit-scrollbar {
    display: none;
  }
  .award {
    flex-shrink: 0;
    width: 250px;
  }
  .award__title {
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
    background-color: var(--base-color);
    padding: 10px 20px;
    border-radius: 3px 3px 0 0;
  }
  .award__nominations {
    font-size: 15px;
    background-color: #f2f2f2;
    border-radius: 0 0 3px 3px;
    max-height: 150px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--base-color);
  }
  .award__nominations::-webkit-scrollbar {
    width: 5px;
  }
  .award__nominations::-webkit-scrollbar-thumb {
    background-image: var(--main-gradient);
    border-radius: 50px;
  }
  .award__nominations li {
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s;
  }
  .award__nominations li:last-child {
    border-bottom: 0;
  }
  .award__nominations li:hover {
    background-color: #ddd;
  }
</style>
