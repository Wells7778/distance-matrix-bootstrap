import axios from './axios'

export default {
  index: (queryId) => axios({ url: `/queries/${queryId}/results` }),
}