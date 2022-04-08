import axios from './axios'

export default {
  index: () => axios({ url: '/notes' }),
  create: (data) => axios({ url: '/admin/notes', method: 'post', data }),
  update: (id, data) => axios({ url: `/admin/notes/${id}`, method: 'put', data }),
  delete: (id) => axios({ url: `/admin/notes/${id}`, method: 'delete' }),
}