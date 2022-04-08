import axios from './axios'

export default {
  index: (params = {}) => axios({ url: '/admin/stations', params }),
  show: (id) => axios({ url: `/admin/stations/${id}` }),
  create: (data) => axios({ url: '/admin/stations', method: 'post', data }),
  update: (id, data) => axios({ url: `/admin/stations/${id}`, method: 'put', data }),
  delete: (id) => axios({ url: `/admin/stations/${id}`, method: 'delete' }),
}