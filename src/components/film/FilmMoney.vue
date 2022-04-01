<template>
  <div class="film__money">
    <div class="money" v-if="budget">
      <div class="money__title">
        Budget
      </div>
      <div class="money__value">
        <span>$</span> <b>{{budget.value}}</b> <span>{{budget.suffix}}</span>
      </div>
    </div>
    <div class="money" v-if="boxoffice">
      <div class="money__title">
        Box Office
      </div>
      <div class="money__value" :class="boxOfficeStatus">
        <span>$</span> <b>{{boxoffice.value}}</b> <span>{{boxoffice.suffix}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmMoneyItem",
  props: {
    budget: Object,
    boxoffice: Object
  },
  computed: {
    boxOfficeStatus() {
      const hasBillion = this.boxoffice.suffix == "billion";

      if(this.budget) {
        if (this.boxoffice.value > this.budget.value || hasBillion) {
          return "money__value--success";
        } else {
          return "money__value--failure";
        }
      } else {
        return "money__value--no-data";
      }
    },
  },
};
</script>

<style>
  .money {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .money__title {
    width: 100px;
    font-weight: bold;
    flex-shrink: 0;
  }
  .money__value b {
    font-size: 18px;
    font-weight: bold;
  }
  .money__value span {
    color: #777;
    font-size: 16px;
  }
  .money__value--success b {
    color: #23ca78;
  }
  .money__value--failure b {
    color: #f02525;
  }
</style>
