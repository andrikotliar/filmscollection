<template>
    <div class="filter">
      <div class="filter__section">
        <div class="filter__header">
          <div class="filter__title">
            {{title}}
          </div>
          <button
            class="filter__reset"
            @click="reset"
            v-if="visible"
          >
            <img src="@/images/icons/close-black.svg" alt="">
          </button>
        </div>
        <div class="filter__list">
          <label
            v-for="(option, index) in filter.options"
            :key="index"
            class="filter__option"
          >
            <input
              type="checkbox"
              v-model="filter.model"
              :value="option"
              @change="setFilter(filter.property, filter.model)"
              class="filter__checkbox"
            >
            <div class="filter__option-title">
              {{option}}
            </div>
          </label>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'FilterCheckbox',
    props: {
      title: String,
      filter: Object
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      setFilter(param, item) {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        query[param] = item;
        this.$router.push({ query }).catch(err => console.log(err));
        this.visible = true
			},
      reset() {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        delete query[this.filter.property];

        this.filter.model = [];

        this.$router.push({ query }).catch(err => console.log(err));
        this.visible = false;
      }
    }
  }
</script>
<style>
  .filter {
    position: relative;
    margin-bottom: 20px;
  }
  .filter:last-child {
    margin-bottom: 0;
  }
  .filter__header {
    display: flex;
  }
  .filter__title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .filter__reset {
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }
  .filter__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .filter__checkbox {
    display: none;
  }
  .filter__option-title {
    font-size: 14px;
    padding: 5px 10px;
    background-color: #f2f2f2;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .filter__option:hover .filter__option-title {
    background-color: #ddd;
  }
  .filter__checkbox:checked ~ .filter__option-title {
    color: #fff;
    background-color: var(--base-color);
  }
</style>