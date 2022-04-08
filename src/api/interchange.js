import axios from './axios'

export default {
  index: (freeway_id) => axios({ url: `/freeways/${freeway_id}/interchanges` }),
  all: () => axios({ url: '/interchanges' }),
  create: (data) => axios({ url: '/admin/interchanges', method: 'post', data }),
  update: (id, data) => axios({ url: `/admin/interchanges/${id}`, method: 'put', data }),
  delete: (id) => axios({ url: `/admin/interchanges/${id}`, method: 'delete' }),
}