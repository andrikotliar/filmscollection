<template>
  <div class="home">
    <div class="page container">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Sidebar from '@/components/interface/Sidebar';
  export default {
    name: 'Home',
    components: {
      Sidebar
    }
  }
</script>
