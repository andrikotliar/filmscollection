<template>
  <div class="film__cast">
    <h2 class="info-section-title">Cast</h2>
    <div class="film__actors">
      <router-link
        v-for="actor in actors"
        :to="`/actor/${actor.name}`"
        class="film__actor"
        :key="actor.name"
      >
        <div class="film__actor-photo">
          <img :src="`/photos/${actorImage(actor.name)}.jpg`" :alt="actor.name" loading="lazy"/>
        </div>

        <div class="film__actor-info">
          <h3 class="film__actor-name">{{ actor.name }}</h3>
          <p class="film__actor-role">{{ actor.character }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilmCast",
    props: ["actors"],
    methods: {
      actorImage(str) {
        return str.replace(/[\s-]/g, "_").replace(/[.']/g, "");
      },
      emptyActorPhoto() {
        const actorPhotos = document.querySelectorAll('.film__actor-photo img');
        [...actorPhotos].forEach(actorPhoto => {
          actorPhoto.onerror = () => {
            actorPhoto.src = '/photos/noimage.jpg';
          }
        })
      }
    },
    mounted() {
      this.emptyActorPhoto();
    }
  };
</script>

<style>
.film__cast {
  margin: 20px 0;
}
.film__actors {
  --cols: 3;
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-gap: 30px;
  margin-top: 20px;
}
.film__actor {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  padding-right: 10px;
  min-height: 90px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.film__actor-photo {
  font-size: 0;
  flex-shrink: 0;
  margin-right: 20px;
  width: 70px;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}
.film__actor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.film__actor:hover .film__actor-name {
  color: var(--base-color);
}
@media (max-width: 1300px) {
  .film__actors {
    --cols: 2;
  }
}
@media (max-width: 950px) {
  .film__actors {
    --cols: 1;
  }
}
@media (max-width: 760px) {
  .film__actors {
    --cols: 2;
  }
}
@media (max-width: 560px) {
  .film__actors {
    --cols: 1;
    grid-gap: 15px;
  }
}
</style>
