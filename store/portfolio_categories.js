import axios from "axios"
export const state = () => ({
  p_all_categories: [],
  p_filter_categories: []

})
// наполняем массив новыми данными
export const mutations = {
  SET_P_FILTER_CATEGORIES_TO_STATE: (state, p_filter_categories) => {
    state.p_filter_categories = p_filter_categories;
  }

}
export const actions = {
  // получаем данные всех категорий для фильтра
  async GET_P_FILTER_CATEGORIES_FROM_API({commit}) {
    return await axios(this.$axios.defaults.baseURL + '/portfolio/filer', {
      method: "GET"
    })
      .then((p_filter_categories) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_P_FILTER_CATEGORIES_TO_STATE',
          p_filter_categories.data.data);
        return p_filter_categories;
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error;
      })
  }
  // // получаем данные одной категории
  // async GET_ONE_CATEGORY_FROM_API({commit}) {
  //   return await axios(this.$axios.defaults.baseURL + '/portfolio/filer', {
  //     method: "GET"
  //   })
  //     .then((p_one_category) => { //если нормально то в мутаторе загоняем данные в массив
  //       commit('SET_P_FILTER_CATEGORIES_TO_STATE',
  //         p_one_category.data.data);
  //       return p_one_category;
  //     })
  //     .catch((error) => { // если нет выдаем ошибку в консоль
  //       console.log(error)
  //       return error;
  //     })
  // },
}
export const getters = {
  P_FILTER_CATEGORIES(state) {
    return state.p_filter_categories
  }

}
