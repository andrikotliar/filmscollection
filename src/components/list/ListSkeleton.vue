<template>
  <div class="skeleton">
    <div class="skeleton__item" v-for="(item, index) in 24" :key="index">
      <div class="skeleton__wave"></div>
    </div>
  </div>
</template>
<style>
  .skeleton {
    --cols: 6;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-gap: 25px;
  }
  .skeleton__item {
    position: relative;
    aspect-ratio: 11/16;
    background-color: #f2f2f2;
    border-radius: 3px;
    overflow: hidden;
  }
  .skeleton__wave {
    position: absolute;
    top: 0;
    left: -30px;
    width: 30px;
    height: 100%;
    background-color: #faf9f9;
    filter: blur(10px);
    opacity: 0.5;
    animation: 2s wave infinite;
  }
  @media (max-width: 1100px) {
    .list {
      --cols: 4;
    }
  }
  @media (max-width: 785px) {
    .list {
      --cols: 3;
    }
  }
  @media (max-width: 400px) {
    .list {
      grid-gap: 15px;
    }
  }
  @keyframes wave {
    100% {
      left: 100%;
    }
  }
</style>
