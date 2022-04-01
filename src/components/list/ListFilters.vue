<template>
	<div class="list__filters list-filters">

    <FilterUseCheckbox
      v-for="(item, index) in checkboxes"
      :title="item.title"
      :filter="item"
      :key="index"
    />

    <FilterByYear />

    <FilterUseSelect
      v-for="select in selects"
      :title="select.title"
      :property="select.property"
      :options="select.options"
      :key="select.title"
    />

    <button class="list-filters__button list-filters__button--apply" @click="hideSidebar" v-if="filterLength">Apply</button>

    <button class="list-filters__button" @click="clearFilters" v-if="filterLength">Clear</button>

  </div>
</template>

<script>
  import { checkboxes, selects } from '@/data/filters.js';

  import FilterUseCheckbox from './filter/FilterUseCheckbox';
  import FilterByYear from './filter/FilterByYear';
  import FilterUseSelect from './filter/FilterUseSelect';

	export default {
		name: 'ListFilters',
		data() {
			return {
        checkboxes,
        selects
			}
		},
		methods: {
      clearFilters() {
        const selects = document.querySelectorAll('select');

        this.$router.push(this.$route.path);
        this.checkboxes.forEach(filter => filter.model = []);

        selects.forEach(select => {
          const option = select.querySelector('option');
          option.selected = true;
        })
      },
      hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('sidebar--active');
        document.body.style.overflow = '';
      }
		},
		computed: {
			filterLength() {
        let show = false;
				let length = Object.keys(this.$route.query).length;
        if((length == 1 && !this.$route.query) || length > 1) {
          show = true;
        }
        return show;
			}
		},
    components: {
      FilterUseCheckbox,
      FilterByYear,
      FilterUseSelect
    }
	}
</script>

<style>
	.list-filters__button {
    color: #fff;
    width: 100%;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
    background-color: var(--base-color);
    transition: box-shadow 0.3s;
	}
  .list-filters__button:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  .list-filters__button:last-child {
    margin-bottom: 0;
  }
  .list-filters__button--apply {
    display: none;
  }
  @media (max-width: 785px) {
    .list-filters__button--apply {
      display: block;
    }
  }
</style>
