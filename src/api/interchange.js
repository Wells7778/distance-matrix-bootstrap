import axios from './axios'

export default {
  index: (freeway_id) => axios({ url: `/freeways/${freeway_id}/interchanges` }),
  all: () => axios({ url: '/interchanges' }),
}