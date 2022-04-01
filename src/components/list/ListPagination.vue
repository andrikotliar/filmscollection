<template>
  <div class="list__pagination pagination" v-if="pageCount > 1">
    <button
      v-for="(page, index) in pagesList"
      class="pagination__page"
      :class="setCurPageClassName(page)"
      :key="index"
      @click="setPage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ListPagination",
  props: {
    count: Number,
    perPage: Number
  },
  data() {
    return {
      curPage: 1
    }
  },
  methods: {
    setPage(page) {
      this.curPage = page;
      this.changePage();
    },
    changePage() {
      const query = Object.assign({}, this.$route.query);
      query.page = this.curPage;
      this.$router.push({ query }).catch((err) => {console.log(err)});
    },
    setCurPage() {
      if(this.$route.query.page) {
        this.curPage = Number(this.$route.query.page);
      }
    },
    setCurPageClassName(page) {
      if(this.curPage == page) {
        return 'pagination__current-page';
      }
      return '';
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.count / this.perPage);
    },
    pagesList() {
      let pages = [];
      let delta = 1;
      if(this.curPage == 2 || this.curPage == this.pageCount - 1) {
        delta = 2;
      }
      if(this.curPage == 1 || this.curPage == this.pageCount) {
        delta = 3;
      }
      let left = this.curPage - delta;
      let right = this.curPage + delta + 1;
      for(let i = 1; i <= this.pageCount; i++) {
        if(i == 1 || i == this.pageCount || i >= left && i < right) {
          pages.push(i);
        }
      }
      return pages;
    }
  },
  mounted() {
    this.setCurPage();
  },
  watch: {
    '$route'(to, from) {
      if(to != from) {
        this.setCurPage();
      }
      if(!to.query.page) {
        this.curPage = 1;
      }
    }
  }
}
</script>

<style>
  .pagination {
    display: flex;
    gap: 5px;
  }
  .pagination__page {
    font-size: 12px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    text-align: center;
    color: #777;
    border: 1px solid #777;
    border-radius: 2px;
    background: none;
    outline: none;
    cursor: pointer;
    flex-shrink: 0;
    transition: 0.3s;
  }
  .pagination__page:hover,
  .pagination__current-page {
    color: #fff;
    background-color: var(--base-color);
    border-color: var(--base-color);
  }
</style>