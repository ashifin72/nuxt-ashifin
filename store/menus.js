import axios from "axios"
export const state = () => ({
  top_menus: []
})
// наполняем массив новыми данными
export const mutations = {
  SET_MENU_TO_STATE: (state, top_menus) => {
    state.top_menus = top_menus;
  }
}
export const actions = {
  // получаем данные
  GET_MENU_FROM_API({commit}) {
    return axios(this.$axios.defaults.baseURL + '/menu/top', {
      method: "GET"
    })
      .then((top_menus) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_MENU_TO_STATE', top_menus.data.data);
        return top_menus;
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error;
      })
  },
}
export const getters = {
  TOP_MENU(state) {
    return state.top_menus
  }
}
