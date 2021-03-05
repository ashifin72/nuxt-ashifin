import axios from '@/api/axios'

const register = credentials => {
  return axios.post('/users/register', {user: credentials})
}

export default {
  register
}
