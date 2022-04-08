import axios from './axios'

export default {
  login: (data) => axios({ url: '/admin/login', method: 'POST', data }),
}