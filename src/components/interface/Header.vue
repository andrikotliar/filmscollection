<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__main">
        <router-link to="/" class="header__logo">
          <img src="@/images/logo/header-logo.svg" alt="Films Collection" class="header__logo-image">
        </router-link>
        <nav class="header__navigation">
          <button
            class="header__button header__sidebar-button"
            @click="showSidebar"
            v-if="$route.name != 'film' && $route.name != 'collections-list'"
          >
          </button>
          <button
            class="header__button header__search-button"
            @click="showSearch"
            aria-label="Show search field"
            title="Search"
            v-if="$route.name != 'search'"
          >
          </button>
        </nav>
      </div>
      <Search className="header__search" :hiddenSearch="true" />
    </div>
  </header>
</template>
<script>
  import Search from "./Search";
  export default {
    name: "Header",
    methods: {
      showSearch() {
        const headerSearch = document.querySelector('.header__search');
        const searchButton = document.querySelector('.header__search-button');
        const searchFieldInput = document.querySelector(".search-field__input");

        headerSearch.classList.toggle('header__search--visible');
        searchButton.classList.toggle('header__search-button--close');

        searchFieldInput.focus();
      },
      showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('sidebar--active');
        document.body.style.overflow = 'hidden';
      }
    },
    components: {
      Search
    }
  }
</script>
<style>
  .header__container {
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
  }
  .header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__logo {
    font-size: 0;
    width: 100%;
    max-width: 300px;
    margin-right: 20px;
  }
  .header__navigation {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .header__button {
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 30px;
    height: 30px;
  }
  .header__collections-link {
    background-image: url('./../../images/icons/collections.svg');
  }
  .header__search-button {
    width: 25px;
    height: 25px;
    background-image: url('./../../images/icons/search.svg');
  }
  .header__search-button--close {
    background-image: url('./../../images/icons/close.svg');
  }
  .header__sidebar-button {
    display: none;
    background-image: url('./../../images/icons/filter.svg');
  }
  .header__search {
    display: none;
  }
  .header__search--visible {
    display: block;
    margin-top: 20px;
  }
  @media (max-width: 785px) {
    .header__logo {
      margin-right: 40px;
    }
    .header__navigation {
      gap: 20px;
    }
    .header__sidebar-button {
      display: block;
    }
  }
</style>
