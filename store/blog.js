import axios from "axios";

export const state = () => ({
  data_posts: [],
})
// наполняем массив новыми данными
export const mutations = {
  SET_POSTS_TO_STATE: (state, data_posts) => {
    state.data_posts = data_posts;
  }
}
export const actions = {
  GET_ALL_POSTS({commit}, data_URL) {
    return axios(this.$axios.defaults.baseURL + data_URL.url + data_URL.num, {
      method: "GET"
    })
      .then((data_posts) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_POSTS_TO_STATE', data_posts.data.items.data);
        return data_posts;
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        return error;
      })
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('/blog/posts')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
export const getters = {
  DATA_POSTS(state) {
    return state.data_posts
  }
}
