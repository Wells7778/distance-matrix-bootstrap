import axios from 'axios'
import { useRouter } from 'vue-router'
const token = localStorage.getItem('token')
const config = {
  baseURL: import.meta.env.VITE_BASE_URL
}
if (token) {
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }
}

const instance = axios.create(config)

instance.interceptors.response.use(
  (response) => {
    if (response.data?.data?.api_token) {
      localStorage.setItem('token', response.data.data.api_token)
    }
    return response
  }, (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      const router = useRouter()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default instance