<template>
  <h1 class="page-title">
    {{title}} <span>{{value}}</span>
  </h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    value: String
  }
}
</script>

<style>

</style>