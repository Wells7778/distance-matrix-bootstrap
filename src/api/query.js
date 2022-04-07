import axios from './axios'

export default {
  index: () => axios({ url: '/queries' }),
  new: (params) => axios({ url: '/queries/new', params }),
  show: (id) => axios({ url: `/queries/${id}` }),
  create: (data) => axios({ url: `/queries`, method: 'POST', data }),
}