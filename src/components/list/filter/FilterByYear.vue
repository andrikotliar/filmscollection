<template>
  <div class="filter">
    <div class="filter__section">
      <div class="filter__header">
        <div class="filter__title">
          Years
        </div>
        <button class="filter__reset" @click="reset" v-if="visible">
          <img src="@/images/icons/close-black.svg" alt="">
        </button>
      </div>
      <div class="filter__range">
        <input type="text" id="min" v-model="minValue" class="filter__input" @change="setData">
        <div class="filter__range-devider"></div>
        <input type="text" id="max" v-model="maxValue" class="filter__input" @change="setData">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilterRange',
    data() {
      return {
        minValue: 1977,
        maxValue: new Date().getFullYear(),
        visible: false
      }
    },
    methods: {
      setData() {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;

        const defaultMinValue = 1977;
        const defaultMaxValue = new Date().getFullYear();

        let min = this.minValue;
        let max = this.maxValue;

        if(this.minValue == '' && this.maxValue != '') {
          min = this.maxValue;
        }

        if(this.maxValue == '' && this.minValue != '') {
          max = this.minValue;
        }

        if(this.minValue == '' && this.maxValue == '') {
          min = defaultMinValue;
          max = defaultMaxValue;
        }

        if(this.maxValue < this.minValue) {
          min = this.maxValue;
          max = this.minValue;
        }

        query.year = min + '-' + max;
        this.$router.push({ query }).catch(err => console.log(err));
        this.visible = true;
      },
      reset() {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        delete query.year;

        this.minValue = 1977;
        this.maxValue = new Date().getFullYear();

        this.$router.push({ query }).catch(err => console.log(err));
        this.visible = false;
      }
    }
  }
</script>
<style>
  .filter__range {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter__range-devider {
    width: 15px;
    height: 2px;
    background-color: #ddd;
    border-radius: 50px;
    margin: 0 10px;
  }
  .filter__input {
    --shadow-color: #ddd;
    color: #777;
    width: 45%;
    padding: 10px;
    text-align: center;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 0 1px var(--shadow-color);
    outline: none;
  }
  .filter__input:focus-visible {
    --shadow-color: var(--base-color);
    color: var(--base-color);
  }
</style>
