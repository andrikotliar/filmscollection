<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo" @click="toTop">
        <img src="@/images/logo/footer-logo.svg" alt="Film Collection">
      </div>
      <Search className="footer__search" />
    </div>
  </footer>
</template>
<script>
  import Search from '@/components/interface/Search';
  export default {
    name: 'Footer',
    components: {
      Search
    },
    methods: {
      toTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    }
  }
</script>
<style>
  .footer__logo {
    max-width: 250px;
    width: 100%;
    cursor: pointer;
  }
  .footer__container {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #ddd;
  }
  .footer__search {
    width: 40%;
  }
  @media (max-width: 785px) {
    .footer__container {
      flex-direction: column-reverse;
      align-items: center;
    }
    .footer__search {
      width: 100%;
      margin-bottom: 20px;
    }
  }
</style>
