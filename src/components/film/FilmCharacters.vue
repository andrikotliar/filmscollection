<template>
  <div class="ch-posters">
    <h2 class="info-section-title">Character Posters</h2>
    <div class="ch-posters__collection custom-scroll">
      <div class="ch-poster" v-for="num in characters" :key="num" @click="showPreview(num)">
        <img :src="`/characters/${poster}/${num}.webp`" alt="">
      </div>
    </div>
    <div class="ch-preview" v-if="visible">
      <div class="ch-preview__image">
        <img :src="`/characters/${poster}/${preview}.webp`" alt="">
      </div>
      <button class="ch-preview__close" aria-label="Close preview" @click="closePreview">
        <img src="@/images/icons/close-white.svg" alt="">
      </button>
      <div class="ch-preview__controls">
        <button class="ch-preview__control ch-preview__control--prev" aria-label="Next preview" @click="prevPreview"></button>
        <button class="ch-preview__control ch-preview__control--next" aria-label="Previous preview" @click="nextPreview"></button>
      </div>
    </div>
  </div>
</template>
<script>
  import { scroll } from '@/mixins/scroll';
  export default {
    name: 'FilmCaracters',
    mixins: [scroll],
    props: {
      poster: String,
      characters: Number
    },
    data() {
      return {
        preview: 1,
        visible: false
      }
    },
    methods: {
      showPreview(num) {
        this.preview = num;
        this.visible = true;
        document.body.style.overflow = 'hidden';
      },
      closePreview() {
        this.visible = false;
        document.body.style.overflow = '';
      },
      prevPreview() {
        if(this.preview > 1) {
          this.preview -= 1;
        } else {
          this.preview = this.characters;
        }
      },
      nextPreview() {
        if(this.preview < this.characters) {
          this.preview += 1;
        } else {
          this.preview = 1;
        }
      }
    },
    mounted() {
      this.scroll('.ch-posters__collection');
    }
  }
</script>
<style>
  .ch-posters {
    margin-bottom: 40px;
  }
  .ch-posters__collection {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  .ch-poster {
    flex-shrink: 0;
    width: 200px;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  .ch-poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ch-preview {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 20;
  }
  .ch-preview__image {
    height: 90%;
    max-height: 600px;
    border-radius: 10px;
    overflow: hidden;
    user-select: none;
  }
  .ch-preview__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ch-preview__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
  .ch-preview__controls {
    position: absolute;
    right: 40px;
    bottom: 40px;
    display: flex;
    gap: 20px;
  }
  .ch-preview__control {
    width: 20px;
    height: 20px;
    border-top: 2px solid #fff;
  }
  .ch-preview__control--prev {
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
  }
  .ch-preview__control--next {
    border-right: 2px solid #fff;
    transform: rotate(45deg);
  }
  @media (max-width: 550px) {
    .ch-preview {
      padding: 40px;
    }
    .ch-preview__image {
      width: 100%;
      height: auto;
      max-height: initial;
    }
  }
</style>
