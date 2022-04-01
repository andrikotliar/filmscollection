<template>
  <div class="seasons">
    <div class="season">
      <div class="season__header">
        <div class="season__list">
          <span>Season</span>
          <button
            v-for="(season, index) in seasons"
            :key="season.season"
            :class="seasonButtonClass(index)"
            @click="changeSeason"
            :data-index="index"
          >
            {{ season.season }}
          </button>
        </div>
        <div class="season__episodes">
          Episodes <b>{{ episodes }}</b>
        </div>
      </div>
      <div class="season__trailer">
        <FilmTrailer :trailer="trailer" />
      </div>
    </div>
  </div>
</template>

<script>
import FilmTrailer from "./FilmTrailer";
export default {
  name: "SeriesSeasons",
  props: ["seasons"],
  data() {
    return {
      trailer: this.seasons[0].trailer,
      episodes: this.seasons[0].episodes,
    };
  },
  methods: {
    seasonButtonClass(index) {
      if (index == 0) {
        return "season__button season__button--active";
      }
      return "season__button";
    },
    changeSeason(e) {
      const target = e.target;
      const index = Number(target.dataset.index);
      const seasonButtons = document.querySelectorAll(".season__button");
      if (this.seasons[index].trailer != undefined) {
        this.trailer = this.seasons[index].trailer;
      }
      this.episodes = this.seasons[index].episodes;

      [...seasonButtons].forEach((item) =>
        item.classList.remove("season__button--active")
      );
      target.classList.add("season__button--active");
    },
  },
  components: {
    FilmTrailer
  },
};
</script>

<style>
  .seasons {
    margin-top: 20px;
  }
  .season__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 20px 20px 25px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .season__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .season__list span {
    margin-right: 20px;
  }
  .season__button {
    margin-right: 10px;
    background-color: #ddd;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    transition: 0.3s;
  }
  .season__button--active {
    color: #fff;
    background-color: var(--base-color);
  }
  .season__episodes {
    display: flex;
    align-items: center;
  }
  .season__episodes b {
    font-size: 1.5rem;
    margin-left: 10px;
  }
  .season__trailer {
    margin-top: -5px;
  }
  @media (max-width: 500px) {
    .season__header {
      flex-direction: column;
      align-items: center;
    }
    .season__list {
      justify-content: center;
      margin-bottom: 20px;
    }
    .season__list span {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5px;
      text-align: center;
    }
  }
</style>
