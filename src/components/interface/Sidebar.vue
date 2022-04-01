<template>
  <aside class="sidebar">
    <div class="sidebar__controls">
      <button class="hide-sidebar" @click="hideSidebar">
        <img src="@/images/icons/close-black.svg" alt="">
      </button>
    </div>
    <ListFilters />
  </aside>
</template>
<script>
  import ListFilters from '@/components/list/ListFilters';
  export default {
    name: 'Sidebar',
    components: {
      ListFilters
    },
    methods: {
      hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('sidebar--active');
        document.body.style.overflow = '';
      }
    }
  }
</script>
<style>
  .sidebar {
    width: 280px;
    margin-right: 30px;
    flex-shrink: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    border-right: 1px solid #ccc;
  }
  .sidebar__controls {
    display: none;
  }
  .show-sidebar {
    display: none !important;
  }
  @media (max-width: 1200px) {
    .sidebar {
      width: 200px;
    }
  }
  @media (max-width: 785px) {
    .sidebar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      border-right: 0;
      padding-top: 0;
      padding-left: 20px;
      visibility: hidden;
      transform: translateX(-120%);
      transition: transform 0.3s, visibility 0.3s;
      z-index: 999;
    }
    .sidebar--active {
      visibility: visible;
      transform: translateX(0);
      overflow-y: scroll;
    }
    .sidebar__controls {
      display: flex;
      justify-content: flex-end;
      background-color: #fff;
      position: sticky;
      top: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      z-index: 20;
    }
    .show-sidebar {
      display: flex !important;
    }
    .hide-sidebar {
      display: block;
      width: 20px;
      height: 20px;
    }
  }
</style>
