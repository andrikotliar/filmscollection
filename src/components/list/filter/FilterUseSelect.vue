<template>
  <div class="filter">
    <div class="filter__header">
      <div class="filter__title">
        {{title}}
      </div>
      <button class="filter__reset" @click="reset" v-if="visible">
        <img src="@/images/icons/close-black.svg" alt="">
      </button>
    </div>
    <div class="filter__select-wrapper">
      <select v-model="currentOption" @change="setFilter">
        <option disabled value="">Choose {{title}}</option>
        <option v-for="(option, index) in options" :key="index">
          {{option}}
        </option>
      </select>
      <span class="filter__select-arrow"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilterSelect',
    props: {
      title: String,
      options: Array,
      property: String
    },
    data() {
      return {
        currentOption: '',
        visible: false
      }
    },
    methods: {
      setFilter() {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        query[this.property] = this.currentOption;
        this.$router.push({ query }).catch(err => console.log(err));
        this.visible = true;
			},
      reset() {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        delete query[this.property];

        this.currentOption = '';
        this.visible = false;

        this.$router.push({ query }).catch(err => console.log(err));
      }
    }
  }
</script>
<style>
  .filter__select-wrapper {
    --select-color: #ddd;
    position: relative;
    width: 100%;
  }
  .filter__select-wrapper select {
    appearance: none;
    color: #777;
    width: 100%;
    padding: 10px 20px;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 0 1px var(--select-color);
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }
  .filter__select-arrow {
    position: absolute;
    display: block;
    top: 50%;
    right: 20px;
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--select-color);
    border-bottom: 2px solid var(--select-color);
    transform: translateY(calc(-50% - 2.5px)) rotate(45deg);
    transition: 0.3s;
  }
  .filter__select-wrapper select:focus-visible,
  .filter__select-wrapper select:focus-visible + .filter__select-arrow {
    --select-color: var(--base-color);
    color: var(--base-color);
  }
</style>
