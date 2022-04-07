import axios from './axios'

export default {
  index: () => axios({ url: '/freeways' })
}