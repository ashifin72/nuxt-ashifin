import axios from "axios";

export const state = () => ({
  data_pagination: [],
})
// наполняем массив новыми данными
export const mutations = {
  SET_PAGINATION_TO_STATE: (state, data_pagination) => {
    state.data_pagination = data_pagination;
  }
}
export const actions = {
  GET_ALL_PAGINATION({commit}, data_URL) {
    return axios(this.$axios.defaults.baseURL + data_URL.url + data_URL.num, {
      method: "GET"
    })
      .then((data_pagination) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_PAGINATION_TO_STATE', data_pagination.data.items);
        return data_pagination;
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        return error;
      })
  }

}
export const getters = {
  DATA_PAGINATION(state) {
    return state.data_pagination
  }
}
