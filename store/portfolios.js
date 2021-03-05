import axios from 'axios'

export const state = () => ({
  data_portfolios: [],
  data_cat_portfolios: [],
  data_portfolio: null,
  data_feedback: null,
  p_one_category: [],
  isLoading: false,
  error: null
})
// наполняем массив новыми данными
export const mutations = {
  CLEAR_DATA_PORTFOLIOS: (state, data_portfolios) => {
    state.data_portfolios = null
  },
  CLEAR_ONE_CAT_DATA_PORTFOLIOS: (state, p_one_categor) => {
    state.p_one_categor = null
  },
  SET_PORTFOLIOS_TO_STATE: (state, data_portfolios) => {
    state.data_portfolios = data_portfolios
  },
  SET_PORTFOLIO_TO_STATE: (state, data_portfolio) => {
    state.data_portfolio = data_portfolio
  },
  SET_FEEDBACK_TO_STATE: (state, data_feedback) => {
    state.data_feedback = data_feedback
  },
  SET_ONE_CATEGORY_TO_STATE: (state, data_cat_portfolios) => {
    state.data_cat_portfolios = data_cat_portfolios
  }
}

export const actions = {
  // получаем данные для всех категорий портволио
  async GET_PORTFOLIOS_FROM_API({ commit }, data_URL) {
    commit('CLEAR_DATA_PORTFOLIOS')
    return await axios(this.$axios.defaults.baseURL + data_URL.url + data_URL.num, {
      method: 'GET'
    })
      .then((data_portfolios) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_PORTFOLIOS_TO_STATE',
          data_portfolios.data.items.data)
        commit('SET_ONE_CATEGORY_TO_STATE',
          data_portfolios.data.category)
        return data_portfolios
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error
      })
  },
  // получаем данные одной категории портволио
  async GET_ONE_CAT_PORTFOLIOS_FROM_API({ commit }, data_URL) {
    commit('CLEAR_DATA_PORTFOLIOS')
    return await axios(this.$axios.defaults.baseURL + data_URL.url + data_URL.num, {
      method: 'GET'
    })
      .then((data_cat_portfolios) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_ONE_CATEGORY_TO_STATE',
          data_cat_portfolios.data.category)
        return data_cat_portfolios
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error
      })
  },
  async GET_ONE_PORTFOLIO_FROM_API({ commit }, slug) {

    return await axios(this.$axios.defaults.baseURL + slug, {
      method: 'GET'
    })
      .then((data_portfolio) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_PORTFOLIO_TO_STATE',
          data_portfolio.data.item)
        return data_portfolio
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error
      })
  },
  async fetchById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async GET_FEEDBACK_FROM_API({ commit }, slug) {

    return await axios(this.$axios.defaults.baseURL + slug, {
      method: 'GET'
    })
      .then((data_feedback) => { //если нормально то в мутаторе загоняем данные в массив
        commit('SET_FEEDBACK_TO_STATE',
          data_feedback.data.feedback)
        console.log(this.$axios.defaults.baseURL + slug)
        return data_feedback
      })
      .catch((error) => { // если нет выдаем ошибку в консоль
        console.log(error)
        return error
      })
  }
}
export const getters = {
  PORTFOLIOS_DATA(state) {
    return state.data_portfolios
  },
  PORTFOLIOS_CAT_DATA(state) {
    return state.data_cat_portfolios
  },
  P_DATA(state) {
    return state.data_portfolio
  },
  F_DATA(state) {
    return state.data_feedback
  },
  P_ONE_CATEGORY(state) {
    return state.p_one_category
  }
}
