export const filterFilms = {
  methods: {
    filterFilms(list) {
      let newList = [];
      let params = Object.assign({}, this.$route.query);
      delete params.page;
      list.filter((film) => {
          let match = Object.keys(params).every(property => {
            let res = null;
            if(typeof film[property] == 'object') {
              res = film[property].some(item => params[property].includes(item));
            }

            else if(film.year) {
              let min = Number(params.year.split('-')[0]);
              let max = Number(params.year.split('-')[1]);

              res = film.year >= min && film.year <= max;
            }

            return res;
          });
          if(match) {
            newList.push(film);
          }
      });
      return newList;
    }
  }
}