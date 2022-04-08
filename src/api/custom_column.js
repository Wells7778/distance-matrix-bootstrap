import axios from './axios'

export default {
  index: () => axios({ url: '/custom_columns' }),
  create: (data) => axios({ url: '/admin/custom_columns', method: 'post', data }),
  update: (id, data) => axios({ url: `/admin/custom_columns/${id}`, method: 'put', data }),
  delete: (id) => axios({ url: `/admin/custom_columns/${id}`, method: 'delete' }),
}