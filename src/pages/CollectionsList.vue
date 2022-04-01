<template>
  <div class="collections-list">
    <div class="collections-list__container container content">
      <router-link
        class="collections-list__link"
        v-for="(collection, index) in collections"
        :to="`/collections/${collection.link}`"
        :key="index"
      >
        <div class="collections-list__image">
          <img :src="`/posters/${collection.poster}.webp`" :alt="collection.link">
        </div>
        <div class="collections-list__content">
          <h2 class="collections-list__link-title">
            {{collection.link}}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { collections } from '@/data/collections';
  export default {
    name: 'CollectionsList',
    data() {
      return {
        collections
      }
    }
  }
</script>

<style>
  .collections-list__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
  .collections-list__link {
    width: 125px;
  }
  .collections-list__image {
    position: relative;
    z-index: 10;
  }
  .collections-list__image::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 90%;
    height: 10px;
    background-color: #777;
    border-radius: 5px;
    transform: translateX(-50%);
    transition: 0.3s;
    z-index: -1;
  }
  .collections-list__image::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    width: 80%;
    height: 10px;
    background-color: #ddd;
    border-radius: 5px;
    transform: translateX(-50%);
    transition: 0.6s;
    z-index: -2;
  }
  .collections-list__image img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 5px;
  }
  .collections-list__link-title {
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-top: 5px;
  }
  .collections-list__link:hover .collections-list__link-title {
    color: var(--base-color);
  }
</style>