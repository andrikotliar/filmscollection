<template>
  <div class="film__trailer" @click="addTrailer">
    <img
      :src="`https://i.ytimg.com/vi/${trailer}/hqdefault.jpg`"
      class="film__trailer-cover"
      alt=""
    />
    <button class="film__trailer-btn" @click="addTrailer">
      <img src="@/images/icons/play.svg" alt="Play button" />
    </button>
  </div>
</template>

<script>
export default {
  name: "FilmTrailer",
  props: {
    trailer: String
  },
  methods: {
    addTrailer() {
      const trailer = document.querySelector(".film__trailer");
      const button = document.querySelector(".film__trailer-btn");
      const cover = document.querySelector(".film__trailer-cover");
      const iframe = document.createElement("iframe");

      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay");
      iframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${this.trailer}?rel=0&showinfo=0&autoplay=1`
      );
      iframe.classList.add("film__trailer-cover");

      if (button) {
        button.remove();
      }
      cover.remove();
      trailer.appendChild(iframe);
    },
  },
  watch: {
    trailer() {
      const iframe = document.querySelector(".film__trailer-cover");
      iframe.src = `https://www.youtube.com/embed/${this.trailer}?rel=0&showinfo=0`;
    },
  },
};
</script>

<style>
.film__trailer {
  position: relative;
  width: 100%;
  height: 0;
  background-color: #000;
  padding-bottom: 56.25%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
}
.film__trailer-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}
.film__trailer-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  margin-top: -40px;
  filter: drop-shadow(2px 2px 3px rgba(0,0,0,.3));
}
.film__trailer-btn:active {
  filter: initial;
}
.film__trailer-btn img {
  width: 100%;
  height: 100%;
}
</style>
